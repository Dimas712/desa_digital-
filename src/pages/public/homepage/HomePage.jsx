import { useEffect } from "react";
import AboutSection from "./section/about.section";
import HeroSection from "./section/hero.section";
import StepSection from "./section/step.section";

function HomePage() {
  return (
    <div className="flex flex-col container max-w-screen-xl overflow-hidden md:overflow-visible">
      <HeroSection />
      <StepSection />
      <AboutSection />
    </div>
  );
}

export default HomePage