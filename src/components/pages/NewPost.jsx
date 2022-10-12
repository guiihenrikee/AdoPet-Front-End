import { useState } from "react";
import axiosAPI from "../../api/axios";
import { useNavigate } from "react-router-dom";
import "../styles/NewPost.css";

const NewPost = () => {
  // window.onbeforeunload = function () {
  //   sessionStorage.clear();
  //   return "";
  // };

  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/account");
  };

  const previewFiles = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];
    previewFiles(file);
    console.log(file);
    // setFiles(event.target.files)
  };

  const handleSubmit = async (values, e) => {
    e.preventDefault();

    const petName = values.petName;
    const description = values.description;

    try {
      const response = await axiosAPI.post(
        "/posts",
        JSON.stringify({
          petName,
          description,
          image: image,
        })
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert(JSON.stringify(error.response.data.message));
    }
  };

  return (
    <>
      <div className="newPost">
        <h1>Nova Postagem</h1>
        <button onClick={goBack}>Voltar</button>
      </div>
      <div className="test">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label"> Nome do Pet</label>
            <input
              className="form-control"
              type="text"
              name="petName"
              required
            />
            <label className="form-label">Descrição</label>
            <input
              className="form-control"
              type="text"
              name="description"
              required
            />
            <label className="form-label">Foto</label>
            <input
              formEncType="multipart/form-data"
              className="form-control"
              type="file"
              name="photos"
              accept="image/png, image/jpeg image/jpg"
              onChange={(event) => {
                uploadImage(event);
              }}
            />
            <br />
            <button className="btnLogin" type="submit">
              Criar Postagem
            </button>
          </div>
        </form>
        {/* <img src={image} alt="imagem" /> */}
      </div>
    </>
  );
};

export default NewPost;
