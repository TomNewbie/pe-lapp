import mongoose, { Schema } from "mongoose";
import { ICourse } from "../types/course";
export const course = new Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RichText",
    required: true,
    index: true,
  },
  picture: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  lecturer: {
    email: {
      type: String,
      ref: "Lecturer",
      required: true,
      index: true,
    },
    name: {
      type: String,
      ref: "Lecturer",
      required: true,
    },
  },
  participants: [
    {
      id: {
        type: String,
        ref: "Student",
        required: true,
        index: true,
      },
      progress: {
        type: Number,
        required: true,
      },
    },
  ],
});
export const Course = mongoose.model("course", course);
