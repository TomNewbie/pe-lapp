import mongoose from "mongoose";
import { IUser } from "../types/user";
const { Schema } = mongoose;
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  major: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  avatar: {
    type: String,
  },
});
