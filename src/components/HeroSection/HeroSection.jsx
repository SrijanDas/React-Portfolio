import React from "react";
import HeroStyles from "./HeroSectionStyle";
import HeroImg from "../../assets/images/hero.jpg";
import SocialMediaArrow from "../../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../../assets/images/scroll-down-arrow.svg";
import PText from "../PText";
import { Button } from "@material-ui/core";
export default function HeroSection() {
  return (
    <div className="container">
      <HeroStyles>
        <div className="hero">
          <div className="hero__left">
            <h1 className="hero__heading">
              <span>Hello, This is</span>
              <span className="hero__name">Srijan Das</span>
            </h1>
            <PText className="hero_subText">
              I am a self taught web designer, developer and machine learning
              engineer. I love to design and make new projects for the people.
            </PText>
            <Button
              className="hero_btn"
              variant="outlined"
              color="primary"
              size="large"
              disableElevation
            >
              see my works
            </Button>
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
                    href="http://facebook.com/webcifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/webcifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href="http://isntagram.com/web_cifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="http://webcifar.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
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
      </HeroStyles>
    </div>
  );
}
