import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HfInference } from '@huggingface/inference';

@Injectable()
export class AppService {
  sanitizeName(name: string): string {
    const firstName = name.split(/\s+/)[0].replace(/[^a-zA-Z]+/g, '');

    return firstName.toLowerCase();
  }

  async execute(name: string) {
    if (!name) {
      throw new HttpException('Name is required', HttpStatus.BAD_REQUEST);
    }

    const sanitizedFirstName = this.sanitizeName(name);

    if (sanitizedFirstName.length < 2) {
      throw new HttpException(
        'Name must be at least 2 characters',
        HttpStatus.BAD_REQUEST,
      );
    }

    const inference = new HfInference(process.env.HF_ACCESS_TOKEN);
    const result = await inference.textClassification({
      inputs: sanitizedFirstName,
      model: 'theryston/gender-name',
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
