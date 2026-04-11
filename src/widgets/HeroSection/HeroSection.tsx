"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.scss";
import { LinkCta } from "@/shared/ui/LinkCta";

export const HeroSection: FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const visible = isVisible ? styles.visible : styles.hidden;

  return (
    <section ref={heroRef} className={styles.root}>
      <div
        className={styles.bgWrap}
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern luxury home care setting with natural sunlight"
          fill
          className={styles.bgImage}
          priority
          quality={90}
        />
        <Image
          src="/images/hero-mobile2.png"
          alt="Modern luxury home care setting with natural sunlight"
          fill
          className={styles.mobileImage}
          priority
          quality={90}
        />
      </div>

      <div className={styles.overlay} />
      <div className={styles.line} />

      <div className={styles.content}>
        <div className={styles.inner}>
          <h1 className={`${styles.title} ${visible}`}>
            Аренда медицинских кроватей для лежачих больных в Севастополе
          </h1>
          <p className={`${styles.subtitle} ${visible}`}>
            Функциональные электрические и механические кровати для ухода за
            больными. Привезём и установим в течение 24 часов.
          </p>
          <LinkCta href="/#contact" variant="accent" />
        </div>
      </div>
    </section>
  );
};
