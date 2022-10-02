import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axiosAPI from "../../api/axios";
import "../styles/MyAccount.css";
import AuthContext from "../utils/Auth";

const MyAccount = () => {
  const [users, setUsers] = useState("");
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    navigate("/");
  };

  const newPost = async () => {
    navigate("/newpost");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="accountList">
      <h1>Informações da Conta</h1>
      <button onClick={newPost}>Criar Postagem</button>
      <br />
      <br />
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default MyAccount;
