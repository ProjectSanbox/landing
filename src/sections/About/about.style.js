import styled from "styled-components";
import about_background from "assets/images/about/about-background.webp";
import thumbnailvideo from "assets/images/about/thumbnailvideo.webp";
import background from "assets/images/background.webp";

const AboutWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  .about-content {
    text-align: center;
    .screen {
      display: none;
    }
  }

  .about-video {
    width: 68.333%;
    margin: 45px auto 0px;
    z-index: 2;
    position: relative;
    .plyr__poster {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  .about-background {
    background-image: url(${about_background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 38.42%;
    height: 70vh;
    position: absolute;
    right: 0;
    bottom: -150px;
    z-index: 0;
  }

  @media only screen and (max-width: 992px) {
    .hide {
      display: none;
    }

    .about-content {
      .screen {
        display: block;
      }
    }

    .about-background {
      height: 40vh;
      width: 40%;
      bottom: -60px;
    }
  }

  @media only screen and (max-width: 576px) {
    .about-video {
      width: 100%;
    }
  }
`;

export default AboutWrapper;
