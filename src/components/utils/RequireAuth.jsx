import { useLocation, Navigate, Outlet } from "react-router-dom";
import UseAuth from "./UseAuth";

const RequireAuth = () => {
  const { auth } = UseAuth();
  const location = useLocation();
  // auth?.email
  return sessionStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
