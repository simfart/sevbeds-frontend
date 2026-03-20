'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { api, apiFormData } from "@/shared/api/client";
import styles from "./ArticleAdmin.module.scss";

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  body: string;
  coverUrl: string | null;
  createdAt: string;
};

export function ArticleAdmin() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [cover, setCover] = useState<File | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const load = () => {
    api<Article[]>("/api/articles/admin/list")
      .then(setArticles)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    if (!t) {
      window.location.href = "/admin";
      return;
    }
    load();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    window.location.href = "/admin";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitLoading(true);
    const fd = new FormData();
    fd.set("title", title);
    fd.set("slug", slug || title.trim().toLowerCase().replace(/\s+/g, "-"));
    fd.set("excerpt", excerpt);
    fd.set("body", body);
    if (cover) fd.set("cover", cover);
    apiFormData("/api/articles/admin", fd)
      .then(() => {
        setFormOpen(false);
        setTitle("");
        setSlug("");
        setExcerpt("");
        setBody("");
        setCover(null);
        load();
      })
      .catch((e: Error) => setSubmitError(e.message))
      .finally(() => setSubmitLoading(false));
  };

  const handleDelete = (id: string) => {
    if (!confirm("Удалить статью?")) return;
    api(`/api/articles/admin/${id}`, { method: "DELETE" })
      .then(load)
      .catch((e: Error) => setError(e.message));
  };

  if (loading) return <div className={styles.wrap}>Загрузка…</div>;

  return (
    <div className={styles.wrap}>
      <div className={styles.toolbar}>
        <Link href="/">На сайт</Link>
        <button type="button" onClick={handleLogout} className={styles.logout}>
          Выйти
        </button>
      </div>
      <h1 className={styles.title}>Статьи</h1>
      {error && <p className={styles.error}>{error}</p>}
      <button
        type="button"
        onClick={() => setFormOpen(true)}
        className={styles.addBtn}
      >
        Добавить статью
      </button>

      {formOpen && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Новая статья</h2>
          {submitError && <p className={styles.error}>{submitError}</p>}
          <label>
            Заголовок *
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Slug (латиница, дефисы)
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="auto"
            />
          </label>
          <label>
            Краткое описание
            <input
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
          </label>
          <label>
            Текст *
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={6}
              required
            />
          </label>
          <label>
            Обложка (изображение)
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setCover(e.target.files?.[0] ?? null)}
            />
          </label>
          <div className={styles.formActions}>
            <button type="submit" disabled={submitLoading}>
              {submitLoading ? "Сохранение…" : "Сохранить"}
            </button>
            <button type="button" onClick={() => setFormOpen(false)}>
              Отмена
            </button>
          </div>
        </form>
      )}

      <ul className={styles.list}>
        {articles.map((a) => (
          <li key={a.id} className={styles.item}>
            <span className={styles.itemTitle}>{a.title}</span>
            <button
              type="button"
              onClick={() => handleDelete(a.id)}
              className={styles.deleteBtn}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
