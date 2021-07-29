import { Button } from "@material-ui/core";
import React from "react";
import PText from "../PText";
import AboutSectionStyle from "./AboutSectionStyle";
import SectionTitle from "../SectionTitle";
import AboutImg from "../../assets/images/about-sec-img.png";

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            I am a freelance website designer and developer from Chittagong,
            Bangladesh. I create professional websites. I love art and always
            try to show unique views to the audience through my design.
          </PText>
          <div className="aboutSection__buttons">
            <Button className="aboutSection__worksBtn" variant="contained">
              Works
            </Button>
            <Button className="aboutSection__readMoreBtn" variant="outlined">
              Read More
            </Button>
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
