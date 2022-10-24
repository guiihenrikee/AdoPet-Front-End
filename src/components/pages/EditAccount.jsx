import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axiosAPI from "../../api/axios";
import "../styles/EditAccount.css";
import "../styles/AccountDetails.css";
import AccountDetails from "./AccountDetails";

const token = sessionStorage.getItem("token");
const userDataID = sessionStorage.getItem("userID");
const accessToken = JSON.parse(token);
const userID = JSON.parse(userDataID);
const EDIT_URL = `/users/${userID}`;

function EditAccount() {
  const navigate = useNavigate();
  const from = "/account";

  const goBack = async () => {
    navigate("/account");
  };

  const handleSubmit = async (values, { resetForm }) => {
    await new Promise((r) => setTimeout(r, 500));
    // Get the info from the form.
    const name = values.name;
    const email = values.email;
    const password = values.password;

    try {
      // Submit the form info through axios to the back-end.
      const response = await axiosAPI.put(
        EDIT_URL,
        JSON.stringify({ name, email, password }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${accessToken}`,
          },
          withCredentials: true,
        }
      );
      alert(JSON.stringify(response.data.message));
      resetForm({ values: "" });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.response);
    }
    resetForm({ values: "" });
  };

  const validations = yup.object().shape({
    name: yup.string().min(5, "Insira o nome completo!").required(),
    email: yup.string().email("Email inválido!").required(),
    password: yup.string().min(8, "Use no mínimo 8 caracteres!").required(),
  });

  return (
    <div className="edit-account">
      <div className="registerBlock">
        <AccountDetails />
        <br />
        <h3>Editar dados da conta</h3>
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
            <button className="btnLogin buttonAc" type="submit">
              Enviar
            </button>
          </Form>
        </Formik>
        <br />
      </div>
    </div>
  );
}

export default EditAccount;
