"use client";

import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion";
import styles from "./Faq.module.scss";

const faqs = [
  {
    question:
      "Как быстро можно заказать аренду медицинской кровати в Севастополе недорого?",
    answer:
      "Мы предлагаем аренду медицинских кроватей в Севастополе по доступной цене с быстрой доставкой в течение 24–48 часов. Возможна срочная доставка в день обращения. Подберём оптимальный вариант под ваш бюджет — недорогой прокат кровати для лежачих больных без переплат.",
  },
  {
    question: "Включена ли установка в стоимость доставки кровати?",
    answer:
      "Да, доставка медицинской кровати в Севастополе включает подъём, установку и настройку. Наши специалисты покажут, как пользоваться кроватью, чтобы обеспечить комфортный уход за пациентом. Никаких скрытых платежей — всё включено в стоимость доставки.",
  },
  {
    question: "Какой минимальный срок аренды медицинской кровати?",
    answer:
      "Минимальный срок аренды составляет 1 месяц. Мы также предлагаем выгодные условия при долгосрочной аренде. При необходимости вы можете продлить или завершить аренду, уведомив нас за 48 часов.",
  },
  {
    question: "Есть ли обслуживание и поддержка при аренде кровати?",
    answer:
      "Да, мы предоставляем полный сервис: техническое обслуживание, консультации и быструю замену медицинской кровати при необходимости. Работаем ежедневно по Севастополю и Крыму, обеспечивая надёжную поддержку на весь срок аренды.",
  },
  {
    question: "Как оформить аренду кровати для лежачего больного?",
    answer:
      "Чтобы взять медицинскую кровать в аренду в Севастополе, оставьте заявку на сайте или позвоните нам. Мы быстро подберём подходящую модель, согласуем цену, доставку и установку — всё максимально просто и удобно.",
  },
  {
    question: "Как происходит возврат медицинской кровати после аренды?",
    answer:
      "Когда аренда медицинской кровати больше не требуется, просто свяжитесь с нами. Мы приедем, аккуратно разберём и вывезем оборудование. Вам не нужно заниматься транспортировкой — удобный сервис «под ключ» по Севастополю.",
  },
];

export function FaqSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} id="faq" className={styles.section}>
      <div className={styles.topDivider} />

      <div
        className={`${styles.container} ${
          visible ? styles.containerVisible : styles.containerHidden
        }`}
      >
        <h2 className={styles.title}>Ответы на частые вопросы</h2>
        <div className={styles.titleAccent} />

        <div className={styles.card}>
          <Accordion type="single" collapsible className={styles.accordion}>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className={styles.item}>
                <AccordionTrigger className={styles.trigger}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={styles.content}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
