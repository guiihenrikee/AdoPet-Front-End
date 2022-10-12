import { Outlet, Navigate, useLocation } from "react-router";
import UseAuth from "../utils/UseAuth";
import { useEffect, useState } from "react";

const IsLogged = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const tokenInfo = sessionStorage.getItem("token");
  const { persist } = UseAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyToken = async () => {
      try {
        await tokenInfo;
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    return () => (isMounted = false);
  }, []);

  return (
    <>
      {!persist ? (
        <Outlet />
      ) : (
        <Navigate to="/account" state={{ from: location }} replace />
      )}
    </>
  );
};

export default IsLogged;
