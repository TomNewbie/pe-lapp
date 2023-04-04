import mongoose, { Schema } from "mongoose";

export const RichText = mongoose.model(
  "RichText",
  new Schema({
    content: {
      type: String,
      required: true,
    },
  })
);
