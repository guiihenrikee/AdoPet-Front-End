import { React, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Application from "../pages/Application";
import MyAccount from "../pages/MyAccount";
import NewPost from "../pages/NewPost";
import RequireAuth from "./RequireAuth";
import NotFound from "../pages/NotFound";
import IsLogged from "./IsLogged";

const Routing = () => (
  <Routes>
    <Route element={<IsLogged />}>
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
        <Route path="/application" element={<Application />} />
      </Route>
      {/* Not found routes */}
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Routing;
