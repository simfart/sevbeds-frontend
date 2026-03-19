import React, { FC } from "react";
import styles from "./HomePage.module.scss";
import { HeroSection } from "@/widgets/HeroSection";
import { ServicesSection } from "@/widgets/Services";
import { AdvantagesSection } from "@/widgets/Advantages";
import { HowItWorksSection } from "@/widgets/HowItWorks";
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
