import styled from "styled-components";
import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../config/particle-config";

const ParticleStyles = styled.div`
  z-index: -100;
  position: absolute;
  width: 100%;
  height: 100vh;
`;

export default function ParticleBg(props) {
  return (
    <ParticleStyles>
      <Particles params={particlesConfig}></Particles>;
    </ParticleStyles>
  );
}
