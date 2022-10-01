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
  const from = "/account";

  const handleSubmit = async (values, { resetForm }) => {
    await new Promise((r) => setTimeout(r, 500));
    // console.log(JSON.stringify(values, null, 2));

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
      const accessToken = response.data.token;
      setAuth({ email, password, accessToken });
      //setSuccess(true);
      alert("Login efetuado com sucesso!");
      resetForm({ values: "" });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.response);
    }
  };

  const validations = yup.object().shape({
    email: yup.string().email("Email inválido!").required(),
    password: yup.string().min(8).required(),
  });

  return (
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
          <button className="Login-Btn" type="submit">
            Login
          </button>
        </Form>
      </Formik>
      <br />
      <p>
        Ainda não possui uma conta? <Link to="/register">Cadastre-se</Link>
      </p>
      <Link to="/account">account</Link>
    </div>
  );
};

export default Login;
