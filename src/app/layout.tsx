import type { Metadata } from 'next';
import { Layout } from '@/shared/ui/Layout/Layout';
import './globals.css';

/**
 * В Next.js App Router корневой layout.tsx оборачивает ВСЕ страницы приложения.
 * Сюда кладём общий UI (шапка, подвал), провайдеры и глобальные стили.
 * Дочерние layout.tsx в папках (например app/admin/layout.tsx) наследуют этот и добавляют своё.
 */
export const metadata: Metadata = {
  title: { default: 'Аренда медицинских кроватей', template: '%s — Аренда медицинских кроватей' },
  description: 'Удобные и надёжные кровати для ухода за больными на дому и в медучреждениях.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
