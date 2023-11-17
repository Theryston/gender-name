import { Controller, Get, Query, Ip, Post, Body } from '@nestjs/common';
import { PredictService } from './services/predict.service';
import { ListModelsService } from './services/list-models.service';

@Controller()
export class AppController {
  constructor(
    private readonly predictService: PredictService,

    private readonly listModelsService: ListModelsService,
  ) {
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
    return await this.predictService.execute({
      name,
      ip,
      modelName: model,
    });
  }

  @Post('/predict')
  async createPredict(
    @Body()
    body: {
      name: string;
      model?: string;
    },
    @Ip() ip: string,
  ) {
    return await this.predictService.execute({
      name: body.name,
      modelName: body.model,
      ip,
    });
  }

  @Get('/models')
  models() {
    return this.listModelsService.execute();
  }
}
