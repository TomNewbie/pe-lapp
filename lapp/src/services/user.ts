import { apiRequest } from ".";
import { trimField } from "../utils/string_utils";

export const updateUserProfile = async (
  fields:
    | {
        major?: string;
        intake?: number;
        phone_number?: string;
      }
    | {
        faculty?: string;
        phone_number?: string;
      }
) => {
  console.log(trimField(fields));
  await apiRequest("/api/user/profile", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(trimField(fields)),
  });
};
