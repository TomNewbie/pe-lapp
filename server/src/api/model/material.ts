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
    lecturer_id: {
      type: String,
      ref: "Lecturer",
      required: true,
    },
    course_id: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

export const Material = mongoose.model("Material", material);

export type MaterialType = InferSchemaType<typeof material>;
