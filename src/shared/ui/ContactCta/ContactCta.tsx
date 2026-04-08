"use client";

import { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";
import { Send } from "lucide-react";
import styles from "./ContactCta.module.scss";

interface ContactCtaProps {
  text: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: "hero" | "accent";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  showIcon?: boolean;
}

export const ContactCta: FC<ContactCtaProps> = ({
  text,
  onClick,
  className,
  variant = "hero",
  type = "button",
  disabled = false,
  showIcon = true,
}: ContactCtaProps) => {
  const rootClassName = `${styles.cta} ${variant === "accent" ? styles.ctaAccent : styles.ctaHero}${className ? ` ${className}` : ""}`;
  const iconClassName = styles.ctaIcon;

  return (
    <button
      type={type}
      onClick={onClick}
      className={rootClassName}
      disabled={disabled}
    >
      {text}
      {showIcon && <Send className={iconClassName} aria-hidden />}
    </button>
  );
};
