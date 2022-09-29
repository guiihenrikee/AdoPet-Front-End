import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import "../styles/Login.css";

const Login = () => {
  const handleSubmit = async (values, { resetForm }) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log(JSON.stringify(values, null, 2));
    resetForm({ values: "" });
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
    </div>
  );
};

export default Login;
