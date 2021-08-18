import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import ProjectItem from "../ProjectItem/ProjectItem";
import SectionTitle from "../SectionTitle";
import "swiper/swiper-bundle.min.css";
import projects from "../../assets/data/projects";
import ProjectSectionStyle from "./ProjectSectionStyle";
import StyledButton from "../StyledButton";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function ProjectsSection() {
  // console.log(projects);
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <div className="projects__seeAllProjectsBtn">
          <StyledButton
            btnLink="/projects"
            btnText="See all projects"
            outline
          />
        </div>
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem item={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
