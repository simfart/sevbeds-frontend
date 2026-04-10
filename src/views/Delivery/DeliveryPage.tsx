"use client";

import { FC } from "react";
import { HowItWorksSection } from "@/widgets/HowItWorks";
import { FaqSection } from "@/widgets/Faq";
import styles from "./DeliveryPage.module.scss";

export const DeliveryPage: FC = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Доставка и установка медкроватей в Севастополе
          </h1>
          <p className={styles.subtitle}>
            Мы обеспечиваем быструю и надежную доставку медицинских кроватей по
            Севастополю и ближайшим районам. Все оборудование транспортируется
            бережно и устанавливается с учетом требований безопасности. Наши
            специалисты выполняют сборку, настройку и проверку всех функций.
            После установки вы получите подробную инструкцию по эксплуатации
          </p>
          <p className={styles.subtitle}>
            Наши специалисты выполняют сборку, настройку и проверку всех
            функций. После установки вы получите подробную инструкцию по
            эксплуатации
          </p>
        </div>
      </section>

      <HowItWorksSection />
      <FaqSection />


      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Остались вопросы?</h2>
          <p>Свяжитесь с нами и мы поможем подобрать медицинскую кровать.</p>
          <button className={styles.button}>Оставить заявку</button>
        </div>
      </section>
    </main>
  );
};
