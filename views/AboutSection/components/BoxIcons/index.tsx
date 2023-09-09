import Image from "next/image";
import React from "react";
import { aboutIcons } from "../../../../global";
import styles from "./BoxIcons.module.scss";

function BoxIcons() {
  return (
    <>
      {aboutIcons.map((element) => (
        <div key={element.id} className={styles.box}>
          <div className={styles.img}>
            <Image src={element.icon} alt="" />
          </div>
          <span id={styles.box_header}>{element.name}</span>
          <span id={styles.box_des}>{element.desc}</span>
        </div>
      ))}
    </>
  );
}

export default BoxIcons;
