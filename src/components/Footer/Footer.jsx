import React from "react";
import FooterCol from "./FooterCol";
import PText from "../PText";
import FooterStyle from "./FooterStyle";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Srijan Das</h1>
          <PText>
            A web developer and
            <br />
            aspiring data scientist.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "About",
                path: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                path: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                path: "/contact",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+919836262393",
                path: "tel:+919836262393",
              },
              {
                title: "srijandas18.sd@gmail.com",
                path: "mailto:srijandas18.sd@gmail.com",
              },
              {
                title: "Howrah, West Bengal, India",
                path: "#",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                startIcon: <GitHubIcon fontSize="large" />,
                title: "Github",
                path: "https://github.com/SrijanDas",
              },
              {
                startIcon: <LinkedInIcon fontSize="large" />,
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/srijan-das-3591791b3",
              },
              {
                startIcon: <TwitterIcon fontSize="large" />,
                title: "Twitter",
                path: "https://twitter.com/Srijan_1805",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Srijan Das</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
