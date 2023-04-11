import mongoose, { InferSchemaType, Schema, Types } from "mongoose";
export const course = new Schema({
  name: {
    type: String,
    required: [true, "Course name is missing"],
  },
  contents: [
    {
      type: Types.ObjectId,
      ref: "CourseContent",
      required: true,
      index: true,
    },
  ],
  picture: {
    type: String,
    required: true,
    default: "https://s3.memeshappen.com/memes/of-course-.jpg",
  },
  semester: {
    type: String,
    required: true,
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
