import mongoose, { InferSchemaType, Schema } from "mongoose";

const student = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      default: "Student",
    },
    avatar: {
      type: String,
      required: true,
      default: "https://i.stack.imgur.com/34AD2.jpg",
    },
    phone_number: {
      type: String,
      validate: {
        validator: function (v: string) {
          return /^0\d{9}$/.test(v);
        },
      },
    },
    major: {
      type: String,
      enum: ["CSE", "ECE", "BCE", "ME", "BFA", "BA", "ARC"],
    },
    intake: {
      type: Number,
      min: 2008,
      max: 2023,
      validate: {
        validator: function (v: number) {
          return Number.isInteger(v);
        },
      },
    },
  },
  { _id: false }
);
export const Student = mongoose.model("Student", student);
export type StudentType = InferSchemaType<typeof student>;

const lecturer = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      default: "Lecturer",
    },
    avatar: {
      type: String,
      required: true,
      default: "https://i.stack.imgur.com/34AD2.jpg",
    },
    phone_number: {
      type: String,
      validate: {
        validator: function (v: string) {
          return /^0\d{9}$/.test(v);
        },
      },
    },
    faculty: {
      type: String,
      enum: ["Engineering", "Economics"],
    },
  },
  { _id: false }
);
export const Lecturer = mongoose.model("Lecturer", lecturer);
export type LecturerType = InferSchemaType<typeof lecturer>;
