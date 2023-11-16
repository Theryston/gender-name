import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HfInference } from '@huggingface/inference';
import { models } from './mocks/models';
import sanitizeName from './utils/sanitize-name'

const DEFAULT_MODEL = 'gnbr';

@Injectable()
export class AppService {
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

    const inference = new HfInference(process.env.HF_ACCESS_TOKEN);
    const result = await inference.textClassification({
      inputs: sanitizedFirstName,
      model: model.huggingface,
    });
    const mainResult = result.sort((a, b) => b.score - a.score)[0];

    return {
      name: sanitizedFirstName,
      gender: mainResult.label,
      score: mainResult.score,
      full_result: result,
    };
  }
}
