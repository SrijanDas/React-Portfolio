import React from "react";
import ComputerIcon from "@material-ui/icons/Computer";
import CodeIcon from "@material-ui/icons/Code";
import SectionTitle from "../SectionTitle";
import ServicesSectionItem from "../ServicesSectionItem/ServicesSectionItem";
import ServicesItemsStyles from "./ServicesItemsStyle";
import { GiBrain } from "react-icons/gi";

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<ComputerIcon fontSize="large" />}
            title="Web Design"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<CodeIcon />}
            title="Web Dev"
            desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<GiBrain />}
            title="Machine Learning"
            desc="I develop machine learning models to solve real world problems. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
