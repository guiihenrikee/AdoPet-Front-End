import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import axiosAPI from "../../api/axios";
import * as Yup from "yup";
import "../styles/NewPost.css";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const POST_URL = "/posts";

const NewPost = () => {
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/account");
  };

  const formData = new FormData();

  const handleChange = (event) => {
    if (event.target.files[0]) {
      const tempFile = event.target.files[0];
      formData.append("photo", tempFile);
      const appendedFile = formData.get("photo");
      setFile(appendedFile);
    }
  };

  const submitForm = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    const petName = values.petName;
    const description = values.description;
    formData.append("petName", petName);
    formData.append("description", description);
    formData.append("photo", file);

    try {
      const response = await axiosAPI.post(POST_URL, formData);
      console.log(response);
      alert(response.data);
      navigate("/posts");
    } catch (error) {
      console.log(error);
      alert(JSON.stringify(error.response.data.message));
    }
  };

  return (
    <>
      <div className="test">
        <Formik
          initialValues={{
            petName: "",
            description: "",
          }}
          validationSchema={Yup.object({
            petName: Yup.string().min(4).max(20).required("Required"),
            description: Yup.string()
              .min(20, "Mínimo 20 caracteres")
              .max(170, "Máximo 170 caracteres")
              .required("Required"),
          })}
          onSubmit={submitForm}
        >
          <Form>
            <MyTextInput
              id="petName"
              name="petName"
              type="text"
              placeholder="Nome do Pet"
            />
            <br />
            <MyTextInput
              id="description"
              name="description"
              type="text"
              placeholder="Descrição do Pet"
            />
            <br />
            <input
              placeholder="Foto do Pet"
              name="photo"
              type="file"
              onChange={handleChange}
              required
            />
            <br />
            <label>Foto do Pet - Máximo 10 MB.</label>
            <br />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default NewPost;
