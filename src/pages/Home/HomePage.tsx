import React from "react";
import styles from "./HomePage.module.scss";

export function HomePage() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Аренда мед кроватей</h1>
      <p className={styles.subtitle}>
        Удобные кровати для ухода за больными на дому и в медучреждениях.
      </p>
      <a href="/contacts" className={styles.cta}>
        Связаться с нами
      </a>
    </div>
  );
}
