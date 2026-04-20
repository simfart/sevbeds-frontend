"use client";

import { FC, useEffect } from "react";
import styles from "./Toast.module.scss";

type Props = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

export const Toast: FC<Props> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.icon}>{type === "success" ? "✓" : "✕"}</div>

      <div className={styles.text}>{message}</div>

      <div className={styles.progress} />
    </div>
  );
};
