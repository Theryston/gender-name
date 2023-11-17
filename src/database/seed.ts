import 'dotenv/config';
import getClient, { getClientOnly } from './get-client';
import { models } from './data/models';

async function seed() {
  const clientDb = await getClient();

  for (const model of models) {
    const modelExists = await clientDb.collection('models').findOne({
      name: model.name,
    });

    if (modelExists) {
      await clientDb.collection('models').updateOne(
        {
          _id: modelExists._id,
        },
        {
          $set: {
            ...model,
            updated_at: new Date(),
          },
        },
      );
      console.log(`Model ${model.name} updated`);
    } else {
      await clientDb.collection('models').insertOne({
        ...model,
        created_at: new Date(),
        updated_at: new Date(),
      });
      console.log(`Model ${model.name} created`);
    }
  }

  const clientOnly = getClientOnly();

  await clientOnly.close();
}

seed();
