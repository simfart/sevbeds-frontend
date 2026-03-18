"use client";

import { FC, useEffect, useRef, useState } from "react";
import { FileText, PhoneCall, PackageCheck, Wrench } from "lucide-react";
import styles from "./HowItWorks.module.scss";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Оставьте заявку",
    description:
      "Заполните короткую форму, указав нужную медицинскую кровать и удобную дату доставки.",
  },
  {
    icon: PhoneCall,
    step: "02",
    title: "Мы свяжемся с вами",
    description:
      "Наш специалист позвонит, уточнит детали, ответит на вопросы и подтвердит заказ.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Доставка",
    description:
      "Мы доставим медицинскую кровать по указанному адресу в удобное для вас время.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Установка",
    description:
      "Наш техник выполнит сборку, настройку и покажет, как правильно пользоваться оборудованием.",
  },
];

export const HowItWorksSection: FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className={styles.section}>
      <div className={styles.separator} aria-hidden />

      <div className={styles.container}>
        <h2 className={styles.title}>Всего 4 шага</h2>
        <div className={styles.underline} />

        <div className={styles.grid}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            const cardClass = [
              styles.card,
              visible ? styles.cardVisible : styles.cardHidden,
            ].join(" ");
            return (
              <div
                key={s.step}
                className={cardClass}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <span className={styles.stepLabel}>Шаг {s.step}</span>
                <div className={styles.iconWrap}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDescription}>{s.description}</p>

                {i < steps.length - 1 && (
                  <div className={styles.connector} aria-hidden />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
