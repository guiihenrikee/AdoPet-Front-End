import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import dogs from "../../img/111.jpg";

function Home() {
  return (
    <div>
      <section className="homeContainer">
        <h1>
          Bem-vindo ao <span>AdoPet</span>{" "}
        </h1>
        <p>Ajudando no amparo de animais abandonados</p>
        <Link to="/posts">Adote Já!</Link>
        <img src={dogs} alt="Dogs" className="img-fluid" />
      </section>
    </div>
  );
}

export default Home;
