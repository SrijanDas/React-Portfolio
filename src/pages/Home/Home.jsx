import React from "react";
import AboutSection from "../../components/AboutSection/AboutSection";
import HeroSection from "../../components/HeroSection/HeroSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner /> */}
    </div>
  );
}
