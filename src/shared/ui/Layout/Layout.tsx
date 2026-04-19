"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/shared/ui/Header";
import { SiteFooter } from "@/shared/ui/Footer";
import { Toaster } from "react-hot-toast";

import styles from "./Layout.module.scss";

/** В Next.js текущий путь берём из usePathname() (клиентский хук). Серверные компоненты получают путь из заголовков/параметров. */
export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin") ?? false;

  return (
    <div className={styles.root}>
      {!isAdmin && (
        <Header />
        // <header className={styles.header}>
        //   <AppLink href="/" className={styles.logo}>
        //     Аренда медкроватей
        //   </AppLink>
        //   <nav className={styles.nav}>
        //     <AppLink href="/" className={pathname === '/' ? styles.active : ''}>
        //       Главная
        //     </AppLink>
        //     <AppLink href="/services" className={pathname === '/services' ? styles.active : ''}>
        //       Услуги
        //     </AppLink>
        //     <AppLink href="/articles" className={pathname === '/articles' ? styles.active : ''}>
        //       Статьи
        //     </AppLink>
        //     <AppLink href="/contacts" className={pathname === '/contacts' ? styles.active : ''}>
        //       Контакты
        //     </AppLink>
        //     <AppLink href="/admin" className={styles.adminLink}>
        //       Вход
        //     </AppLink>
        //   </nav>
        // </header>
      )}
      <main className={styles.main}>{children}</main>
      <Toaster position="top-right" />
      {!isAdmin && <SiteFooter />}
    </div>
  );
}
