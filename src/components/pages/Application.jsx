import React from "react";
import { useNavigate } from "react-router-dom";
import ApplicationForm from "./ApplicationForm";
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
      <div className="postBlock">
        <h1>Preencha o formulário abaixo</h1>
        <p>As informações do formulário serão enviadas para o dono do pet.</p>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default Application;
