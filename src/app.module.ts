import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PredictService } from './services/predict.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PredictService],
})
export class AppModule {
  constructor() {
    return;
  }
}
