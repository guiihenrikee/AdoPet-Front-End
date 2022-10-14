import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Application.css";

const Application = () => {
  const navigate = useNavigate();

  // window.onbeforeunload = function () {
  //   localStorage.clear();
  //   return "";
  // };
  const goBack = async () => {
    navigate("/account");
  };
  return (
    <div className="apply">
      <button className="btnLogin2" onClick={goBack}>
        Voltar
      </button>
      <h1>Preencha o formulário abaixo</h1>
    </div>
  );
};

export default Application;
