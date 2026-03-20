import { FC } from "react";
import { HeroSection } from "@/widgets/HeroSection";
import { ServicesSection } from "@/widgets/Services";
import { AdvantagesSection } from "@/widgets/Advantages";
import { PopularModelsSection } from "@/widgets/PopularModels";

export const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <PopularModelsSection />
    </>
  );
};
