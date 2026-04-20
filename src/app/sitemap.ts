import type { MetadataRoute } from "next";

type ArticleSlug = { slug: string; updatedAt?: string; createdAt?: string };

const normalizeUrl = (value: string) => value.replace(/\/$/, "");
const SITE_URL = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");
const API_URL = normalizeUrl(process.env.NEXT_PUBLIC_API_URL || SITE_URL);

const STATIC_ROUTES = [
  "",
  "/articles",
  "/delivery-and-installation",
  "/servises/manual-hospital-beds",
  "/servises/electric-hospital-beds",
  "/servises/wheelchairs",
];

async function getArticleSlugs(): Promise<ArticleSlug[]> {
  try {
    const response = await fetch(`${API_URL}/api/articles`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    const data = (await response.json()) as ArticleSlug[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticItems: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const articles = await getArticleSlugs();
  const articleItems: MetadataRoute.Sitemap = articles
    .filter((article) => typeof article.slug === "string" && article.slug.length > 0)
    .map((article) => ({
      url: `${SITE_URL}/articles/${article.slug}`,
      lastModified: article.updatedAt || article.createdAt || now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticItems, ...articleItems];
}
