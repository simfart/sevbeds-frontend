import React from 'react';
import styles from './ContactsPage.module.scss';

export function ContactsPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Контакты</h1>
      <p className={styles.text}>Телефон: +7 (999) 123-45-67</p>
      <p className={styles.text}>Email: info@medkrovati.ru</p>
      <p className={styles.text}>Адрес: г. Москва, ул. Примерная, д. 1</p>
    </div>
  );
}
