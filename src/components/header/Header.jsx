import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../img/pets2.png";

function Header(props) {
  return (
    <header className="container-fluid">
      <Link to="/">
        <Link to="/" className="imgHeader">
          AdoPet
        </Link>
        <img src={logo} alt="Logo" />
      </Link>
      <ul className="list">
        <li className="item">
          <Link className="listItem " to="/">
            Home
          </Link>
        </li>
        <li className="item">
          <Link className="listItem " to="/posts">
            Pets
          </Link>
        </li>
        <li className="item">
          <Link className="listItem " to="/login">
            {props.login}
          </Link>
        </li>
        <li className="item">
          <Link className="listItem " to="/register">
            {props.register}
          </Link>
        </li>
        <li className="item">
          <Link className="listItem " to="/about">
            Sobre
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
