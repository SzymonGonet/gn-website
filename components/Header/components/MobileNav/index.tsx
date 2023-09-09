import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import { navItems } from "../../../../global";
import styles from "./MobileNav.module.scss";

interface Props {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNav({ isActive, setActive }: Props) {
  return (
    <div
      className={
        isActive ? `${styles.mobile_nav} ${styles.active}` : styles.mobile_nav
      }
    >
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
          duration={500}
          onClick={() => setActive(!isActive)}
        >
          {element.name}
        </Link>
      ))}

      <div className={styles.social_media}>
        <span>Social media</span>
        <FaFacebookSquare id={styles.fb} />
        <FaInstagram id={styles.insta} />
        <FaLinkedinIn id={styles.ln} />
      </div>
    </div>
  );
}

export default MobileNav;
