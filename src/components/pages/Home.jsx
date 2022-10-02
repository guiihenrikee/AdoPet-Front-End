import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="backDog">
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
