import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./ProductsSection.module.scss";
import PageNumRight from "../../components/PageNumRight";
import ProductItems from "./components/ProductItems";
import { animations } from "../../global";

function ProductsSection() {
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
    <section id="produkty" className={styles.produkty}>
      <div className={styles.container}>
        <PageNumRight number="04" text="Produkty" />
        <motion.div
          ref={firstRef}
          className={styles.header}
          animate={animationLeft}
        >
          <div className={styles.cennik}>cennik</div>
          <div className={styles.wrapper}>
            <div id={styles.tworzymy}>
              Tworzymy
              <div className={styles.words}>
                <span>strony informacyjne</span>
                <span>sklepy internetowe</span>
                <span>blogi internetowe</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={secondRef}
          className={styles.product_container}
          animate={animationUp}
        >
          <ProductItems />
        </motion.div>
      </div>
    </section>
  );
}

export default ProductsSection;
