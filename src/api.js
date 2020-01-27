import {mongoDB} from "./connect";

export async function updateCollection(collection, data) {
    const {client, db} = await mongoDB();
    await db.collection(collection).insertOne(data)
    client && client.close()
}


export async function multipleUpdateCollection(collection, data) {
    const {client, db} = await mongoDB();
    await data.forEach(element => {
        db.collection(collection).insertOne(element)
    })
    client && client.close()
}