import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const db = mongoose.connect(process.env.MONGODB_URI!);
