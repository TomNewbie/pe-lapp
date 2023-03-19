import { User } from "../model/user";
import { IUser } from "../types/user";

const checkNewUser = async (user: IUser): Promise<boolean | Error> => {
  try {
    const userExist = await User.findOne({ email: user.email });
    // console.log(userExist);
    if (!userExist) {
      User.create({ name: user.name, email: user.email, role: user.role });
      console.log("user created");
      return true;
    }
    console.log("asdasdasd");
    return false;
  } catch (error) {
    console.log(error);
    return error as Error;
  }
};

export const userService = { checkNewUser };
