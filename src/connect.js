import * as mongodb from 'mongodb';
import {ConnectionParams} from './constants';

export async function mongoDB() {
  const mongoClient = mongodb.MongoClient;
  return mongoClient
    .connect(ConnectionParams.Url, {useNewUrlParser: true})
    .then(client => {
      const db = client.db(ConnectionParams.DataBaseName);
      return {
        client,
        db
      };
    })
    .catch(error => new Error(`Cannot connect to the server with error ${error}`));
}

