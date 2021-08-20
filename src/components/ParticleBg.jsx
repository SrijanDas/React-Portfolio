import styled from "styled-components";
import React from "react";
import Particles from "react-particles-js";
import { particlesConfig2 } from "../config/particle-config";

const ParticleStyles = styled.div`
  width: 100%;
  height: 100%;
  #tsparticles {
    width: 100%;
    height: 100% !important;
  }
`;

export default function ParticleBg() {
  return (
    <ParticleStyles>
      <Particles params={particlesConfig2} />
    </ParticleStyles>
  );
}
