import { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";
import { Send } from "lucide-react";
import styles from "./ButtonCta.module.scss";

interface ButtonCtaProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  showIcon?: boolean;
}

export const ButtonCta: FC<ButtonCtaProps> = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  showIcon = true,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={styles.cta}
    disabled={disabled}
  >
    {text}
    {showIcon && <Send className={styles.ctaIcon} aria-hidden />}
  </button>
);
