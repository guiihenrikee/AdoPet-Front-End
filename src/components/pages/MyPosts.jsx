import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosAPI from "../../api/axios";
import "../styles/MyPosts.css";

const userDataID = sessionStorage.getItem("userID");
const userID = JSON.parse(userDataID);

const MyPosts = () => {
  const [postsWithID, setPostsWithID] = useState([]);
  const [postState, setPostState] = useState(false);
  const navigate = useNavigate();

  const editPost = async (e) => {
    const postID = e.target.value;
    console.log(postID);
    sessionStorage.setItem("postID", JSON.stringify(postID));
    navigate("/editpost");
  };

  const newPost = async () => {
    navigate("/newpost");
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

  const renderPosts = async () => {
    await axiosAPI
      .get("/posts")
      .then((res) => {
        setPostsWithID(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const CheckPosts = () => {
  //   postsWithID.map((post) => {
  //     if (post.userID === userID) {
  //       return (
  //         <div key={post._id} id={post._id}>
  //           <h4>{post.petName}</h4>
  //           <div className="divImg">
  //             <img src={post.photo} alt="miniatura" />
  //           </div>
  //           <button className="btnLogin2" onClick={editPost}>
  //             Editar Postagem
  //           </button>
  //           <button
  //             className="btnLogin2"
  //             value={post._id}
  //             onClick={deletePost}
  //             type="submit"
  //           >
  //             Excluir Postagem
  //           </button>
  //         </div>
  //       );
  //     }
  //   });
  // };
  // const NoPosts = () => {
  //   return (
  //     <div>
  //       <h4>Você não possui nenhuma postagem.</h4>
  //     </div>
  //   );
  // };

  useEffect(() => {
    renderPosts();
  }, []);

  return (
    <>
      <button className="accountButton2" onClick={newPost}>
        Criar Postagem
      </button>
      <h1 className="text-padding">Minhas Postagens</h1>
      {/* {postState ? <NoPosts /> : <CheckPosts />} */}
      {postsWithID.map((post) => {
        if (post.userID === userID) {
          return (
            <div key={post._id} id={post._id}>
              <h4>{post.petName}</h4>
              <div className="divImg">
                <img src={post.photo} alt="miniatura" />
              </div>
              <button
                className="btnLogin2"
                onClick={editPost}
                value={post._id}
                type="submit"
              >
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
