"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./PopularModels.module.scss";

const models = [
  {
    name: "Электрическая кровать",
    image: "/images/electric-bed.jpg",
    features: [
      "Полностью электрическая регулировка положения",
      "Встроенные боковые ограждения для безопасности",
      "Беспроводной пульт управления",
    ],
    price: "от 3999₽/мес",
  },
  {
    name: "Механическая кровать",
    image: "/images/manual-bed.jpg",
    features: [
      "Ручное управление для стабильного и надёжного ухода",
      "Усиленный механизм регулировки",
      "Колёса с фиксацией для безопасного использования",
    ],
    price: "от 3999₽/мес",
  },
  {
    name: "Инвалидная коляска",
    image: "/images/wheelchair.jpg",
    features: [
      "Ультралёгкая алюминиевая рама",
      "Складная конструкция для перевозки",
      "Регулируемые подножки",
    ],
    price: "от 1499₽/мес",
  },
];

export const PopularModelsSection: FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="models" className={styles.section}>
      <div className={styles.topDivider} />

      <div className={styles.container}>
        <h2 className={styles.title}>Популярные модели</h2>
        <div className={styles.titleUnderline} />
        <p className={styles.subtitle}>
          Самые популярные модели медицинского оборудования для аренды,
          проверенные семьями и специалистами здравоохранения.
        </p>
        <div className={styles.grid}>
          {models.map((model, i) => (
            <div
              key={model.name}
              data-index={i}
              className={`${styles.card} ${
                visibleCards[i] ? styles.cardVisible : styles.cardHidden
              }`}
            >
              {/* Image */}
              <div className={styles.imageWrap}>
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Content */}
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{model.name}</h3>
                <ul className={styles.features}>
                  {model.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <span className={styles.bullet} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={styles.footer}>
                  <span className={styles.price}>{model.price}</span>
                  <button className={styles.button}>Подробнее</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
