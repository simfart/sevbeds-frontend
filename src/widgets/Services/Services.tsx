"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Wrench, Accessibility } from "lucide-react";
import styles from "./Services.module.scss";

const models = [
  {
    icon: Zap,
    image: "/images/electric-bed.jpg",
    name: "Электрические медицинские кровати",
    description:
      "Комфортные электрические кровати с дистанционным управлением для оптимальной позиции тела. Идеально подходят для пациентов, которым требуется частая смена положения.",
    features: [
      "Дистанционное управление положением кровати для лежачих больных дома",
      "Несколько вариантов регулировки кровати для комфортного ухода",
      "Бортики для безопасности пациента при домашней реабилитации",
    ],
    price: "от 3999₽/мес",
    link: "/servises/electric-hospital-beds",
  },
  {
    image: "/images/manual-bed.jpg",
    icon: Wrench,
    name: "Механические медицинские кровати",
    description:
      "Надёжные кровати с ручным приводом, предназначенные для долговременного ухода дома. Прочные материалы для ежедневного использования.",
    features: [
      "Ручной привод кровати для удобного ухода за больным дома",
      "Прочная рама медицинской кровати для долгосрочного использования",
      "Лёгкое обслуживание и уход за механической кроватью",
    ],
    price: "от 3999₽/мес",
    link: "/servises/manual-hospital-beds",
  },
  {
    image: "/images/wheelchair.jpg",
    icon: Accessibility,
    name: "Инвалидные коляски",
    description:
      "Лёгкие и эргономичные коляски для передвижения дома и на улице. Созданы для комфорта при длительном использовании.",
    features: [
      "Лёгкая инвалидная коляска на дом для удобного перемещения",
      "Эргономичное сиденье коляски для длительного комфорта",
      "Складная конструкция коляски для хранения и транспортировки",
    ],
    price: "от 1499₽/мес",
    link: "/servises/wheelchairs",
  },
];

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
    <section ref={sectionRef} id="models" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши услуги</h2>
        <div className={styles.titleUnderline} />
        <p className={styles.subtitle}>
          Аренда качественного медицинского оборудования с доставкой на дом,
          профессиональной установкой и поддержкой. Самые популярные модели
          медицинского оборудования для аренды, проверенные семьями и
          специалистами здравоохранения.
        </p>
        <div className={styles.grid}>
          {models.map((model, i) => {
            const Icon = model.icon;
            return (
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
                  <div className={styles.titleHeader}>
                    {" "}
                    <Icon className={styles.icon} />
                    <h3 className={styles.cardTitle}>{model.name}</h3>
                  </div>

                  <p className={styles.cardDescription}>{model.description}</p>

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
                    <Link href={model.link} className={styles.button}>
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
