import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.scss";
import Hamburger from "../Hamburger";
import NavItems from "./components/NavItems";
import MobileNav from "./components/MobileNav";

function Header() {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <>
      <header id={styles.header}>
        <div className={styles.logo}>
          <Link
            href=""
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
          >
            <span className={styles.gradiant_text}>G&N DESIGN</span>
          </Link>
        </div>
        <NavItems />
        <Link
          href=""
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={600}
        >
          <div className={styles.button}>
            <span>Kontakt</span>
          </div>
        </Link>
        <Hamburger isActive={isActive} setActive={setActive} />
      </header>
      <MobileNav isActive={isActive} setActive={setActive} />
    </>
  );
}

export default Header;
