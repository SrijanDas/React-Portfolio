import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import ContactBanner from "../../components/ContactBanner";
import HeroSection from "../../components/HeroSection/HeroSection";
import ParticleBg from "../../components/ParticleBg";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
export default function Home() {
  return (
    <div>
      <ParticleBg />
      <HeroSection />

      <ParticleBg />
      <AboutSection />

      <ParticleBg />
      <ServicesSection />

      <ParticleBg />
      <ProjectsSection />

      <ContactBanner />
    </div>
  );
}
