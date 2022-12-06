import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, Suspense } from "react";
import AuthContext from "../hooks/Auth";
import EditAccount from "./EditAccount";
import "../styles/MyAccount.css";

const MyPosts = React.lazy(() => import("./MyPosts"));

const MyAccount = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="accountList">
        <div className="layout">
          <div className="buttons">
            <button className="accountButton2" onClick={logout}>
              Sair
            </button>
          </div>
          <div className="accountInfo">
            <br />
            <EditAccount />
          </div>

          <div className="postInfo">
            <Suspense fallback={<div>Carregando....</div>}>
              <MyPosts />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
