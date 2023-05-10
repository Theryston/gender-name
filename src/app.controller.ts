import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { IModel, models } from './models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
  async predict(@Query('name') name: string, @Query('model') model?: string) {
    return await this.appService.execute(name, model);
  }

  @Get('/models')
  models(): IModel[] {
    return models;
  }
}
