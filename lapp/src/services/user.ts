import { apiRequest } from ".";

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
  await apiRequest("/api/user/profile", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};
