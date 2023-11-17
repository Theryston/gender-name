import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let isConnected = false;

export default async function getClient() {
  console.log(`Getting client isConnected: ${isConnected}`);
  if (!isConnected) {
    console.log(`Connecting to the database again...`);
    await client.connect();
    isConnected = true;
    console.log(`Database connected successfully!`);
  }

  await client.db('prod').command({ ping: 1 });

  return client.db('prod');
}

export function getClientOnly() {
  return client;
}
