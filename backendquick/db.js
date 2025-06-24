import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

export default async function getDataBase() {
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const database = client.db('quickscore');
    if (!database)
        console.log("Database not connected");
    return database;
}
