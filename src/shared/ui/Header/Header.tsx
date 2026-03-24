"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  {
    href: "/servises/electric-hospital-beds",
    label: "Аренда кроватей с электроприводом",
  },
  {
    href: "/servises/manual-hospital-beds",
    label: "Аренда механических кроватей",
  },
  { href: "/servises/wheelchairs", label: "Аренда инвалидных колясок" },
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
          <Image
            src="/images/M-logo-center.png"
            alt="Логотип компании Медивера"
            width={100}
            height={100}
          />
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
            </div>
          </div>

          <AppLink href="/delivery-and-installation" className={styles.link}>
            Доставка и установка
          </AppLink>

          <AppLink href="/articles" className={styles.link}>
            Полезные статьи
          </AppLink>

          <a href="tel:+79789410960" className={styles.cta}>
            +7(978) 941-0960
          </a>
        </div>

        <a href="tel:+79789410960" className={styles.ctaPhone}>
          +7(978) 941-0960
        </a>
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
