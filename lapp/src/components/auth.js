import { createContext, useCallback, useContext } from "react";
import { useAPI } from "../hooks/useAPI";
import { login, logout as _logout } from "../services/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { data: user, pending, refresh } = useAPI({ path: "/api/user/info" });

  const logout = useCallback(async () => {
    await _logout();
    await refresh();
  }, [refresh]);

  return (
    <AuthContext.Provider value={{ user, pending, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
