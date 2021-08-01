import styled from "styled-components";

export const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  .projectItem__btns {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 0.2rem;
    button {
      width: 100% !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;
export const ChipStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  .projectItem__chip {
    background-color: var(--gray-2);
  }
  span {
    font-size: 1.6rem;
  }
`;
