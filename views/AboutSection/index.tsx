import React, { useEffect, useState } from "react";
import styles from "./AboutSection.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BoxIcons from "./components/BoxIcons";
import PageNumRight from "../../components/PageNumRight";
import { animations } from "../../global";

function AboutSection() {
  const [firstRef, firstInView] = useInView({ threshold: 0.2 });
  const [secondRef, secondInView] = useInView({ threshold: 0.2 });
  const [startFirstAnim, setStartFirstAnim] = useState(true);
  const [startSecondAnim, setStartSecondAnim] = useState(true);
  const animationLeft = useAnimation();
  const animationUp = useAnimation();

  useEffect(() => {
    if (firstInView && startFirstAnim) {
      animationLeft.start(animations.text.show);
      setStartFirstAnim(false);
    }
    if (secondInView && startSecondAnim) {
      animationUp.start(animations.item.show);
      setStartSecondAnim(false);
    }
    if (!firstInView && startFirstAnim) {
      animationLeft.set(animations.text.hidden);
    }
    if (!secondInView && startSecondAnim) {
      animationUp.set(animations.item.hidden);
    }
  }, [
    animationLeft,
    animationUp,
    firstInView,
    secondInView,
    startFirstAnim,
    startSecondAnim,
  ]);

  return (
    <>
      <div className={styles.triangle}></div>
      <section id="about" className={styles.about}>
        <PageNumRight number="02" text="O nas" />
        <div className={styles.container}>
          <motion.div
            ref={firstRef}
            className={styles.mid_container}
            animate={animationLeft}
          >
            <span id={styles.top_header}>Studio innowacyjne</span>
            <span id={styles.company_name}>G&N Design</span>
            <span id={styles.about_text}>
              Naszą misją jest budowanie profesjonalnego wizerunku Twojej marki
              w Internecie. Korzystając z naszych usług masz gwarancję
              kompleksowej obsługi na każdym etapie rozwoju Twojego biznesu.
              Tworzymy strony internetowe, sklepy i blogi. Oferujemy pełną
              obsługę w zakresie projektowania, programowania i zarządzania
              produktami. Zadbamy o dobór odpowiednich narzędzi, multimediów i
              napiszemy tekst. Nieważne, czy Twoja firma dopiero się rozwija,
              czy wymaga modernizacji – pomożemy Ci na każdym kroku.
            </span>
          </motion.div>
          <motion.div
            ref={secondRef}
            className={styles.icons_container}
            animate={animationUp}
          >
            <BoxIcons />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
