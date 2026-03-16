"use client";

import { FC, useEffect, useRef, useState } from "react";
import { Truck, Settings, Heart, Calendar } from "lucide-react";
import styles from "./Advantages.module.scss";

const advantages = [
  {
    icon: Truck,
    title: "Быстрая доставка",
    description:
      "Доставка медицинских кроватей, инвалидных колясок и другого оборудования на дом в течение 24–48 часов.",
  },
  {
    icon: Settings,
    title: "Установка включена",
    description:
      "Профессиональная установка и настройка оборудования нашими обученными специалистами – без дополнительных затрат.",
  },
  {
    icon: Heart,
    title: "Комфортный уход дома",
    description:
      "Оборудование уровня стационара, адаптированное для удобного и безопасного использования в домашних условиях.",
  },
  {
    icon: Calendar,
    title: "Гибкие условия аренды",
    description:
      "Арендуйте на неделю, месяц или дольше. Без долгосрочных обязательств и скрытых платежей.",
  },
];

export const AdvantagesSection: FC = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([
    false,
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
            setVisibleItems((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.separator} aria-hidden />

      <div className={styles.container}>
        <h2 className={styles.title}>Почему выбирают нас</h2>
        <div className={styles.underline} />

        <div className={styles.grid}>
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            const itemClass = [
              styles.item,
              visibleItems[i] ? styles.itemVisible : styles.itemHidden,
            ].join(" ");
            return (
              <div
                key={adv.title}
                data-index={i}
                className={itemClass}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={styles.iconWrap}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.itemTitle}>{adv.title}</h3>
                <p className={styles.itemDescription}>{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
