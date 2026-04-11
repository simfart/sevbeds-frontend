"use client";

import {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { LinkCta } from "@/shared/ui/LinkCta/LinkCta";
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
    label: "Медицинские кровати с электроприводом",
  },
  {
    href: "/servises/manual-hospital-beds",
    label: "Механические медицинские кровати",
  },
  { href: "/servises/wheelchairs", label: "Инвалидные коляски" },
];

export const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<{ top: number; left: number } | null>(
    null,
  );
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateMenuPosition = useCallback(() => {
    const el = servicesTriggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const menuWidth = 240;
    const left = Math.min(rect.left, window.innerWidth - menuWidth - 8);
    setMenuPos({ top: rect.bottom + 10, left: Math.max(8, left) });
  }, []);

  useLayoutEffect(() => {
    if (!servicesOpen) return;
    updateMenuPosition();
  }, [servicesOpen, scrolled, updateMenuPosition]);

  useEffect(() => {
    if (!servicesOpen) return;
    updateMenuPosition();
    window.addEventListener("scroll", updateMenuPosition, true);
    window.addEventListener("resize", updateMenuPosition);
    return () => {
      window.removeEventListener("scroll", updateMenuPosition, true);
      window.removeEventListener("resize", updateMenuPosition);
    };
  }, [servicesOpen, updateMenuPosition]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const t = event.target as Node;
      if (servicesRef.current?.contains(t)) return;
      if (servicesMenuRef.current?.contains(t)) return;
      setServicesOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [servicesOpen]);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: MouseEvent) => {
      const t = event.target as Node;
      if (headerRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`${styles.root} ${scrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.nav}>
        <AppLink href="/" className={styles.logo}>
          <Image
            src="/images/M-logo1.png"
            alt="Логотип компании Медивера"
            width={100}
            height={100}
          />
        </AppLink>
        <div className={styles.desktopLinks}>
          <div className={styles.dropdown} ref={servicesRef}>
            <button
              ref={servicesTriggerRef}
              type="button"
              className={styles.dropdownTrigger}
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Аренда медтехники
              <IconChevron
                className={`${styles.chevron} ${
                  servicesOpen ? styles.chevronOpen : ""
                }`}
              />
            </button>

            {servicesOpen &&
              menuPos &&
              typeof document !== "undefined" &&
              createPortal(
                <div
                  ref={servicesMenuRef}
                  className={styles.dropdownMenuPortal}
                  style={{
                    top: menuPos.top,
                    left: menuPos.left,
                  }}
                  role="menu"
                >
                  {links.map((link) => (
                    <AppLink
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      onClick={() => {
                        setOpen(false);
                        setServicesOpen(false);
                      }}
                      className={styles.dropdownItem}
                    >
                      {link.label}
                    </AppLink>
                  ))}
                </div>,
                document.body,
              )}
          </div>

          <AppLink href="/delivery-and-installation" className={styles.link}>
            Доставка и установка
          </AppLink>

          {/* <AppLink href="/articles" className={styles.link}>
            Полезные статьи
          </AppLink> */}

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
          <div className={styles.mobileTitleLink}>
            Аренда медицинского оборудования
          </div>
          <div className={styles.mobileLinkVariants}>
            {links.map((link) => (
              <AppLink
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={styles.mobileLinkVariant}
              >
                {link.label}
              </AppLink>
            ))}
          </div>

          <AppLink
            href="/delivery-and-installation"
            className={styles.mobileLink}
          >
            Доставка и установка
          </AppLink>
          <div className={styles.mobileCta}>
            <LinkCta
              href="/#contact"
              variant="accent"
              onClick={() => setOpen(false)}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
