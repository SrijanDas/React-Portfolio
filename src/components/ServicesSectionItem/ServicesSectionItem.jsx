import React from "react";
import ComputerIcon from "@material-ui/icons/Computer";
import ItemStyles from "./ItemStyles";
import PText from "../PText";

export default function ServicesSectionItem({
  icon = <ComputerIcon />,
  title = "Web Design",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
