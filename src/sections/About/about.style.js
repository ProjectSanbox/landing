import styled from "styled-components";
import about_background from 'assets/images/about/about-background.png';
import thumbnailVideo from 'assets/images/about/thumbnailvideo.jpg'


const AboutWrapper = styled.div`
  width: 100%;
  padding: 100px 0px 20px 0px;
  position: relative;
  .about-content{
    text-align: center;
    .screen{
      display: none;
    }
  }

  .about-video{
    width: 68.333%;
    margin: 45px auto;
    .plyr__poster{
      ${thumbnailVideo && 
          `background-image: url(${thumbnailVideo})!important;`
      }
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  .about-background{
    background-image: url(${about_background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 38.42%;
    height: 50vh;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  @media only screen and (max-width: 992px){
    .hide{
      display: none;
    }

    .about-content{
      .screen{
        display: block;
      }
    }
  }

  @media only screen and (max-width: 576px){
    .about-video{
      width: 100%;
    }
  }
`;

export default AboutWrapper;