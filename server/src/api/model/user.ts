import mongoose, { InferSchemaType, Schema } from "mongoose";

const student = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
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
  },
  { _id: false }
);
export const Student = mongoose.model("Student", student);
export type StudentType = InferSchemaType<typeof student>;

const lecturer = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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
  },
  { _id: false }
);
export const Lecturer = mongoose.model("Lecturer", lecturer);
export type LecturerType = InferSchemaType<typeof lecturer>;
