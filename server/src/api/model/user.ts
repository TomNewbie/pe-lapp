import mongoose from "mongoose";
import { ILecturer, IStudent } from "../types/user";

const { Schema } = mongoose;

export const Student = mongoose.model(
  "student",
  new Schema<IStudent>({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
    },
    major: {
      type: String,
    },
    intake: {
      type: Number,
    },
  })
);

export const Lecturer = mongoose.model(
  "lecturer",
  new Schema<ILecturer>({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
    },
    faculty: {
      type: String,
    },
  })
);
