import React from 'react';
import Link from 'next/link';

/** В Next.js навигация через <Link> даёт клиентский переход без полной перезагрузки (SPA-поведение). */
export function AppLink({
  href,
  children,
  className,
  ...props
}: { href: string; children: React.ReactNode; className?: string; [k: string]: unknown }) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
