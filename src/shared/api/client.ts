const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

function getToken(): string | null {
  return typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;
}

export async function api<T>(
  path: string,
  options: RequestInit & { token?: string } = {}
): Promise<T> {
  const { token, ...rest } = options;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(rest.headers as Record<string, string>),
  };
  const t = token ?? getToken();
  if (t) headers['Authorization'] = `Bearer ${t}`;

  const res = await fetch(`${API_BASE}${path}`, { ...rest, headers });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error((err as { error?: string }).error || 'Ошибка запроса');
  }
  return res.json() as Promise<T>;
}

export function apiFormData(path: string, formData: FormData): Promise<unknown> {
  const token = getToken();
  const headers: HeadersInit = {};
  if (token) headers['Authorization'] = `Bearer ${token}`;

  return fetch(`${API_BASE}${path}`, {
    method: 'POST',
    body: formData,
    headers,
  }).then((res) => {
    if (!res.ok) return res.json().then((e) => { throw new Error(e.error || 'Ошибка'); });
    return res.json();
  });
}
