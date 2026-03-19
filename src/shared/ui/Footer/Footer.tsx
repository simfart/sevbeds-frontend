import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { FC } from "react";
import { AppLink } from "@/shared/ui/AppLink";

const footerLinks = [
  { href: "/", label: "Главная" },
  { href: "/arenda-elektricheskie-krovati", label: "Электрические кровати" },
  { href: "/arenda-mehanicheskie-krovati", label: "Механические кровати" },
  { href: "/arenda-kolyaski", label: "Инвалидные коляски" },
  { href: "/dostavka-meditsinskih-krovatey", label: "Доставка и установка" },
  { href: "/articles", label: "Полезные статьи" },
];

export const SiteFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <Image
            src="/images/M-logo-light.png"
            alt="Логотип компании Медивера"
            width={100}
            height={100}
          />
          <p className={styles.brandText}>
            Аренда медицинского оборудования для домашнего ухода. Комфорт,
            безопасность и удобство с доставкой на дом
          </p>
        </div>

        <div>
          <h4 className={styles.sectionTitle}>Навигация</h4>
          <nav className={styles.linksList}>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <AppLink href={link.href} className={styles.link}>
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h4 className={styles.sectionTitle}>Контакты</h4>
          <div className={styles.contactList}>
            <a href="tel:+15550001234" className={styles.contactLink}>
              <Phone className={styles.contactIcon} />
              +7 (978) 792-6774
            </a>
            <a href="mailto:info@medrent.com" className={styles.contactLink}>
              <Mail className={styles.contactIcon} />
              info@medrent.com
            </a>
          </div>

          {/* Social Icons */}
          <div className={styles.socialList}>
            <a href="#" aria-label="VK" className={styles.socialLink}>
              <svg
                className={styles.socialIcon}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 7h2.9c.1 0 .3.1.3.3.4 2 1.2 3.8 2.4 5.3.4.5.8.9 1.2 1.1.2.1.3 0 .3-.2v-3c0-.8.5-1.3 1.3-1.3h1.8c.4 0 .7.3.7.7v2.6c0 .3.2.4.4.3.9-.4 1.8-1.4 2.6-2.8.2-.4.5-.6.9-.6h3c.3 0 .4.4.3.7-.5 1.3-1.3 2.5-2.3 3.5-.5.5-.5.8 0 1.2.9.7 1.8 1.6 2.6 2.6.3.4 0 1-.5 1H18c-.5 0-.8-.2-1.1-.5l-1.6-1.9c-.2-.2-.4-.2-.6 0l-.2.2c-.2.2-.3.4-.3.7v1c0 .3-.2.5-.5.5h-1.5c-1.7 0-3.4-.8-5-2.3C5 14.8 3.7 11.6 3 7.6 2.9 7.3 3 7 3.3 7H3z" />
              </svg>
            </a>
            <a href="#" aria-label="Telegram" className={styles.socialLink}>
              <svg
                className={styles.socialIcon}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.944 4.658c.218-.895-.315-1.244-1.028-.985L2.962 10.59c-1.227.484-1.21 1.169-.223 1.472l4.608 1.438 1.777 5.65c.216.69.109.963.848.963.57 0 .822-.26 1.14-.569.2-.194 1.39-1.35 2.643-2.56l5.495 4.056c1.013.558 1.743.271 1.995-.938L21.944 4.658zM8.12 12.97l10.67-6.73c.532-.323 1.02-.15.62.204l-9.13 8.246-.355 3.608-1.805-5.328z" />
              </svg>
            </a>
            <a href="#" aria-label="Max" className={styles.socialLink}>
              <svg
                className={styles.socialIcon}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 18V6h2.2L12 13l5.8-7H20v12h-2V9.6L12.7 16h-1.4L6 9.6V18H4Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          {`© ${new Date().getFullYear()} Медивера. Все права защищены. Аренда медицинского оборудования с доставкой на дом.`}
        </p>
      </div>
    </footer>
  );
};
