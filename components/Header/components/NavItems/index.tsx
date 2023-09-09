import React from "react";
import { Link } from "react-scroll";
import { navItems } from "../../../../global";
import styles from "./NavItems.module.scss";

function NavItems() {
  return (
    <nav id={styles.nav}>
      {navItems.map((element) => (
        <Link
          href=""
          key={element.id}
          activeClass={styles.active}
          className={styles.menu_item}
          to={element.to}
          spy={true}
          smooth={true}
          offset={-80}
          duration={600}
        >
          {element.name}
        </Link>
      ))}
    </nav>
  );
}

export default NavItems;
