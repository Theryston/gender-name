import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HfInference } from '@huggingface/inference';

@Injectable()
export class AppService {
  async execute(name: string) {
    if (!name) {
      throw new HttpException('Name is required', HttpStatus.BAD_REQUEST);
    }

    if (name.length < 2) {
      throw new HttpException(
        'Name must be at least 2 characters',
        HttpStatus.BAD_REQUEST,
      );
    }

    const inference = new HfInference(process.env.HF_ACCESS_TOKEN);
    const result = await inference.textClassification({
      inputs: name,
      model: 'theryston/gender-name',
    });
    const mainResult = result.sort((a, b) => b.score - a.score)[0];
    return {
      name,
      gender: mainResult.label,
      score: mainResult.score,
      full_result: result,
    };
  }
}
