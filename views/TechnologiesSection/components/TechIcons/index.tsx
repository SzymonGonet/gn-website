import React from "react";
import { techIcons } from "../../../../global";
import styles from "./TechIcons.module.scss";

function TechIcons() {
  return (
    <>
      {techIcons.map((element) => (
        <div key={element.id} className={styles.icons_container}>
          <div className={styles.icon}>
            {<element.icon id={element.style} />}
            <span id={styles.icon_name}>{element.name}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default TechIcons;
