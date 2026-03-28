import { FC } from "react";
import { HeroSection } from "@/widgets/HeroSection";
import { AdvantagesSection } from "@/widgets/Advantages";
import { ServicesSection } from "@/widgets/Services";
// import { TestimonialsSection } from "@/widgets/Testimonials";

export const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      {/* <TestimonialsSection /> */}
    </>
  );
};
