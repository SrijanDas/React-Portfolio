import styled from "styled-components";

const HeroStyle = styled.div`
  .hero {
    margin-top: 8rem;
    background-color: #202125;
    display: flex;
    padding: 5rem 5rem 0rem 5rem;
    gap: 10rem;
    justify-content: space-around;
    align-items: center;
  }
  .hero_left {
    width: 50%;
  }
  .hero__heading {
    font-size: 2rem;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: "Montserrat SemiBold";
      font-size: 7rem;
      color: var(--white);
      margin-bottom: 2rem;
    }
  }

  .isFmvA {
    margin-bottom: 2rem;
  }

  .hero_btn {
    text-transform: lowercase;
    width: 20rem;
    height: 5rem;
    font-size: large;
  }
  /* .MuiButton-label {
    color: black !important;
  } */
  .hero__right {
    display: flex;
    justify-content: center;
    width: 50%;
    img {
      width: 100%;
      height: 550px;
      object-fit: cover;
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      /* width: 16px; */
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      /* min-height: 750px; */
      flex-direction: column;
      gap: 1rem;
    }
    .hero__heading {
      font-size: 1.4rem;

      .hero__name {
        font-size: 4.5rem;
      }
    }
    .isFmvA {
      margin-left: 0;
    }
    .hero__right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 3rem;
      img {
        width: 100%;
        height: 450px;
        object-fit: cover;
      }
    }

    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;
export default HeroStyle;
