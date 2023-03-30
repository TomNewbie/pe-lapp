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
    lecturer: {
      type: Schema.Types.ObjectId,
      ref: "Lecturer",
      required: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

export const Material = mongoose.model("Material", material);

export type MaterialType = InferSchemaType<typeof material>;
