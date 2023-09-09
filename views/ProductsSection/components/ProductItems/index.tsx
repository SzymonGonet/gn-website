import React from "react";
import { Link } from "react-scroll";
import { products } from "../../../../global";
import styles from "./ProductItems.module.scss";

function ProductItems() {
  {
    return (
      <>
        {products.map((element) => (
          <div key={element.id} className={styles.column}>
            <div className={styles.pricing_card}>
              {element.id == 2 ? (
                <div className={styles.popular}>POPULAR</div>
              ) : null}
              <div id={styles.product_color} className={styles.pricing_header}>
                <span className={styles.plan_title}>{element.header}</span>
                <div className={styles.price_circle}>
                  <span className={styles.price_title}>{element.price}</span>
                  <span className={styles.info}>pln</span>
                </div>
              </div>
              <ul>
                <li>{element.item1}</li>
                <li>{element.item2}</li>
                <li>{element.item3}</li>
                <li>{element.item4}</li>
                <li>{element.item5}</li>
              </ul>
              <div className={styles.test}>
                <div className={styles.buy_button_box}>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={1000}
                  >
                    <span className={styles.buy_now}>wybierz</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ProductItems;
