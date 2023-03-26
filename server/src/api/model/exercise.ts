import mongoose, { Schema } from "mongoose";

export const exercise = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["done", "not done"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Material = mongoose.model("Exercise", exercise);
