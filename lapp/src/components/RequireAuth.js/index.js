import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../auth";

const RequireAuth = () => {
  const location = useLocation();
  const auth = useAuth();
  return auth?.user ? (
    <Outlet />
  ) : (
    // redirect if the user is null and the auth state is not pending
    auth?.pending || (
      <Navigate to="/" state={{ from: location }} replace></Navigate>
    )
  );
};

export default RequireAuth;
