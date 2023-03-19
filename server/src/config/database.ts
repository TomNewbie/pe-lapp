import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.8c6w6lm.mongodb.net/?retryWrites=true&w=majority`;
// https://mongoosejs.com/docs/5.x/docs/deprecations.html

export const db = mongoose.connect(MONGODB_URI);
