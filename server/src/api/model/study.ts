import mongoose, { Schema } from "mongoose";
export const study = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  course: {
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
