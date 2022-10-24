import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Formik, Form, useField, ErrorMessage, Field } from "formik";
import axiosAPI from "../../api/axios";
import * as Yup from "yup";
import "../styles/EditPost.css";

const postDataID = sessionStorage.getItem("postID");
const postID = JSON.parse(postDataID);
const EDIT_URL = `/posts/${postID}`;

function EditPost() {
  const [file, setFile] = useState([]);
  const [imgData, setImgData] = useState(null);
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/account");
  };

  const formData = new FormData();

  const handleChange = (event) => {
    console.log(EDIT_URL);
    const tempFile = event.target.files[0];

    if (!tempFile) {
      window.alert("Adicione um arquivo!");
      tempFile = null;
      return false;
    } else if (tempFile.size > 10e6) {
      window.alert("O arquivo deve ser menor que 10MB!");
      tempFile = null;
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

  const SubmitFormEdit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    const petName = values.petName;
    const description = values.description;
    formData.append("petName", petName);
    formData.append("photo", file);
    formData.append("description", description);
    formData.append("_id", postID);

    try {
      const response = await axiosAPI.put(EDIT_URL, formData);
      console.log(response);
      alert(response.data.message);
      if (response.data.message === "Postagem editada com sucesso!") {
        sessionStorage.removeItem("postID");
        navigate("/posts");
      }
    } catch (error) {
      console.log(error);
      alert(JSON.stringify(error.response.data.message));
    }
  };

  return (
    <div className="Post-Edit">
      <div className="postBlock">
        <button className="accountButton2" onClick={goBack}>
          Voltar
        </button>
        <h1>Editar Postagem</h1>
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
          onSubmit={SubmitFormEdit}
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
              <Field
                id="description"
                name="description"
                type="text"
                placeholder="Descrição do Pet"
                className="post-Field"
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
            <div className="mini-img">
              {imgData ? <img src={imgData} /> : null}
            </div>
            <br />
            <button className="btnPost" type="submit">
              Editar Postagem
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EditPost;
