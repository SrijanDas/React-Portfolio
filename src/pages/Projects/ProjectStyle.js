import styled from "styled-components";

const ProjectStyle = styled.div`
  padding: 10rem 0;
  padding-bottom: 0;
  .container {
    margin-bottom: 5rem;
  }
  .projects-wrapper {
    margin-top: 5rem;
  }
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    gap: 5rem;
    margin-top: 3rem;
  }
  .projects__searchBar {
    position: relative;
    width: 80%;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  .projects_noResults {
    font-size: 2rem;
    margin-top: 2rem;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default ProjectStyle;
