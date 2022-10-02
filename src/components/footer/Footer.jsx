import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./footer.css";

function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="copyRight">
        <span>{props.note}</span> &copy; {year}
      </p>
    </footer>
  );
}

export default Footer;
