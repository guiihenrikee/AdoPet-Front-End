import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import MyAccount from "../pages/MyAccount";
import Container from "../layout/Container";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Private = ({ Item }) => {
  const signed = false;

  return signed > 0 ? <Item /> : <Login />;
};

const Routing = () => (
  <>
    <Header login="Entrar" register="Cadastro" />
    <Container customClass="minHeight">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Private Item={MyAccount} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
    <Footer note="AdoPet" />
  </>
);

export default Routing;
