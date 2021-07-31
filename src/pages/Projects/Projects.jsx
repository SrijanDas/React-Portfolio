import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import SectionTitle from "../../components/SectionTitle";
import ProjectsInfo from "../../assets/data/projects";
import ProjectStyle from "./ProjectStyle";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

export default function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  useEffect(() => {
    if (searchText === "") {
      setProjectsData(ProjectsInfo);
    }
    setProjectsData(() =>
      ProjectsInfo.filter(
        (item) =>
          item.name.toLowerCase().match(searchText.toLowerCase()) ||
          item.desc.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="some of my recent works"
          />
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}
