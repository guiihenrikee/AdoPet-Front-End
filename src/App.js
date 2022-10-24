import React from "react";
import { useNavigate } from "react-router-dom";
import Routing from "./components/utils/Routing";
import "../src/components/styles/App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const logged = sessionStorage.getItem("token");
  const navigate = useNavigate();

  function signedIn() {
    navigate("/login");
    window.location.reload();
  }

  function signedOut() {
    sessionStorage.clear();
    window.location.reload();
    navigate("/");
  }

  return (
    <main>
      <Header
        login={logged ? "Sair" : "Entrar"}
        account={logged ? "Minha Conta" : "Registrar"}
        logt={logged ? signedOut : signedIn}
        regt={logged ? "/account" : "/register"}
      />
      <Routing />
      <Footer note="AdoPet" />
    </main>
  );
}

export default App;
