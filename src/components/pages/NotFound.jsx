import React from "react";
import notfound from "../../img/notfound.jpg";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div>
      <section className="notContainer">
        <img src={notfound} alt="Error 404 Not Found" />
      </section>
    </div>
  );
}

export default NotFound;
