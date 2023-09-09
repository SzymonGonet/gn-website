import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main_footer}>
          <div className={styles.logo}>G&N Design</div>
          <div className={styles.company_info}>
            Testowa
            <br />
            30-333, Test
            <br />
            NIP: 1234567890
          </div>
        </div>
        <div className={styles.copyrights}>
          © 2023 G&N Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
