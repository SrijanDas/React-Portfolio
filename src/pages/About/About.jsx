import React from "react";
import AboutPageStyles from "./AboutPageStyles";
import PText from "../../components/PText";
import AboutInfoItem from "../../components/AboutInfoItem/AboutInfoItem";
import AboutImg from "../../assets/images/my-image.jpg";
import ContactBanner from "../../components/ContactBanner";
import StyledButton from "../../components/StyledButton";

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Srijan Das</span>
              </p>
              {/* <h2 className="about__heading">A freelance Web developer</h2> */}
              <div className="about__info">
                <PText>
                  I am a full stack developer.
                  <br /> <br />
                  I started coding in 2019. Coding is also an art for me. I love
                  it. I find it really interesting and I enjoy the process a
                  lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <StyledButton btnText="see my projects" btnLink="projects" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={["Howrah Vivekananda Institution, Howrah"]}
              />
              <AboutInfoItem
                title="Collage"
                items={[
                  "Future Institute of Engineering & Management, Kolkata",
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "JQuery",
                  "REACT",
                  "Tailwind-css",
                  "Material-UI",
                  "Bootstrap",
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={["Nodejs", "Express", "Django", "Flask"]}
              />
              <AboutInfoItem title="Database" items={["MongoDb", "MySql"]} />
              <AboutInfoItem
                title="Machine Learning"
                items={[
                  "Numpy",
                  "Pandas",
                  "Matplotlib",
                  "Seaborn",
                  "Sklearn",
                  "Keras",
                  "Tensorflow",
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="Jun 2021 - Aug 2021"
                items={[
                  "JavaScript developer at Tan Man Foundation, Bangalore",
                ]}
              />
              <AboutInfoItem
                title="Nov 2020 - Jan 2021"
                items={["Data Science Intern at Ardent Computech, Kolkata"]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
