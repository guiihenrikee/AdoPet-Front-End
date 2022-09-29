import styles from "./Container.css";
import React from "react";

function Container(props) {
  return (
    <div className={`${styles.container} ${props.customClass}`}>
      {props.children}
    </div>
  );
}

export default Container;
