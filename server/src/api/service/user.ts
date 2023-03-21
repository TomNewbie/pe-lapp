import { IUser } from "../model/user";
import { IGoogleUser, IUser } from "../types/user";

const getUser = (email: string): Promise<User | null> => {
  return User.findOne({ email });
};

const addUser = async (user: IGoogleUser) => {
  const role = user.email.split("@")[1].includes("student")
    ? "student"
    : "teacher";
  await User.create({ ...user, role });
};

export { getUser, addUser };
