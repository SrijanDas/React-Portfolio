import React from "react";
import FooterCol from "./FooterCol";
import PText from "../PText";
import FooterStyle from "./FooterStyle";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Srijan Das</h1>
          <PText>
            A self taught web designer,
            <br /> web developer and machine learning engineer. I always make
            websites that have unique designs and also has a good performance
            rate.
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
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: "Facebook",
                path: "http://facebook.com",
              },
              {
                title: "Twitter",
                path: "http://twitter.com",
              },
              {
                title: "Instagram",
                path: "http://instagram.com",
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
