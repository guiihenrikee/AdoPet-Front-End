import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import "../styles/Register.css";

const Register = () => {
  const handleSubmit = async (values, { resetForm }) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log(JSON.stringify(values, null, 2));
    resetForm({ values: "" });
  };

  const validations = yup.object().shape({
    name: yup.string().min(5, "Insira o nome completo!").required(),
    email: yup.string().email("Email inválido!").required(),
    password: yup.string().min(8, "Use no mínimo 8 caracteres!").required(),
  });

  return (
    <div className="registerBlock">
      <h1>Cadastro</h1>
      <p>Preencha os campos abaixo para se cadastrar</p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validations}
        onSubmit={handleSubmit}
      >
        <Form className="Register">
          <div className="Register-Group">
            <Field
              id="name"
              type="text"
              placeholder="Nome Completo"
              name="name"
              className="Register-Field"
            />
            <ErrorMessage
              component="span"
              name="name"
              className="Register-Error"
            />
          </div>
          <div className="Register-Group">
            <Field
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              className="Register-Field"
            />
            <ErrorMessage
              component="span"
              name="email"
              className="Register-Error"
            />
          </div>
          <div className="Register-Group">
            <Field
              id="password"
              type="password"
              placeholder="Senha"
              name="password"
              className="Register-Field"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="Register-Error"
            />
          </div>
          <button className="Register-Btn" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
