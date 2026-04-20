"use client";

import { FC, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ButtonCta } from "@/shared/ui/ContactCta";
import { Toast } from "@/shared/ui/Toast";
import styles from "./ContactSection.module.scss";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY;

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) return "";

  let formatted = "+7 ";

  if (digits.length > 1) {
    formatted += "(" + digits.slice(1, 4);
  }
  if (digits.length >= 4) {
    formatted += ") " + digits.slice(4, 7);
  }
  if (digits.length >= 7) {
    formatted += "-" + digits.slice(7, 9);
  }
  if (digits.length >= 9) {
    formatted += "-" + digits.slice(9, 11);
  }

  return formatted;
};

export const ContactSection: FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    message?: string;
  }>({});

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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: undefined }));
    }
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: undefined }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Введите имя";
    } else if (name.trim().length < 3) {
      newErrors.name = "Имя должно быть не менее 3 букв";
    }

    if (!phone) {
      newErrors.phone = "Введите телефон";
    } else if (!formatPhone(phone)) {
      newErrors.phone = "Формат: +7 (999) 123-45-67";
    }

    if (!message.trim()) {
      newErrors.message = "Введите сообщение";
    } else if (message.trim().length < 10) {
      newErrors.message = "Сообщение должно быть не менее 10 символов";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("EmailJS env variables are missing");
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          phone,
          message,
        },
        PUBLIC_KEY,
      );

      setToast({
        message: "Заявка отправлена!",
        type: "success",
      });

      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setToast({
        message: "Ошибка отправки",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className={styles.section}>
      <div className={styles.topLine} />

      <div
        className={`${styles.inner} ${
          visible ? styles.innerVisible : styles.innerHidden
        }`}
      >
        <h2 className={styles.title}>Оставить заявку на аренду</h2>
        <div className={styles.titleUnderline} />
        <p className={styles.subtitle}>
          Мы с заботой доставим и аккуратно установим оборудование у вас дома.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {toast && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          )}

          <div className={styles.fields}>
            <div>
              <label htmlFor="name" className={styles.label}>
                Имя
              </label>
              <input
                name="name"
                value={name}
                onChange={handleNameChange}
                className={`${styles.field} ${
                  errors.name ? styles.fieldError : ""
                }`}
              />

              {errors.name && <p className={styles.errorText}>{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className={styles.label}>
                Телефон
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="+7 (___) ___-__-__"
                className={`${styles.field} ${
                  errors.phone ? styles.fieldError : ""
                }`}
              />

              {errors.phone && (
                <p className={styles.errorText}>{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className={styles.label}>
                Сообщение
              </label>
              <textarea
                name="message"
                value={message}
                onChange={handleMessageChange}
                className={`${styles.field} ${
                  errors.message ? styles.fieldError : ""
                }`}
              />

              {errors.message && (
                <p className={styles.errorText}>{errors.message}</p>
              )}
            </div>

            <ButtonCta
              type="submit"
              disabled={loading}
              showIcon={!loading}
              text={loading ? "Отправка..." : "Отправить заявку"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
