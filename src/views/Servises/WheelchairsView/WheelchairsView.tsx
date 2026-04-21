import { FC } from "react";
import { ImageShowcase, type Feature } from "@/widgets/ImageShowcase";
import styles from "./WheelchairsView.module.scss";

const wheelchairsData = {
  title: "Аренда инвалидных кресел",
  description:
    "Аренда инвалидного кресла — удобное решение для людей с ограниченной мобильностью. Кресла подходят для восстановления после травм и операций, для пожилых людей, а также для временного использования. Мы предлагаем надежные и комфортные инвалидные коляски с доставкой на дом. Кресла легко управляются, складываются для транспортировки и обеспечивают безопасность и удобство при ежедневном использовании.",
  images: [
    "/images/wheelchair/3.2.png",
    "/images/wheelchair/3.3.jpeg",
    "/images/wheelchair/3.4.png",
  ],
  features: [
    {
      icon: "accessibility",
      label: "Подходит для людей с ограниченной мобильностью",
    },
    { icon: "move", label: "Легкое передвижение и маневренность" },
    { icon: "navigation", label: "Удобное управление" },
    { icon: "package", label: "Складная конструкция для транспортировки" },
    { icon: "shield", label: "Надежная и устойчивая рама" },
    { icon: "truck", label: "Быстрая доставка на дом" },
  ] satisfies Feature[],
  benefits: [
    {
      title: "Комфорт при ежедневном использовании",
      description:
        "Кресла обеспечивают удобную посадку и поддержку, что важно при длительном использовании.",
    },
    {
      title: "Легкость транспортировки",
      description:
        "Складная конструкция позволяет без труда перевозить кресло в автомобиле.",
    },
    {
      title: "Подходит для разных задач",
      description:
        "Используется дома, на улице, в медицинских учреждениях и в период реабилитации.",
    },
    {
      title: "Гигиена и безопасность",
      description:
        "Все кресла проходят тщательную дезинфекцию и проверку перед каждой арендой.",
    },
  ],
};

export const WheelchairsView: FC = () => {
  return (
    <div id="electric-beds" className={styles.anchor}>
      <ImageShowcase
        title={wheelchairsData.title}
        description={wheelchairsData.description}
        images={wheelchairsData.images}
        features={wheelchairsData.features}
        benefits={wheelchairsData.benefits}
        ctaText="Оставить заявку"
        ctaHref="/#contact"
      />
    </div>
  );
};
