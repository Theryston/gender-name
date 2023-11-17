import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PredictService } from './services/predict.service';
import { ListModelsService } from './services/list-models.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PredictService, ListModelsService],
})
export class AppModule {
  constructor() {
    return;
  }
}
