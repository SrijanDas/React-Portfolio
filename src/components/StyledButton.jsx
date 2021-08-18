import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ButtonStyle = styled.div`
  button {
    border: 2px solid var(--gray-1);
    /* min-width: 20rem; */
    /* width: 100%; */
    height: 4rem;
    font-size: 1.5rem;
    text-transform: inherit;
    span {
      color: ${(props) => (props.outline ? "var(--gray-1)" : "black")};
    }
  }
`;

export default function StyledButton({
  btnText = "Button",
  btnLink = "/",
  outline = false,
  externalLink = false,
}) {
  const history = useHistory();
  const routChange = () => {
    if (externalLink) window.open(btnLink, "_blank");
    else history.push(btnLink);
  };
  return (
    <ButtonStyle outline={outline}>
      <Button onClick={routChange} variant={outline ? "outlined" : "contained"}>
        {btnText}
      </Button>
    </ButtonStyle>
  );
}
