import {mongoDB} from "./connect";

export async function updateCollection(collection, data) {
    const {client, db} = await mongoDB();
    await db.collection(collection).insertOne(data)
    client && client.close()
}