"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { Zap, Wrench, Accessibility } from "lucide-react";
import styles from "./Services.module.scss";

const services = [
  {
    icon: Zap,
    title: "Электрические медицинские кровати",
    description:
      "Комфортные электрические кровати с дистанционным управлением для оптимальной позиции тела. Идеально подходят для пациентов, которым требуется частая смена положения.",
    features: [
      "Дистанционное управление положением кровати для лежачих больных дома",
      "Несколько вариантов регулировки кровати для комфортного ухода",
      "Бортики для безопасности пациента при домашней реабилитации",
    ],
  },
  {
    icon: Wrench,
    title: "Механические медицинские кровати",
    description:
      "Надёжные кровати с ручным приводом, предназначенные для долговременного ухода дома. Прочные материалы для ежедневного использования.",
    features: [
      "Ручной привод кровати для удобного ухода за больным дома",
      "Прочная рама медицинской кровати для долгосрочного использования",
      "Лёгкое обслуживание и уход за механической кроватью",
    ],
  },
  {
    icon: Accessibility,
    title: "Инвалидные коляски",
    description:
      "Лёгкие и эргономичные коляски для передвижения дома и на улице. Созданы для комфорта при длительном использовании.",
    features: [
      "Лёгкая инвалидная коляска на дом для удобного перемещения",
      "Эргономичное сиденье коляски для длительного комфорта",
      "Складная конструкция коляски для хранения и транспортировки",
    ],
  },
];

const cardOffsetClasses = [styles.cardOffsetUp, "", styles.cardOffsetDown];

export const ServicesSection: FC = () => {
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
    <section ref={sectionRef} id="services" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши услуги</h2>
        <div className={styles.underline} />
        <p className={styles.description}>
          Аренда качественного медицинского оборудования с доставкой на дом,
          профессиональной установкой и поддержкой.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, i) => {
          const Icon = service.icon;
          const offsetClass = cardOffsetClasses[i];
          const cardClass = [
            styles.card,
            offsetClass,
            visibleCards[i] ? styles.cardVisible : styles.cardHidden,
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <div
              key={service.title}
              data-index={i}
              className={cardClass}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={styles.iconWrap}>
                <Icon className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <span className={styles.featureDot} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
