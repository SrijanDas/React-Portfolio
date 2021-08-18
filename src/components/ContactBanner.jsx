import React from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import PText from "./PText";

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  margin-bottom: 15rem;
  .contactBanner__wrapper {
    background-color: rgb(30, 30, 30, 0.5);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in mind</PText>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <StyledButton btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
