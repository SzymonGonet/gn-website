import React, { useEffect, useState } from "react";
import styles from "./TechnologiesSection.module.scss";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import PageNumLeft from "../../components/PageNumLeft";
import TechIcons from "./components/TechIcons";
import { animations } from "../../global";
import WebsiteImage from "../../public/images/homeLandingPage.jpg";
import ColorIcons from "./components/ColorIcons";
import Image from "next/image";

function TechnologiesSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [startAnim, setStartAnim] = useState(true);
  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  useEffect(() => {
    if (inView && startAnim) {
      animationLeft.start(animations.text.show);
      animationRight.start(animations.item.show);
      setStartAnim(false);
    }
    if (!inView && startAnim) {
      animationLeft.set(animations.text.hidden);
      animationRight.set(animations.item.hidden);
    }
  }, [animationLeft, animationRight, inView, startAnim]);

  return (
    <section id="technologie" className={styles.technologie}>
      <div className={styles.container}>
        <PageNumLeft text="Technologie" number="03" />
        <motion.div className={styles.opis} animate={animationRight}>
          <span>REALIZACJA</span>
          <div className={styles.line}></div>
        </motion.div>
        <div className={styles.head_tech_container}>
          <motion.div
            ref={ref}
            className={styles.left_tech_container}
            animate={animationLeft}
          >
            <span id={styles.tech_header}>
              Technologie, których używamy do tworzenia stron
            </span>
            <span id={styles.tech_text}>
              Projektując i programując strony internetowe korzystamy z
              najnowszych narzędzi i technologii. Dzięki nim nasze produkty są
              projektowane zgodnie z najnowszymi trendami oraz zaprogramowane
              tak, aby były szybkie i wydajne.
            </span>
            <div className={styles.tech_style_container}>
              <div className={styles.tech_opis}>
                <span>TECHNOLOGIE:</span>
                <div className={styles.tech_icons_container}>
                  <TechIcons />
                </div>
                <div className={styles.font_container}>
                  <span id={styles.font_header}>CZCIONKA:</span>
                  <span id={styles.font_name}>Poppins</span>
                </div>
              </div>
              <div className={styles.styles_container}>
                <span>KOLORYSTYKA:</span>
                <div className={styles.circles_container}>
                  <ColorIcons />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={animationRight}
            className={styles.right_tech_container}
          >
            <div className={styles.image_container}>
              <Image src={WebsiteImage} alt="WebsiteImage" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
