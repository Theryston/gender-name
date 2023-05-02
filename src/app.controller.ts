import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/predict')
  async execute(@Query('name') name: string) {
    return await this.appService.execute(name);
  }
}
