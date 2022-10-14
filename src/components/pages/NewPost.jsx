import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Formik, Form, useField, ErrorMessage, Field } from "formik";
import axiosAPI from "../../api/axios";
import * as Yup from "yup";
import "../styles/NewPost.css";

const POST_URL = "/posts";

const NewPost = () => {
  const [file, setFile] = useState([]);
  const [imgData, setImgData] = useState(null);
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/account");
  };

  const formData = new FormData();

  const handleChange = (event) => {
    const tempFile = event.target.files[0];

    if (!tempFile) {
      window.alert("Adicione um arquivo!");
      return false;
    } else if (tempFile.size > 10e6) {
      window.alert("O arquivo deve ser menor que 10MB!");
      return false;
    } else {
      formData.append("photo", tempFile);
      const appendedFile = formData.get("photo");
      setFile(appendedFile);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const submitForm = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    const petName = values.petName;
    const description = values.description;
    const userID = sessionStorage.getItem("userID");
    formData.append("userID", userID);
    formData.append("petName", petName);
    formData.append("description", description);
    formData.append("photo", file);

    try {
      const response = await axiosAPI.post(POST_URL, formData);
      console.log(response);
      alert(response.data.message);
      navigate("/posts");
    } catch (error) {
      console.log(error);
      alert(JSON.stringify(error.response.data.message));
    }
  };

  return (
    <div className="newPost">
      <div className="postBlock">
        <button className="btnLogin2" onClick={goBack}>
          Voltar
        </button>
        <h1>Nova Postagem</h1>
        <p>Preencha o formulário abaixo</p>

        <Formik
          initialValues={{
            petName: "",
            description: "",
          }}
          validationSchema={Yup.object({
            petName: Yup.string().min(4).max(20).required("Campo Obrigatório"),
            description: Yup.string()
              .min(20, "Mínimo 20 caracteres")
              .max(170, "Máximo 170 caracteres")
              .required("Campo Obrigatório"),
          })}
          onSubmit={submitForm}
        >
          <Form className="postBlock">
            <div className="post-Group">
              <Field
                id="petName"
                name="petName"
                type="text"
                placeholder="Nome do Pet"
                className="post-Field"
              />
              <ErrorMessage
                component="span"
                name="petName"
                className="post-Error"
              />
            </div>
            <div className="post-Group">
              <textarea
                id="description"
                name="description"
                type="text"
                placeholder="Descrição do Pet"
                className="post-Field"
                rows="5"
              />
              <ErrorMessage
                component="span"
                name="description"
                className="post-Error"
              />
            </div>
            <div className="Lpost-Group">
              <Field
                className="post-Field"
                data-max-file-size="10MB"
                name="photo"
                type="file"
                onChange={handleChange}
                required
              />
              <ErrorMessage
                component="span"
                name="file"
                className="post-Error"
              />
            </div>
            <br />
            <button className="btnPost" type="submit">
              Criar Postagem
            </button>
          </Form>
        </Formik>
      </div>
      <div className="divImg">{imgData ? <img src={imgData} /> : null}</div>
    </div>
  );
};
export default NewPost;
