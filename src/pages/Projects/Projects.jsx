import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import SectionTitle from "../../components/SectionTitle";
import ProjectsInfo from "../../assets/data/projects";
import ProjectStyle from "./ProjectStyle";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

export default function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  const [isSearching, setIsSearching] = useState(false);
  const webdevProjects = ProjectsInfo.filter(
    (item) => item.category === "webdev"
  );

  const mlProjects = ProjectsInfo.filter((item) => item.category === "ml");

  useEffect(() => {
    if (searchText === "") {
      setProjectsData(ProjectsInfo);
      setIsSearching(false);
    } else {
      setIsSearching(true);
      setProjectsData(() =>
        ProjectsInfo.filter(
          (item) =>
            item.name.toLowerCase().match(searchText.toLowerCase()) ||
            item.desc.toLowerCase().match(searchText.toLowerCase()) ||
            item.tags.toString().toLowerCase().match(searchText.toLowerCase())
        )
      );
    }
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  function ProjectsInfoComponent() {
    return (
      <>
        <SectionTitle heading="Webdev" subheading="" />
        {webdevProjects.map((item) => (
          <ProjectItem
            key={item.id}
            title={item.name}
            desc={item.desc}
            img={item.img}
            tags={item.tags}
          />
        ))}
        <SectionTitle heading="Machine Learning" subheading="" />
        {mlProjects.map((item) => (
          <ProjectItem
            key={item.id}
            title={item.name}
            desc={item.desc}
            img={item.img}
            tags={item.tags}
          />
        ))}
      </>
    );
  }

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
                placeholder="Search for a project"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems">
            {isSearching ? (
              projectsData.map((item) => (
                <ProjectItem
                  key={item.id}
                  title={item.name}
                  desc={item.desc}
                  img={item.img}
                  tags={item.tags}
                />
              ))
            ) : (
              <ProjectsInfoComponent />
            )}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}
