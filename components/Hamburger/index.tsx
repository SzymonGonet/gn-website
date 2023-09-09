import React from "react";
import styles from "./Hamburger.module.scss";

interface Props {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function Hamburger({ isActive, setActive }: Props) {
  function handleToggle() {
    setActive(!isActive);
  }

  return (
    <button
      className={
        isActive ? `${styles.hamburger} ${styles.active}` : styles.hamburger
      }
      onClick={handleToggle}
    >
      <div className={styles.bar} />
    </button>
  );
}

export default Hamburger;
