import mongoose, { InferSchemaType, Schema } from "mongoose";

export const material = new Schema(
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
  },
  { timestamps: true }
);

export const Material = mongoose.model("Material", material);

export type MaterialType = InferSchemaType<typeof material>;
