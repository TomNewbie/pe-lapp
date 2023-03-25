import mongoose, { Schema } from "mongoose";
import { ICourse } from "../types/course";
export const Course = mongoose.model(
  "course",
  new Schema<ICourse>({
    name: {
      type: String,
      required: true,
    },
    content: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RichText",
      required: true,
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
      type: Number,
      required: true,
    },
    lecturer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lecturer",
      required: true,
    },
    participants: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
          required: true,
        },
        progress: {
          type: Number,
          required: true,
        },
      },
    ],
  })
);
