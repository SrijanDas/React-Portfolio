import React from "react";
import ProjectImg from "../../assets/images/projectImg.png";
import { ProjectItemStyles, ChipStyle } from "./ProjectItemStyles";
import Chip from "@material-ui/core/Chip";
import StyledButton from "../../components/StyledButton";

export default function ProjectItem({
  item = {
    img: ProjectImg,
    name: "Project Name",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: [],
    code: "#",
    demo: "#",
  },
  showTags = false,
}) {
  const { img, name, desc, tags, demo, code } = item;
  return (
    <ProjectItemStyles>
      <div className="projectItem__img">
        <img src={img} alt="project img" />
      </div>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{name}</h3>
        <p className="projectItem__desc">{desc}</p>
        <br />
        {showTags ? (
          <ChipStyle>
            {tags.map((tag, index) => (
              <Chip label={tag} key={index} className="projectItem__chip" />
            ))}
          </ChipStyle>
        ) : null}
        <div className="projectItem__btns">
          <StyledButton externalLink btnLink={demo} btnText="Demo" />
          <StyledButton
            externalLink
            btnLink={code}
            btnText="Source Code"
            outline
          />
        </div>
      </div>
    </ProjectItemStyles>
  );
}
