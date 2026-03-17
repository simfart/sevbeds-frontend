"use client";

import React, { FC, useEffect, useState } from "react";
import styles from "./ArticleView.module.scss";

type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  body: string;
  coverUrl: string | null;
  createdAt: string;
};

/** В Next.js переменные для браузера задаются с префиксом NEXT_PUBLIC_. */
const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const ArticleView: FC<{ slug: string }> = ({ slug }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    fetch(`${API}/api/articles/slug/${slug}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("Не найдено"))))
      .then(setArticle)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className={styles.loading}>Загрузка…</div>;
  if (error || !article)
    return <div className={styles.error}>Статья не найдена</div>;

  return (
    <article className={styles.article}>
      {article.coverUrl && (
        <img
          src={`${API}${article.coverUrl}`}
          alt=""
          className={styles.cover}
          width={800}
          height={450}
          loading="eager"
          fetchPriority="high"
        />
      )}
      <h1 className={styles.title}>{article.title}</h1>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{
          __html: article.body.replace(/\n/g, "<br />"),
        }}
      />
    </article>
  );
};
