"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./PopularModels.module.scss";

const models = [
  {
    name: "ElectraCare Pro 3000",
    image: "/images/electric-bed.jpg",
    features: [
      "Full electric adjustment",
      "Built-in side rails",
      "Wireless remote",
    ],
    price: "From $120/month",
  },
  {
    name: "ComfortRest Manual M1",
    image: "/images/manual-bed.jpg",
    features: ["4-section mattress", "Heavy-duty crank", "Lockable wheels"],
    price: "From $75/month",
  },
  {
    name: "MobileLite Wheelchair",
    image: "/images/wheelchair.jpg",
    features: [
      "Ultra-light aluminum",
      "Foldable design",
      "Adjustable footrests",
    ],
    price: "From $45/month",
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
        <h2 className={styles.title}>
          Popular Models
        </h2>
        <div className={styles.titleUnderline} />
        <p className={styles.subtitle}>
          Explore our most requested equipment, trusted by families and
          healthcare providers.
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
                <h3 className={styles.cardTitle}>
                  {model.name}
                </h3>
                <ul className={styles.features}>
                  {model.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <span className={styles.bullet} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={styles.footer}>
                  <span className={styles.price}>
                    {model.price}
                  </span>
                  <button className={styles.button}>
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
