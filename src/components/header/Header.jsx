import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Container from "../layout/Container";
import logo from "../../img/pets2.png";

function Header(props) {
  return (
    <Container>
      <nav className="navbar">
        <Link to="/">
          <img className="imgHeader" src={logo} alt="PatasLogo" />
        </Link>
        <ul className="list">
          <li className="item">
            <Link to="/posts">Pets</Link>
          </li>
          <li className="item">
            <Link to="/login">{props.login}</Link>
          </li>
          <li className="item">
            <Link to="/register">{props.register}</Link>
          </li>
          <li className="item">
            <Link to="/about">Quem Somos</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
