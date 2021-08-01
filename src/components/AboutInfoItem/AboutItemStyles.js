import styled from "styled-components";

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;
  .title {
    font-size: 2.4rem;
    flex: 1;
    word-wrap: break-word;
  }
  .items {
    flex: 4;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;
export default AboutItemStyles;
