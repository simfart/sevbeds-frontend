import { FC, MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import styles from "./LinkCta.module.scss";

export interface LinkCtaProps {
  href?: string;
  text?: string;
  children?: ReactNode;
  variant?: "hero" | "accent";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const LinkCta: FC<LinkCtaProps> = ({
  href = "/#contact",
  text = "Оставить заявку",
  children,
  variant = "hero",
  onClick,
}) => {
  const linkClass =
    variant === "accent" ? `${styles.link} ${styles.accent}` : styles.link;

  return (
    <Link href={href} className={linkClass} onClick={onClick}>
      <span className={styles.inner}>
        {children ?? (
          <>
            {text}
            <svg
              className={styles.icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </>
        )}
      </span>
    </Link>
  );
};
