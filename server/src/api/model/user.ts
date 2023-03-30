import mongoose, { InferSchemaType } from "mongoose";

const { Schema } = mongoose;
// _id as email
const student = new Schema({
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
  major: {
    type: String,
  },
  intake: {
    type: Number,
  },
});
export const Student = mongoose.model("Student", student);
export type StudentType = InferSchemaType<typeof student>;

const lecturer = new Schema({
  name: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
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
});
export const Lecturer = mongoose.model("Lecturer", lecturer);
export type LecturerType = InferSchemaType<typeof lecturer>;
