import mongoose, { Schema } from "mongoose";

const solution = new Schema(
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
        _id: false,
      },
    ],
    grade: {
      type: Number,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

export const Solution = mongoose.model("Solution", solution);
