import styled from "styled-components";

export const ProjectItemStyles = styled.div`
  display: ${(props) => (props.horizontal ? "flex" : "block")};
  align-items: center;
  gap: 1rem;
  padding: 10px;
  height: ${(props) => (props.horizontal ? "32rem" : "auto")};

  .projectItem__img {
    width: ${(props) => (props.horizontal ? "30%" : "100%")};
    height: ${(props) => (props.horizontal ? "100%" : "200px")};
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: ${(props) => (props.horizontal ? "0" : "1rem")};
    width: ${(props) => (props.horizontal ? "70%" : "auto")};
    background-color: var(--deep-dark);
    padding: ${(props) => (props.horizontal ? "3rem" : "1rem")};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
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
    flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
    gap: 1rem;
    /* margin-top: 2rem; */
    margin-bottom: 0.2rem;
    button {
      width: 100% !important;
    }
  }
  @media only screen and (max-width: 600px) {
    display: block;
    height: auto;
    .projectItem__img {
      height: 250px;
      width: 100%;
    }
    .projectItem__info {
      margin-top: 1rem;
      height: auto;
      width: 100%;
      padding: 1.5rem;
    }
    .projectItem__title {
      font-size: 1.9rem;
    }
    .projectItem__desc {
      font-size: 1.3rem;
    }
    .projectItem__btns {
      margin-top: 0;
    }
  }
`;

export const ChipStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.2rem;
  .projectItem__chip {
    background-color: var(--gray-2);
  }
  span {
    font-size: 1.6rem;
  }
`;
