import styled from "styled-components";

const AboutSectionWrapper = styled.div`
  padding: 100px 0;
  position: relative;
  .text-upper{
    text-transform: uppercase;
  }
  p{
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }
  h1{
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
  }
  
  .production-info{
    p.production-info-title{
      color: ${props => props.theme.primaryColor};
      font-size: 16px;
      line-height: 16px;
      font-weight: 700;
    }
    p{
      font-size: 16px;
      line-height: 28px;
      color: #777E90;
    }
    h1{
     
      line-height: 1.5em;
      color: #fff;
    }
  }

  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    background: rgba(0,0,0,.7);
    iframe{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    button{
     svg{
      font-size: 25px;
      position: absolute;
      top: 20px;
      right: 20px;
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(43deg) brightness(105%) contrast(101%);
     }
    }
  }

  .production-img{
    img{
      border-radius: 5px;
    }

    button{
      position: absolute;
        top: 19%;
        left: 55%;
        transform: translate(-50%, -50%);
      .play-btn {
        width: 50px;
        height: 50px;
        background: radial-gradient( rgba(255, 0, 128, 0.8) 60%, rgba(255, 255, 255, 1) 62%);
        border-radius: 50%;
        position: relative;
        display: block;
        margin: 100px auto;
        box-shadow: 0px 0px 25px 3px rgba(255, 0, 128, 0.8);
        &::after{
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translateX(-40%) translateY(-50%);
          transform: translateX(-40%) translateY(-50%);
          transform-origin: center center;
          width: 0;
          height: 0;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 25px solid #fff;
          z-index: 100;
          -webkit-transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
          transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        &::before{
          content: "";
          position: absolute;
          width: 180%;
          height: 180%;
          -webkit-animation-delay: 0s;
          animation-delay: 0s;
          -webkit-animation: pulsate1 2s;
          animation: pulsate1 2s;
          -webkit-animation-direction: forwards;
          animation-direction: forwards;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          -webkit-animation-timing-function: steps;
          animation-timing-function: steps;
          opacity: 1;
          border-radius: 50%;
          border: 5px solid rgba(255, 255, 255, .75);
          top: -40%;
          left: -40%;
          background: rgba(198, 16, 0, 0);
        }
      }
    }
  }

  


  .row{
    align-items: center;
    justify-content: space-between;
  }

  @-webkit-keyframes pulsate1 {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
    box-shadow: none;

  }
}

@keyframes pulsate1 {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1);
    opacity: 0;
    box-shadow: none;

  }
}

@media only screen and (max-width: 991px){
    .production-img{
      button{
        top: 0%;   
      }
    }
  }

  @media only screen and (max-width: 768px){
    .production-img{
      img{
        width: 100%!important;
        height: 100%!important;
        margin-left: 0!important;
      }

      button{
        top: 23%;
        left: 50%;
      }
    }
  }

  @media only screen and (max-width: 767px){
    .production-img{
      button{
        top: 23%;
      }
    }
  }

  @media only screen and (max-width: 376px){
    .production-img{
      button{
        top: -5%;
      }
    }
  }
`;

export default AboutSectionWrapper;