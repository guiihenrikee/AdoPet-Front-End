import { useLocation, Navigate, Outlet } from "react-router-dom";
import UseAuth from "./UseAuth";

const RequireAuth = () => {
  const { auth } = UseAuth();
  const location = useLocation();

  return auth?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
