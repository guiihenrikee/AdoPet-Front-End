import React from "react";
import notfound from "../../img/notfound.jpg";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="notContainer container-xxl p-0">
      <img src={notfound} alt="Error 404 Not Found" />
    </div>
  );
}

export default NotFound;
