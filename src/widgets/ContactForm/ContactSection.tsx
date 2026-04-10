"use client";

import { FC, useEffect, useRef, useState } from "react";
import { ButtonCta } from "@/shared/ui/ContactCta";

import styles from "./ContactSection.module.scss";

export const ContactSection: FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section ref={sectionRef} id="contact" className={styles.section}>
      <div className={styles.topLine} />

      <div
        className={`${styles.inner} ${visible ? styles.innerVisible : styles.innerHidden}`}
      >
        <h2 className={styles.title}>Оставить заявку на аренду</h2>
        <div className={styles.titleUnderline} />
        <p className={styles.subtitle}>
          Мы с заботой доставим и аккуратно установим оборудование у вас дома.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fields}>
            <div>
              <label htmlFor="name" className={styles.label}>
                Имя
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Как к вам обращаться"
                className={styles.field}
              />
            </div>

            <div>
              <label htmlFor="phone" className={styles.label}>
                Телефон
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+7 (____) ___-__-__"
                className={styles.field}
              />
            </div>

            <div>
              <label htmlFor="message" className={styles.label}>
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Опишите, пожалуйста, что вам нужно — мы подберём подходящее решение"
                className={`${styles.field} ${styles.textarea}`}
              />
            </div>

            <ButtonCta
              type="submit"
              disabled={submitted}
              showIcon={!submitted}
              text={submitted ? "Заявка отправлена!" : "Отправить заявку"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
