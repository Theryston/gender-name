import { Controller, Get, Query, Ip } from '@nestjs/common';
import { IModel, models } from './mocks/models';
import { PredictService } from './services/predict.service';

@Controller()
export class AppController {
  constructor(private readonly predictService: PredictService) {
    return;
  }

  @Get('/')
  root() {
    return {
      message: 'Welcome to the Gender Name API!',
      description:
        "An API that uses artificial intelligence to predict someone's gender based on their name",
      endpoints: [
        {
          path: '/predict?name={name}&model={model}',
          description:
            "Predict a person's gender based on their name and selected model. The model is optional",
        },
        {
          path: '/models',
          description: 'Get a list of all available models',
        },
      ],
    };
  }

  @Get('/predict')
  async predict(
    @Query('name') name: string,
    @Ip() ip: string,
    @Query('model') model?: string,
  ) {
    console.log(
      `[/predict] predicting name ${name} with model ${model} for IP ${ip}`,
    );
    return await this.predictService.execute(name, model);
  }

  @Get('/models')
  models(): IModel[] {
    return models;
  }
}
