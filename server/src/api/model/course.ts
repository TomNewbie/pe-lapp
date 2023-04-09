import mongoose, { InferSchemaType, Schema } from "mongoose";
export const course = new Schema({
  name: {
    type: String,
    required: true,
    default: "New Course",
  },
  content: {
    type: String,
  },
  picture: {
    type: String,
    required: true,
    default: "https://s3.memeshappen.com/memes/of-course-.jpg",
  },
  semester: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: "Please put in some description",
  },
  lecturer_id: {
    type: String,
    ref: "Lecturer",
    required: true,
    index: true,
  },
  participants: [
    {
      student_id: {
        type: String,
        ref: "Student",
        required: true,
        index: true,
      },
      progress: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
        default: 0,
      },
    },
  ],
});
export const Course = mongoose.model("Course", course);

export type CourseType = InferSchemaType<typeof course>;
