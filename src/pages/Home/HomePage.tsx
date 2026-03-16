import React, { FC } from "react";
import styles from "./HomePage.module.scss";
import { HeroSection } from "@/widgets/HeroSection/HeroSection";
import { ServicesSection } from "@/widgets/Services/Services";
import { AdvantagesSection } from "@/widgets/Advantages/Advantages";


export const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
    </>
  );
};
