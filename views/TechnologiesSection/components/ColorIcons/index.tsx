import React from "react";
import { colorIcons } from "../../../../global";
import styles from "./ColorIcons.module.scss";

function ColorIcons() {
  return (
    <>
      {colorIcons.map((element) => (
        <div key={element.id} className={styles.circle_container}>
          <div id={element.style} className={styles.circle}></div>
          <span id={styles.color_name}>{element.name}</span>
        </div>
      ))}
    </>
  );
}

export default ColorIcons;
