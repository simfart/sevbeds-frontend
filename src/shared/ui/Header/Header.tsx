"use client";

import { FC, useEffect, useRef, useState } from "react";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import styles from "./Header.module.scss";

const IconChevron = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const IconMenu = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const IconX = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const links = [
  { label: "Аренда медтехники", href: "/services" },
  { label: "Доставка и установка", href: "/delivery" },
  { label: "Полезные статьи", href: "/articles" },
];

export const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`${styles.root} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <AppLink href="/" className={styles.logo}>
          Медивера
        </AppLink>
        <div className={styles.desktopLinks}>
          <div className={styles.dropdown} ref={servicesRef}>
            <button
              className={styles.dropdownTrigger}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Аренда медтехники
              <IconChevron
                className={`${styles.chevron} ${
                  servicesOpen ? styles.chevronOpen : ""
                }`}
              />
            </button>

            <div
              className={`${styles.dropdownMenu} ${
                servicesOpen ? styles.open : ""
              }`}
            >
              <AppLink
                href="/services/electric-beds"
                className={styles.dropdownItem}
              >
                Аренда электро кроватей
              </AppLink>

              <AppLink
                href="/services/mechanical-beds"
                className={styles.dropdownItem}
              >
                Аренда механических кроватей
              </AppLink>

              <AppLink
                href="/services/wheelchairs"
                className={styles.dropdownItem}
              >
                Инвалидные кресла
              </AppLink>
            </div>
          </div>

          <AppLink href="/delivery" className={styles.link}>
            Доставка и установка
          </AppLink>

          <AppLink href="/articles" className={styles.link}>
            Полезные статьи
          </AppLink>

          <a href="tel:+79789789789" className={styles.cta}>
            +7(978) 978-97-89
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={styles.menuButton}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <IconX className={styles.icon} />
          ) : (
            <IconMenu className={styles.icon} />
          )}
        </button>
      </nav>

      <div className={`${styles.mobilePanel} ${open ? styles.open : ""}`}>
        <nav className={styles.mobileInner}>
          {links.map((link) => (
            <AppLink
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={styles.mobileLink}
            >
              {link.label}
            </AppLink>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={styles.mobileCta}
          >
            Заказать аренду
          </a>
        </nav>
      </div>
    </header>
  );
};
