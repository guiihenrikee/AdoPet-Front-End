import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../img/pets2.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header(props) {
  return (
    <Navbar expand="md" className="top">
      <Container fluid>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link className="imgHeader" to="/">
          AdoPet
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <ul className="listItem">
              <li className="item ">
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
                <Link className="listItem" onClick={props.logt}>
                  {props.login}
                </Link>
              </li>
              <li className="item">
                <Link className="listItem " to={props.regt}>
                  {props.account}
                </Link>
              </li>
              <li className="item">
                <Link className="listItem " to="/about">
                  Sobre
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
