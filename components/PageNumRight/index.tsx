import React from "react";
import styles from "./PageNumRight.module.scss";

interface Props {
  number: string;
  text: string;
}

function PageNumRight({ number, text }: Props) {
  return (
    <div className={styles.page_number}>
      <div className={styles.page_number_up}>
        <span>{text}</span>
      </div>
      <div className={styles.page_number_down}>
        <span>{number}</span>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default PageNumRight;
