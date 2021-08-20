import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import ContactBanner from "../../components/ContactBanner";
import HeroSection from "../../components/HeroSection/HeroSection";
import ParticleBg from "../../components/ParticleBg";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import HomeStyle from "./HomeStyle";
export default function Home() {
  return (
    <HomeStyle>
      <ParticleBg />
      <HeroSection />
      <ParticleBg />
      <AboutSection />
      <ParticleBg />
      <ServicesSection />
      <ParticleBg />
      <ProjectsSection />
      <ParticleBg />
      <ContactBanner />
    </HomeStyle>
  );
}
