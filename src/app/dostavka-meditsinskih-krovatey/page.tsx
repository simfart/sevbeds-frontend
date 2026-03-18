import { DeliveryPage } from "@/pages/Delivery";

export const metadata = {
  title: "Доставка и установка медицинских кроватей в Севастополе",
  description:
    "Аренда медицинских кроватей с доставкой и установкой в Севастополе. Быстро привезем, поднимем на этаж и настроим. Консультация бесплатно.",

  keywords: [
    "медицинская кровать Севастополь",
    "аренда медицинской кровати",
    "доставка медкровати",
    "установка медицинской кровати",
    "медкровать на дом",
  ],

  openGraph: {
    title: "Доставка медицинских кроватей в Севастополе",
    description:
      "Быстрая доставка, подъем и установка медицинских кроватей. Работаем по всему Севастополю.",
    url: "https://your-site.ru/dostavka-meditsinskih-krovatey",
    siteName: "Аренда медкроватей",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://your-site.ru/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Медицинская кровать с доставкой",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Доставка медицинских кроватей",
    description: "Аренда медкроватей с доставкой и установкой в Севастополе.",
    images: ["https://your-site.ru/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <DeliveryPage />;
}
