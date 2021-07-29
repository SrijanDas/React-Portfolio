import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import ContactBanner from "../../components/ContactBanner";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <ProjectsSection /> */}
      {/* <TestimonialsSection /> */}
      <ContactBanner />
    </div>
  );
}
