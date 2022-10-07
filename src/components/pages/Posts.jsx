import { React, useState, useEffect } from "react";
import axiosAPI from "../../api/axios";
import "../styles/Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosAPI
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="postList">
      {posts.map((post) => {
        return (
          <>
            <div key={post._id} className="col">
              <h2>{post.petName}</h2>
              <p>{post.description}</p>
              <img src={post.photo} alt="Foto do Pet" />
              <br />
              <input type="button" value="Adotar" />
            </div>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default Posts;
