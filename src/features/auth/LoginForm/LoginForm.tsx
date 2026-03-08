'use client';

import React, { useState } from 'react';
import styles from './LoginForm.module.scss';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    fetch(`${API}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, password }),
    })
      .then((r) => r.json())
      .then((data: { token?: string; error?: string }) => {
        if (data.error) throw new Error(data.error);
        if (data.token) {
          localStorage.setItem('admin_token', data.token);
          window.location.href = '/admin/articles';
        }
      })
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Вход в админ-панель</h1>
        {error && <p className={styles.error}>{error}</p>}
        <label className={styles.label}>
          Логин
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className={styles.input}
            required
            autoComplete="username"
          />
        </label>
        <label className={styles.label}>
          Пароль
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
            autoComplete="current-password"
          />
        </label>
        <button type="submit" className={styles.submit} disabled={loading}>
          {loading ? 'Вход…' : 'Войти'}
        </button>
      </form>
    </div>
  );
}
