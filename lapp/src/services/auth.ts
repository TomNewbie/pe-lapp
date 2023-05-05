import { apiRequest } from ".";

export const logout = async () => {
  await apiRequest("/api/auth/logout");
};
