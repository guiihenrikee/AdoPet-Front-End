import styles from "./Container.module.css";
import React from "react";

function Container(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default Container;
