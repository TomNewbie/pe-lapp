import mongoose, { Schema } from "mongoose";

export const solution = new Schema(
  {
    _id: {
      student: {
        type: String,
        ref: "Student",
        required: true,
      },
      exercise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exercise",
        required: true,
      },
    },
    file: {
      type: String,
      required: true,
    },
    grade: {
      type: Number,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

export const Solution = mongoose.model("Solution", solution);
