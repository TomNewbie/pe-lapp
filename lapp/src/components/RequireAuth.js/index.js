import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../auth";

const RequireAuth = () => {
  const location = useLocation();
  const auth = useAuth();
  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace></Navigate>
  );
};

export default RequireAuth;
