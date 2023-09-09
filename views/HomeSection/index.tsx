import React from "react";
import styles from "./HomeSection.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { animations } from "../../global";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import globe from "../../public/images/globe.png";
import PageNumHome from "../../components/PageNumHome";
import Image from "next/image";

function HomeSection() {
  const line = "Nowoczesne strony internetowe ";
  const line2 = "oparte o najnowosze technologie.";

  return (
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        <PageNumHome text="Strona główna" number="01"></PageNumHome>
        <div className={styles.left_container}>
          <motion.div
            className={styles.short_des}
            initial={animations.text.hidden}
            animate={animations.text.show}
          >
            <span className={styles.gradiant_text}>Studio</span>
            <span className={styles.gradiant_text}>projektowe</span>
          </motion.div>
          <div className={styles.long_des}>
            <motion.span
              variants={animations.sentence}
              initial="hidden"
              animate="visible"
            >
              {line.split("").map((char, i) => {
                return (
                  <motion.span
                    key={char + "-" + i}
                    variants={animations.letter}
                  >
                    {char}
                  </motion.span>
                );
              })}
              <br></br>
              {line2.split("").map((char, i) => {
                return (
                  <motion.span
                    key={char + "-" + i}
                    variants={animations.letter}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
          </div>
          <motion.div
            className={styles.social_media}
            initial={animations.icons.hidden}
            animate={animations.icons.show}
          >
            <FaFacebookSquare id={styles.fb} />
            <FaInstagram id={styles.insta} />
            <FaLinkedinIn id={styles.ln} />
          </motion.div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.img}>
            <Image src={globe} alt="globe" />
          </div>
        </div>
        <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
          <IoIosArrowDown id={styles.arrow} />
        </Link>
      </div>
    </section>
  );
}

export default HomeSection;
