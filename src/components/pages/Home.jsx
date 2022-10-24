import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const logged = sessionStorage.getItem("token");
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="backDog">
      {logged ? (
        <>
          <Link className="accountButton" onClick={logout}>
            Sair
          </Link>
          <Link className="accountButton" to="/account">
            Minha Conta
          </Link>
        </>
      ) : (
        <input hidden />
      )}

      <section className="homeContainer">
        <h1>
          Bem-vindo ao <span>AdoPet</span>{" "}
        </h1>
        <p>Ajudando no amparo de animais abandonados.</p>
        <Link className="adoteButton" to="/posts">
          Adote Já!
        </Link>
      </section>
    </div>
  );
}

export default Home;
