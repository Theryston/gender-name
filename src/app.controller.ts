import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { IModel, models } from './models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/predict')
  async predict(@Query('name') name: string, @Query('model') model?: string) {
    return await this.appService.execute(name, model);
  }

  @Get('/models')
  models(): IModel[] {
    return models;
  }
}
