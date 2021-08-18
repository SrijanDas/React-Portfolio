import React from "react";
import HeroStyles from "./HeroSectionStyle";
import HeroImg from "../../assets/images/hero.jpg";
import SocialMediaArrow from "../../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../../assets/images/scroll-down-arrow.svg";
import PText from "../PText";
import StyledButton from "../StyledButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="container">
        <div className="hero">
          <div className="hero__left">
            <h1 className="hero__heading">
              <span>Hello, This is</span>
              <span className="hero__name">Srijan Das</span>
            </h1>
            <PText className="hero_subText">
              Web developer and aspiring data scientist. <br />I love to design
              and make new projects for the people.
            </PText>
            <StyledButton
              className="hero_btn"
              btnLink="/projects"
              btnText="see my projects"
            />
          </div>
          <div className="hero__right">
            <img src={HeroImg} alt="" />
          </div>

          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/SrijanDas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Srijan_1805"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/srijan-das-3591791b3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
