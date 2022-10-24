import { useNavigate, Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../utils/Auth";
import axiosAPI from "../../api/axios";
import "../styles/Posts.css";

function Posts() {
  const logged = sessionStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const startApply = async () => {
    navigate("/application");
  };

  // const logout = () => {
  //   setAuth({});
  //   sessionStorage.clear();
  //   navigate("/");
  // };

  useEffect(() => {
    axiosAPI
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fuid p-0 x">
      {/* <div className="logState">
        {logged ? (
          <>
            <Link className="accountButton" onClick={logout}>
              Sair
            </Link>
            <Link className="accountButton" to="/account">
              Minha Conta
            </Link>
          </>
        ) : (
          <input hidden />
        )}
      </div> */}
      <div className="postList row">
        {posts.map((post) => {
          return (
            <div key={post._id} className="col-md-3 col-sm-4">
              <div className="card">
                <img
                  src={post.photo}
                  alt="Foto do Pet"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h2 className="card-title">{post.petName}</h2>
                  <p className="card-text">{post.description}</p>
                </div>
                <button
                  type="submit"
                  onClick={startApply}
                  className="btn"
                  value={post._id}
                >
                  Adotar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
