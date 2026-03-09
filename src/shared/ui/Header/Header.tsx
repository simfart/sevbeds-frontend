"use client";

import { FC, useEffect, useState } from "react";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import styles from "./Header.module.scss";

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
  { label: "Медтехника", href: "#services" },
  { label: "Условия аренды", href: "#models" },
  { label: "Полезные статьи", href: "#how-it-works" },
  //   { label: "FAQ", href: "#faq" },
  //   { label: "Contact", href: "#contact" },
];

export const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.root} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <AppLink href="/" className={styles.logo}>
          Медивера
        </AppLink>
        <div className={styles.desktopLinks}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.cta}>
            Request Rental
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
        <div className={styles.mobileInner}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={styles.mobileLink}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={styles.mobileCta}
          >
            Заказать аренду
          </a>
        </div>
      </div>
    </header>
  );
};
