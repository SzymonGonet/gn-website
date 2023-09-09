import React from "react";
import styles from "./PageNumHome.module.scss";

interface Props {
  text: string;
  number: string;
  style?: string;
}

function PageNumHome({ text, number, style }: Props) {
  return (
    <div className={styles.page_number} style={{ top: style }}>
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

export default PageNumHome;
