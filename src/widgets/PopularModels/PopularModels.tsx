"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./PopularModels.module.scss";

const models = [
  {
    name: "Электрическая кровать",
    image: "/images/electric-bed.jpg",
    features: [
      "Современная медицинская кровать с электрической регулировкой для комфортного ухода за лежачими больными на дому. Подходит для длительной реабилитации и послеоперационного восстановления.",
    ],
    price: "От 5000₽/мес",
  },
  {
    name: "ComfortRest Manual M1",
    image: "/images/manual-bed.jpg",
    features: ["4-section mattress", "Heavy-duty crank", "Lockable wheels"],
    price: "От 5000₽/мес",
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
    <section ref={sectionRef} id="models" className={styles.root}>
      <div className={styles.dividerLine} />

      <div className={styles.container}>
        <h2 className={styles.title}>Popular Models</h2>
        <div className={styles.titleDivider} />
        <p className={styles.subtitle}>
          Explore our most requested equipment, trusted by families and
          healthcare providers.
        </p>

        <div className={styles.grid}>
          {models.map((model, i) => (
            <div
              key={model.name}
              data-index={i}
              className={`${styles.card} ${visibleCards[i] ? styles.visible : styles.hidden}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{model.name}</h3>
                <ul className={styles.featureList}>
                  {model.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      <span className={styles.bullet} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{model.price}</span>
                  <button type="button" className={styles.ctaButton}>
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
