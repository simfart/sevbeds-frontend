'use client';

import React, { useEffect, useState } from 'react';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import styles from './ArticleList.module.scss';

export type ArticlePreview = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverUrl: string | null;
  createdAt: string;
};

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export function ArticleList() {
  const [articles, setArticles] = useState<ArticlePreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API}/api/articles`)
      .then((r) => r.json())
      .then(setArticles)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className={styles.loading}>Загрузка…</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;
  if (!articles.length) return <div className={styles.empty}>Статей пока нет.</div>;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Статьи</h1>
      <ul className={styles.list}>
        {articles.map((a) => (
          <li key={a.id} className={styles.item}>
            <AppLink href={`/articles/${a.slug}`} className={styles.link}>
              {a.coverUrl && (
                <img
                  src={`${API}${a.coverUrl}`}
                  alt=""
                  className={styles.cover}
                  width={320}
                  height={180}
                  loading="lazy"
                />
              )}
              <div className={styles.content}>
                <h2 className={styles.articleTitle}>{a.title}</h2>
                {a.excerpt && <p className={styles.excerpt}>{a.excerpt}</p>}
              </div>
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
