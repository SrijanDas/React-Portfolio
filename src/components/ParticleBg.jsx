import styled from "styled-components";
import React from "react";
import Particles from "react-particles-js";
import { particlesConfig2 } from "../config/particle-config";

const ParticleStyles = styled.div`
  z-index: -100;
  position: absolute;
  width: 100%;
  height: 100vh;
`;

export default function ParticleBg() {
  return (
    <ParticleStyles>
      <Particles params={particlesConfig2} />
    </ParticleStyles>
  );
}
