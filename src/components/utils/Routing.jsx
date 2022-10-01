import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import MyAccount from "../pages/MyAccount";
import NewPost from "../pages/NewPost";
import Container from "../layout/Container";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import RequireAuth from "./RequireAuth";
import NotFound from "../pages/NotFound";

const Routing = () => (
  <>
    <Header login="Entrar" register="Cadastro" />
    <Container customClass="minHeight">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        {/* Private route */}
        <Route element={<RequireAuth />}>
          <Route path="/account" element={<MyAccount />} />
          <Route path="/newpost" element={<NewPost />} />
        </Route>
        {/* Not found routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
    {/*<Footer note="AdoPet" />*/}
  </>
);

export default Routing;
