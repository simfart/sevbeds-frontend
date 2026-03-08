import React from 'react';
import styles from './ServicesPage.module.scss';

export function ServicesPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Услуги</h1>
      <ul className={styles.list}>
        <li>Аренда медицинских кроватей с электроприводом</li>
        <li>Доставка и установка</li>
        <li>Сроки от одного месяца</li>
        <li>Консультация по выбору</li>
      </ul>
    </div>
  );
}
