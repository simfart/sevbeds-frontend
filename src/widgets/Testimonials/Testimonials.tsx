"use client";

import { FC, useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    quote:
      "The electric bed made my mother's recovery so much easier. The delivery was fast and the setup was seamless. Truly a premium experience.",
    name: "Elena K.",
    role: "Daughter of patient",
    rating: 5,
  },
  {
    quote:
      "We rented a wheelchair for three months. The quality was exceptional and the team was always available for any questions or adjustments.",
    name: "Mark T.",
    role: "Family caregiver",
    rating: 5,
  },
  {
    quote:
      "Professional from start to finish. The technician explained everything in detail and the bed was installed within the hour. Highly recommend.",
    name: "Sofia R.",
    role: "Home care nurse",
    rating: 5,
  },
];

export const TestimonialsSection: FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.divider} />

      <div className={styles.container}>
        <h2 className={styles.title}>
          What Our Clients Say
        </h2>
        <div className={styles.titleUnderline} />

        <div className={styles.list}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
            >
              {/* Stars */}
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className={styles.star} />
                ))}
              </div>

              <blockquote className={styles.quote}>
                {`"${t.quote}"`}
              </blockquote>

              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.name}>
                    {t.name}
                  </p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
