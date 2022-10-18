import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axiosAPI from "../../api/axios";
import "../styles/MyAccount.css";
import AuthContext from "../utils/Auth";
import AccountDetails from "./AccountDetails";
import MyPosts from "./MyPosts";

const MyAccount = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    sessionStorage.clear();
    navigate("/");
  };

  const newPost = async () => {
    navigate("/newpost");
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="accountList">
        <div>
          <button className="btnLogin2" onClick={logout}>
            Sair
          </button>
          <button className="btnLogin2" onClick={newPost}>
            Criar Postagem
          </button>
        </div>

        <div className="accountInfo">
          <h1>Informações da Conta</h1>
          <AccountDetails />
        </div>

        <div className="postInfo">
          <MyPosts />
        </div>
      </div>
    </>
  );
};

export default MyAccount;
