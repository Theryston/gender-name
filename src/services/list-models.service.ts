import { Injectable } from '@nestjs/common';
import getClient from 'src/database/get-client';

@Injectable()
export class ListModelsService {
  async execute() {
    const clientDb = await getClient();

    const models = clientDb.collection('models').find().toArray();

    return models;
  }
}
