import { useNavigate } from "react-router-dom";
import "../styles/NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/account");
  };
  return (
    <div className="newPost">
      <h1>Nova Postagem</h1>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default NewPost;
