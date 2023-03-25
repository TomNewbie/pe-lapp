import { Lecturer, Student } from "../model/user";
import { IGoogleUser, IUser } from "../types/user";

const getUser = (email: string): Promise<IUser | null> => {
  return Student.findOne({ email });
};

const addUser = async (user: IGoogleUser) => {
  if (user.email.split("@")[1].includes("student")) {
    await Student.create({ ...user });
    return;
  }
  await Lecturer.create({ ...user });
};

export { getUser, addUser };
