import type { Metadata, Viewport } from "next";
import {
  Inter,
  Playfair_Display,
  Montserrat,
  Literata,
  Lora,
  Tenor_Sans,
  Prata,
  Spectral,
  Manrope,
  Onest,
} from "next/font/google";
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

export const prata = Prata({
  subsets: ["latin", "cyrillic"],
  variable: "--font-prata",
  weight: "400",
});

export const literata = Literata({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-literata",
});

export const lora = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
});

export const tenor = Tenor_Sans({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-tenor",
});

export const spectral = Spectral({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-spectral",
});

export const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-onest",
});

import { Raleway } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-raleway",
});

import { Jost } from "next/font/google";

export const jost = Jost({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
});

import { Mulish } from "next/font/google";

export const mulish = Mulish({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-mulish",
});

import { Exo_2 } from "next/font/google";

export const exo2 = Exo_2({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title:
    "Аренда медицинских кроватей в Севастополе | Электрические и механические кровати | Медивера",

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
      className={`${inter.variable} ${playfair.variable} ${prata.variable} ${montserrat.variable} ${literata.variable} ${lora.variable} ${tenor.variable} ${spectral.variable} ${manrope.variable} ${onest.variable} ${raleway.variable} ${jost.variable} ${mulish.variable} ${exo2.variable} `}
    >
      <body className="font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
