import mongoose from "mongoose";
import { Lecturer, Student } from "../model/user";

const getUser = (email: string): Promise<IUser | null> => {
  return Student.findById(email);
};

const addUser = async (user: IGoogleUser) => {
  if (user.email.split("@")[1].includes("student")) {
    const test = await Student.create({ _id: user.email, ...user });
    console.log(test);
    return;
  }
  await Lecturer.create({ _id: user.email, ...user });
};

export { getUser, addUser };
// http://localhost:8080/api/auth/login
