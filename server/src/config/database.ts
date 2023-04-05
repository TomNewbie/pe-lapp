import mongoose from "mongoose";

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.8c6w6lm.mongodb.net/?retryWrites=true&w=majority`;
export const db = mongoose.connect(MONGODB_URI)