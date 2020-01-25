import {mongoDB} from "./connect";

export async function updateCollection(data) {
    const {client, db} = await mongoDB();
    await db.collection('test-collection').insertOne(data)
    client && client.close()
}