import { useState } from "react";
import axiosAPI from "../../api/axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import "../styles/NewPost.css";

const POST_URL = "/posts";
const NewPost = () => {
  // window.onbeforeunload = function () {
  //   sessionStorage.clear();
  //   return "";
  // };

  // const [photo, setPhoto] = useState();
  const formData = new FormData();
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/account");
  };

  const handleChange = (event) => {
    console.log(event.target.files[0]);
    if (event.target && event.target.files[0]) {
      formData.append("photo", event.target.files[0]);
    }
  };

  const submitForm = async (values) => {
    const petName = values.petName;
    const description = values.description;
    console.log(petName);
    console.log(description);

    formData.append("petName", petName);
    formData.append("description", description);

    try {
      const response = await axiosAPI.post(POST_URL, formData);
      console.log(response);
      // resetForm({ values: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const validations = yup.object().shape({
    petName: yup.string().min(4, "Insira o nome do pet").required(),
    description: yup.string().max(160).min(30).required(),
  });

  return (
    <>
      <div className="newPost">
        <h1>Nova Postagem</h1>
        <button onClick={goBack}>Voltar</button>
      </div>
      <div className="test">
        <Formik
          initialValues={{
            petName: "",
            description: "",
            photo: "",
          }}
          validationSchema={validations}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            console.log(values);
          }}
        >
          <Form className="Register">
            <div className="Register-Group">
              <Field
                id="petName"
                type="text"
                placeholder="Nome do Pet"
                name="petName"
                className="Register-Field"
              />
              <ErrorMessage
                component="span"
                name="petName"
                className="Register-Error"
              />
            </div>
            <div className="Register-Group">
              <Field
                id="description"
                type="text"
                placeholder="Descrição do Pet"
                name="description"
                className="Register-Field"
              />
              <ErrorMessage
                component="span"
                name="Descrição"
                className="Register-Error"
              />
            </div>

            <input
              id="photo"
              type="file"
              placeholder="Foto do Pet"
              name="photo"
              accept="image/png, image/jpeg image/jpg"
              className="Register-Field"
              onChange={handleChange}
            />
            <button className="btnLogin" type="submit">
              Criar Postagem
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default NewPost;
