import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import sanitizeName from '../utils/sanitize-name';
import { models } from '../mocks/models';
import Replicate from 'replicate';

const DEFAULT_MODEL = 'gnbr';

@Injectable()
export class PredictService {
  async execute(name: string, modelName?: string) {
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

    const model = models.find((m) => m.name === modelName);

    if (!model) {
      throw new HttpException('Model not found', HttpStatus.NOT_FOUND);
    }

    const replicate = new Replicate({
      auth: process.env.REPLICATE_TOKEN,
    });

    const output = await replicate.run(
      `${model.replicateOwnerName}/${model.replicateName}:${model.replicateStableVersion}`,
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

    return {
      name: sanitizedFirstName,
      gender: maxGender,
      score: maxScore,
      full_result: sortedFullResult,
    };
  }
}
