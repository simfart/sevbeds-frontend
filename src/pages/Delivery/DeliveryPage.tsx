"use client";

import { FC } from "react";
import { HowItWorksSection } from "@/widgets/HowItWorks";
import { FaqSection } from "@/widgets/Faq";
import styles from "./DeliveryPage.module.scss";

export const DeliveryPage: FC = () => {
  return (
    <main className={styles.page}>
      {/* HERO / H1 */}
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

      {/* CONDITIONS */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Условия доставки</h2>
          <ul className={styles.list}>
            <li>Доставка по Севастополю и пригородам</li>
            <li>Возможна доставка в день обращения</li>
            <li>Подъем на этаж (включая без лифта)</li>
            <li>Профессиональная сборка и установка</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Часто задаваемые вопросы</h2>

          <div className={styles.faq}>
            <div className={styles.faqItem}>
              <h3>Сколько стоит доставка?</h3>
              <p>
                Стоимость зависит от района и условий подъема. Уточняется при
                заказе.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Как быстро вы доставляете?</h3>
              <p>
                Обычно доставка возможна в день обращения или на следующий день.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Входит ли установка?</h3>
              <p>Да, установка и настройка включены в услугу.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>Поднимаете без лифта?</h3>
              <p>Да, мы поднимаем оборудование на любой этаж.</p>
            </div>
          </div>
        </div>
      </section>

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
