import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axiosAPI from "../../api/axios";
import "../styles/MyAccount.css";
import AuthContext from "../utils/Auth";

const MyAccount = () => {
  const [users, setUsers] = useState("");
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  // window.onbeforeunload = function () {
  //   localStorage.clear();
  //   return "";
  // };

  const logout = async () => {
    setAuth({});
    sessionStorage.clear();
    navigate("/");
  };

  const newPost = async () => {
    navigate("/newpost");
  };
  const app = async () => {
    navigate("/application");
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const accessToken = JSON.parse(token);
    axiosAPI
      .get("/users", {
        headers: {
          Authorization: `JWT ${accessToken}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
        console.log(users);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="accountList">
      <button className="btnLogin2" onClick={logout}>
        Sair
      </button>
      <h1>Informações da Conta</h1>
      <button className="btnLogin2" onClick={newPost}>
        Criar Postagem
      </button>
      <br />
      <button className="btnLogin2" onClick={app}>
        Aplicação de Adoção
      </button>
      <br />
    </div>
  );
};

export default MyAccount;
