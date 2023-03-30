import mongoose, { InferSchemaType, Schema } from "mongoose";
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
      email: {
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
export const Course = mongoose.model("Course", course);

export type CourseType = InferSchemaType<typeof course>;
