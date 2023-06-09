import mongoose, { InferSchemaType, Schema } from "mongoose";

const course = new Schema({
  name: {
    type: String,
    required: [true, "Course name is missing"],
  },
  contents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course-Content",
      required: true,
      index: true,
    },
  ],
  picture: {
    type: String,
    default: "https://s3.memeshappen.com/memes/of-course-.jpg",
  },
  semester: {
    type: String,
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
    files: [
      {
        name: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
        refPath: {
          type: String,
          required: true,
        },
        _id: false,
      },
    ],
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const CourseContent = mongoose.model("Course-Content", courseContent);
export type CourseContentType = InferSchemaType<typeof courseContent>;
