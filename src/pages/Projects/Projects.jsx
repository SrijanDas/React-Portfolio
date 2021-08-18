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
        <div className="projects-wrapper">
          <SectionTitle heading="Webdev" subheading="" />
          <div className="projects__allItems">
            {webdevProjects.map((item) => (
              <ProjectItem key={item.id} item={item} showTags horizontal />
            ))}
          </div>
        </div>
        <div className="projects-wrapper">
          <SectionTitle heading="Machine Learning" subheading="" />
          <div className="projects__allItems">
            {mlProjects.map((item) => (
              <ProjectItem key={item.id} item={item} showTags horizontal />
            ))}
          </div>
        </div>
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

          {isSearching ? (
            projectsData.length >= 1 ? (
              <div className="projects__allItems">
                <SectionTitle
                  heading=""
                  subheading={`${projectsData.length} results found`}
                />
                {projectsData.map((item) => (
                  <ProjectItem key={item.id} item={item} showTags horizontal />
                ))}
              </div>
            ) : (
              <div className="projects_noResults">
                <span> No results found!</span>
              </div>
            )
          ) : (
            <ProjectsInfoComponent />
          )}
        </div>
      </ProjectStyle>
    </>
  );
}
