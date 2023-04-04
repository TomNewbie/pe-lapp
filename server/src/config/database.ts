import mongoose from "mongoose";
import path from "path"
import dotenv from "dotenv";

const envPath = path.resolve(__dirname, '../../src/.env');
dotenv.config({path: envPath});
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.8c6w6lm.mongodb.net/?retryWrites=true&w=majority`;

export const db = mongoose.connect(MONGODB_URI);
