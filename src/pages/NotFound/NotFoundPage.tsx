import React from 'react';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import styles from './NotFoundPage.module.scss';

export function NotFoundPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Страница не найдена</p>
      <AppLink href="/" className={styles.link}>
        На главную
      </AppLink>
    </div>
  );
}
