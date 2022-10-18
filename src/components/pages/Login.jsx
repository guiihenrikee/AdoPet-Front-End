import React, { useState } from "react";
import UseAuth from "../utils/UseAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axiosAPI from "../../api/axios";
import "../styles/Login.css";

const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (values, { resetForm }) => {
    await new Promise((r) => setTimeout(r, 500));

    // Get the info from the form.
    const email = values.email;
    const password = values.password;

    try {
      // Submit the form info through axios to the back-end.
      const response = await axiosAPI.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data.token);
      console.log(response.data.userID);

      //Save the TOKEN and the User`s ID from the response.
      const userID = response.data.userID;
      const accessToken = response.data.token;
      sessionStorage.setItem("token", JSON.stringify(accessToken));
      sessionStorage.setItem("userID", JSON.stringify(userID));

      setAuth({ email, password, accessToken });
      resetForm({ values: "" });
      navigate(from);
    } catch (error) {
      console.log(error);
      alert(JSON.stringify(error.response.data.message));
    }
  };

  const validations = yup.object().shape({
    email: yup.string().email("Email inválido!").required(),
    password: yup.string().min(8).required(),
  });

  return (
    <div className="backgroundDog">
      <div className="loginBlock">
        <h1>Login</h1>
        <p>Preencha os campos abaixo para continuar</p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validations}
          onSubmit={handleSubmit}
        >
          <Form className="Login">
            <div className="Login-Group">
              <Field
                id="email"
                placeholder="Email"
                type="email"
                name="email"
                className="Login-Field"
              />
              <ErrorMessage
                component="span"
                name="email"
                className="Login-Error"
              />
            </div>
            <div className="Login-Group">
              <Field
                id="password"
                type="password"
                placeholder="Senha"
                name="password"
                className="Login-Field"
              />
              <ErrorMessage
                component="span"
                name="password"
                className="Login-Error"
              />
            </div>
            <button className="btnLogin" type="submit">
              Login
            </button>
          </Form>
        </Formik>
        <br />
        <p>Ainda não possui uma conta? </p>
        <Link className="btnLogin2" to="/register">
          Cadastre-se
        </Link>
      </div>
    </div>
  );
};

export default Login;
