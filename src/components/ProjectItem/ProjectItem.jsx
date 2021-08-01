import React from "react";
import ProjectImg from "../../assets/images/projectImg.png";
import { ProjectItemStyles, ChipStyle } from "./ProjectItemStyles";
import Chip from "@material-ui/core/Chip";

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  tags = [],
}) {
  return (
    <ProjectItemStyles>
      <div className="projectItem__img">
        <img src={img} alt="project img" />
      </div>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>
        <p className="projectItem__desc">{desc}</p>
        <br />
        <ChipStyle>
          {tags.map((tag) => (
            <Chip label={tag} className="projectItem__chip" />
          ))}
        </ChipStyle>
      </div>
    </ProjectItemStyles>
  );
}
