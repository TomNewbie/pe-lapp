import mongoose, { InferSchemaType, Schema } from "mongoose";

export const courseContent = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    file: [
      {
        name: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const CourseContent = mongoose.model("CourseContent", courseContent);

export type CourseContentType = InferSchemaType<typeof courseContent>;
