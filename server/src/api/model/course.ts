import mongoose, { InferSchemaType, Schema } from "mongoose";
export const course = new Schema({
  name: {
    type: String,
    required: [true, "Course name is missing"],
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
    required: [true, "Course description is missing"],
  },
  lecturer_id: {
    type: String,
    ref: "Lecturer",
    required: true,
    index: true,
  },
  participants: [
    {
      type: String,
      ref: "Student",
      required: true,
      index: true,
    },
  ],
});
export const Course = mongoose.model("Course", course);

export type CourseType = InferSchemaType<typeof course>;
export type NewCourseType = Omit<CourseType, "participants" | "picture">;