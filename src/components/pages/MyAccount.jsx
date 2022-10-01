import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../utils/Auth";

const MyAccount = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    navigate("/");
  };
  const newPost = async () => {
    navigate("/newpost");
  };

  return (
    <div>
      <h1>Informações da Conta</h1>
      <button onClick={newPost}>Criar Postagem</button>
      <br />
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default MyAccount;
