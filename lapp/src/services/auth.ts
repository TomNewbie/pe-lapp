import { apiRequest } from ".";

export const login = () => {
  const { location } = window;
  location.href = `/api/auth/login?redirect=${encodeURIComponent(
    location.href
  )}`;
};

export const logout = async () => {
  await apiRequest("/api/auth/logout");
};
