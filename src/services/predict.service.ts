import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import sanitizeName from '../utils/sanitize-name';
import Replicate from 'replicate';
import getClient from 'src/database/get-client';
import { ObjectId } from 'mongodb';

const DEFAULT_MODEL = 'gnbr';
const MAX_PREDICTS_PER_HOUR = 100;

@Injectable()
export class PredictService {
  async execute({
    name,
    ip,
    noCache,
    modelName,
  }: {
    name: string;
    ip: string;
    noCache?: boolean;
    modelName?: string;
  }) {
    const clientDb = await getClient();

    const predictionsCount = await this.getPredictionsCount(ip, clientDb);

    if (predictionsCount >= MAX_PREDICTS_PER_HOUR) {
      throw new HttpException(
        `Limit of ${MAX_PREDICTS_PER_HOUR} predictions per hour reached`,
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    if (!name) {
      throw new HttpException('Name is required', HttpStatus.BAD_REQUEST);
    }

    if (!modelName) {
      modelName = DEFAULT_MODEL;
    }

    const sanitizedFirstName = sanitizeName(name);

    if (sanitizedFirstName.length < 2) {
      throw new HttpException(
        'Name must be at least 2 characters',
        HttpStatus.BAD_REQUEST,
      );
    }

    const model = await clientDb.collection('models').findOne({
      name: modelName,
    });

    if (!model) {
      throw new HttpException('Model not found', HttpStatus.NOT_FOUND);
    }

    const cachedPrediction = await this.getCachedPrediction(
      model._id,
      sanitizedFirstName,
      clientDb,
    );

    let predictResultOnly;
    if (!cachedPrediction || noCache) {
      const replicate = new Replicate({
        auth: process.env.REPLICATE_TOKEN,
      });

      console.log(
        `[PredictService] predicting name ${sanitizedFirstName} with model ${modelName} for IP ${ip}`,
      );

      const output = await replicate.run(
        `${model.replicate_owner_name}/${model.replicate_name}:${model.replicate_stable_version}`,
        {
          input: {
            name: sanitizedFirstName,
          },
        },
      );

      const maxGender = Object.keys(output).reduce((prev, current) =>
        output[prev] > output[current] ? prev : current,
      );

      const maxScore = output[maxGender];

      const fullResultArr = Object.keys(output).map((label) => ({
        label: label,
        score: output[label],
      }));

      const sortedFullResult = fullResultArr.sort((a, b) => b.score - a.score);

      predictResultOnly = {
        gender: maxGender,
        score: maxScore,
        full_result: sortedFullResult,
        cache: false,
      };
    } else {
      console.log(
        `[PredictService] using cache for name ${sanitizedFirstName} with model ${modelName} for IP ${ip}`,
      );

      predictResultOnly = {
        gender: cachedPrediction.gender,
        score: cachedPrediction.score,
        full_result: cachedPrediction.full_result,
        cache: true,
      };
    }

    const resultCreation = await clientDb.collection('predictions').insertOne({
      raw_name: name,
      name: sanitizedFirstName,
      model_id: model._id,
      ...predictResultOnly,
      ip,
      created_at: new Date(),
      updated_at: new Date(),
    });

    const prediction = await clientDb.collection('predictions').findOne({
      _id: resultCreation.insertedId,
    });

    const currentLimitOneHour =
      MAX_PREDICTS_PER_HOUR - (predictionsCount + (prediction.cache ? 0 : 1));

    return {
      ...prediction,
      current_limit_one_hour: currentLimitOneHour,
    };
  }

  private async getCachedPrediction(
    model_id: ObjectId,
    name: string,
    clientDb: any,
  ) {
    return await clientDb.collection('predictions').findOne({
      model_id,
      name,
    });
  }

  private async getPredictionsCount(
    ip: string,
    clientDb: any,
  ): Promise<number> {
    const startOfHour = new Date();
    startOfHour.setSeconds(0, 0);
    startOfHour.setMinutes(0, 0);

    const count = await await clientDb
      .collection('predictions')
      .countDocuments({
        ip: ip,
        cache: false,
        created_at: { $gte: startOfHour },
      });

    return count;
  }
}
