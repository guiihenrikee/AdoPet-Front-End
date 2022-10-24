import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Application.css";

const Application = () => {
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/account");
  };
  return (
    <div className="apply">
      <button className="accountButton2" onClick={goBack}>
        Voltar
      </button>
      <h2>Preencha o formulário abaixo</h2>
    </div>
  );
};

export default Application;
