import { FC } from "react";
// import { ImageShowcase } from "@/shared/ui/ImageShowcase";
import styles from "./ElectricBeds.module.scss";

// const electricBedData = {
//   title: "Аренда медицинских кроватей с электроприводом",
//   description:
//     "Аренда медицинских кроватей с электроприводом — удобное решение для ухода за лежачими пациентами на дому, в период реабилитации после операций, травм или при хронических заболеваниях.Функциональные кровати с электрической регулировкой позволяют менять положение тела без физических усилий, обеспечивая комфорт пациенту и облегчая уход для родственников или медицинского персонала. Мы предлагаем в аренду современные модели медицинских кроватей с доставкой и установкой.",
//   images: [
//     "/images/1.1.webp",
//     "/images/1.2.webp",
//     "/images/1.3.webp",
//     "/images/1.4.webp",
//   ],
//   features: [
//     { icon: "settings" as const, label: "Electric Controls" },
//     { icon: "heart" as const, label: "Pressure Relief" },
//     { icon: "shield" as const, label: "Side Rails" },
//     { icon: "wrench" as const, label: "Easy Assembly" },
//   ],
//   benefits: [
//     {
//       title: "Free Same-Day Delivery",
//       description:
//         "We deliver and set up your equipment the same day you order, ensuring you get the care you need right away.",
//     },
//     {
//       title: "24/7 Support",
//       description:
//         "Our medical equipment specialists are available around the clock to assist you with any questions or concerns.",
//     },
//     {
//       title: "Flexible Rental Terms",
//       description:
//         "Choose from daily, weekly, or monthly rental options with no long-term commitment required.",
//     },
//     {
//       title: "Sanitized & Inspected",
//       description:
//         "All equipment is professionally cleaned and thoroughly inspected before each rental.",
//     },
//   ],
// };

export const ElectricBeds: FC = () => {
  return (
    <div id="electric-beds" className={styles.anchor}>
      {/* <ImageShowcase
        title={electricBedData.title}
        description={electricBedData.description}
        images={electricBedData.images}
        features={electricBedData.features}
        benefits={electricBedData.benefits}
        ctaText="Request a Quote"
        ctaHref="#contact"
      /> */}
    </div>
  );
};
