import mongoose, { InferSchemaType, Schema } from "mongoose";

const course = new Schema({
  name: {
    type: String,
    required: [true, "Course name is missing"],
  },
  contents: [
    {
      type: Schema.Types.ObjectId,
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

const courseContent = new Schema(
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
