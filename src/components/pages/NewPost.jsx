import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/account");
  };
  return (
    <div>
      <h1>Nova Postagem</h1>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default NewPost;
