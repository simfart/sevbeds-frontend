import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Layout } from "@/shared/ui/Layout/Layout";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
});
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title:
    "Аренда медицинских кроватей в Севастополе — электрические и механические | Медивера",

  description:
    "Аренда медицинских кроватей в Севастополе с быстрой доставкой. Электрические и механические функциональные кровати, а также инвалидные кресла для ухода за лежачими больными.",

  keywords: [
    "аренда медицинской кровати",
    "аренда медицинской кровати Севастополь",
    "медицинская кровать для лежачих больных",
    "аренда функциональной кровати",
    "электрическая медицинская кровать",
    "механическая медицинская кровать",
    "аренда инвалидного кресла",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Аренда медицинских кроватей в Севастополе",
    description:
      "Электрические и механические медицинские кровати в аренду. Быстрая доставка по Севастополю.",
    url: "https://medrent.ru",
    siteName: "Медивера",
    locale: "ru_RU",
    type: "website",
  },

  alternates: {
    canonical: "https://medrent.ru",
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F5F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}
    >
      <body className="font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
