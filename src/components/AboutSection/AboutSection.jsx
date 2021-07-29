import StyledButton from "../StyledButton";
import React from "react";
import PText from "../PText";
import AboutSectionStyle from "./AboutSectionStyle";
import SectionTitle from "../SectionTitle";
import AboutImg from "../../assets/images/about-section-image.png";

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
        <div className="aboutSection__right">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            I am a website designer, developer and machine learning engineer
            from West Bengal, India. I create professional websites and also
            analyze data and develop machine learning models to help businesses
            and organisations grow.
          </PText>
          <div className="aboutSection__buttons">
            <StyledButton btnLink="/projects" btnText="Works" />
            <StyledButton btnLink="/about" btnText="Reed More" outline />
          </div>
        </div>
      </div>
    </AboutSectionStyle>
  );
}
