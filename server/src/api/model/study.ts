import mongoose, { Schema } from "mongoose";
export const study = new Schema({
  student_id: {
    type: String,
    ref: "Student",
    required: true,
  },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  progress: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const Study = mongoose.model("Study", study);
