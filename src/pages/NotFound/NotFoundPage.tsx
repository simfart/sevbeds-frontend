import React from "react";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import styles from "./NotFoundPage.module.scss";

export function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <div className={styles.subtitle}>Страница не найдена.</div>
      </div>
      <AppLink href="/" className={styles.link}>
        Вернуться на главную
      </AppLink>
    </div>
  );
}
