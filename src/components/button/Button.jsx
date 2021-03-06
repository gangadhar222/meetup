import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  const { label } = props;
  return <button className={styles.btn} data-testid="button" >{label}</button>;
}
