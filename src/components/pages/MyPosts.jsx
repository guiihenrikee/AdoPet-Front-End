import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosAPI from "../../api/axios";

const token = sessionStorage.getItem("token");
const userDataID = sessionStorage.getItem("userID");
const accessToken = JSON.parse(token);
const userID = JSON.parse(userDataID);

const MyPosts = () => {
  const [postsWithID, setPostsWithID] = useState([]);
  const navigate = useNavigate();

  const editPost = async () => {
    navigate("/editpost");
  };

  const deletePost = async (e) => {
    const uri = `/posts/${e.target.value}`;
    axiosAPI
      .delete(uri)
      .then((res) => {
        alert(res.data.message);
        axiosAPI
          .get("/posts")
          .then((res) => {
            setPostsWithID(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosAPI
      .get("/posts")
      .then((res) => {
        setPostsWithID(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>Minhas Postagens</h2>
      {postsWithID.map((post) => {
        if (post.userID === userID) {
          return (
            <div key={post._id} id={post._id}>
              <h4>{post.petName}</h4>
              <div className="divImg">
                <img src={post.photo} alt="miniatura" />
              </div>
              <button className="btnLogin2" onClick={editPost}>
                Editar Postagem
              </button>
              <button
                className="btnLogin2"
                value={post._id}
                onClick={deletePost}
                type="submit"
              >
                Excluir Postagem
              </button>
            </div>
          );
        }
      })}
    </>
  );
};

export default MyPosts;
