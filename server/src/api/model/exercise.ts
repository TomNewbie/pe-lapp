import mongoose, { InferSchemaType, Schema } from "mongoose";

const exercise = new Schema(
  {
    name: {
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
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    lecturer: {
      type: String,
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

export const Exercise = mongoose.model("Exercise", exercise);

export type ExerciseType = InferSchemaType<typeof exercise>;
