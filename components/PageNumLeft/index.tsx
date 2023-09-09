import React from "react";
import styles from "./PageNumLeft.module.scss";

interface Props {
  text: string;
  number: string;
}

function PageNumLeft({ text, number }: Props) {
  return (
    <div className={styles.page_number}>
      <div className={styles.page_number_up}>
        <span>{text}</span>
      </div>
      <div className={styles.page_number_down}>
        <div className={styles.line}></div>
        <span>{number}</span>
      </div>
    </div>
  );
}

export default PageNumLeft;
