import { FC } from "react";
import { ImageShowcase, type Feature } from "@/widgets/ImageShowcase";
import styles from "./ManualBeds.module.scss";

const manualBedData = {
  title: "Аренда механических медицинских кроватей",
  description:
    "Аренда механических медицинских кроватей, например таких, как MET TARYS — практичное и доступное решение для ухода за лежачими пациентами. Четырехсекционная конструкция с независимыми винтовыми регулировками позволяет изменять положение спинки и ног, обеспечивая терапевтическое положение «кардио-кресло» и удобное сидячее положение. Кровать оснащена складными боковыми ограждениями, туалетным устройством и безопасна для пациента. Стильный домашний дизайн делает кровать удобной и комфортной для использования дома или в реабилитационном центре.",
  images: [
    "/images/manual/2.1.png",
    "/images/manual/2.2.png",
    "/images/manual/2.3.png",
    "/images/manual/2.4.png",
    "/images/manual/2.5.png",
  ],
  features: [
    { icon: "settings", label: "Механическая регулировка положения секций" },
    { icon: "armchair", label: "Положение «кардио-кресло»" },
    { icon: "shield", label: "Складные боковые ограждения с фиксаторами" },
    { icon: "rotate", label: "Функция переворота пациента" },
    { icon: "check", label: "Встроенное туалетное устройство" },
    { icon: "arrows", label: "Положение Фаулера" },
  ] satisfies Feature[],
  benefits: [
    {
      title: "Простая и надежная конструкция",
      description:
        "Четырехсекционная кровать с винтовыми регулировками обеспечивает долговечность и надежность в эксплуатации.",
    },
    {
      title: "Терапевтические положения",
      description:
        "Позволяет принимать кардио-кресло и сидячее положение, облегчая уход и процедуры для пациента.",
    },
    {
      title: "Безопасность пациента",
      description:
        "Складные боковые ограждения с фиксаторами предотвращают падения и травмы.",
    },
    {
      title: "Удобство эксплуатации",
      description:
        "Встроенное туалетное устройство облегчает уход и снижает физическую нагрузку для ухаживающих.",
    },
  ],
};

export const ManualBeds: FC = () => {
  return (
    <div id="electric-beds" className={styles.anchor}>
      <ImageShowcase
        title={manualBedData.title}
        description={manualBedData.description}
        images={manualBedData.images}
        features={manualBedData.features}
        benefits={manualBedData.benefits}
        ctaText="Оставить заявку"
        ctaHref="/#contact"
      />
    </div>
  );
};
