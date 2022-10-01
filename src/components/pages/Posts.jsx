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
    <div className="container text-center">
      {posts.map((post) => {
        return (
          <div key={post._id} className="col">
            <h2>{post.petName}</h2>
            <p>{post.description}</p>
            <p>{post.contactInfo.name}</p>
            <p>{post.contactInfo.phone}</p>
            <p>{post.contactInfo.email}</p>
            <input type="button" value="Adotar" />
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
