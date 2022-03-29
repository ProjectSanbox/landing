import styled from "styled-components"
import headerBackground from "assets/images/banner/banner.jpg"
import btnBackgound from '../../assets/images/btn/Btn2-md.png'

const BannerWrapper = styled.div`
  background: transparent;

  @font-face {
    font-family: "Normandia";
    src: local("Normandia"),
         url("../../assets/fonts/Normandia/Normandia.ttf") format("ttf");
  }

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

  p {
    color: #ffffff;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
  div.heading {
    width: 100%;
    height: 100vh;
    .headingBackground {
      background-image: url(${headerBackground});
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: right bottom;
      position: relative;
      .container {
        width: 100%;
        height: 100%;
        z-index: 2;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          180deg,
          #000000 12.45%,
          rgba(0, 0, 0, 0) 100%
        );
      }

      .heading-content {
        position: absolute;
        top: 42%; 
        left: 50%;
        transform: translate(-50%, -50%); 
        text-align: center;
        
        h1 {
          font-size: 57.55px;
          line-height: 28.27px;
          text-transform: none;
          color: #7D7D7D;
          position: relative;
          max-width: 800px;
          font-family: "Normandia";
          &.heading-lg {
            font-size: 75.14px;
            line-height: 15.82px;
            color: ${(props) => props.theme.primaryColor};
            font-weight: 400;
            text-transform: none;
            width: max-content;
          }
        }
        span{
          font-family: 'Open Sans', sans-serif;
          font-weight: 700;
          color: rgba(125, 125, 125, 1);
          text-transform: uppercase;
        }
        .register {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 32px;

          button {
            width: 213px;
            height: 67px;
            background: url(${btnBackgound});
            padding: 0;
            margin: 10px 30px 10px 0;
            position: relative;
            overflow: hidden;
            box-shadow: 0px 0px 12px rgba(40, 33, 108, 0.7);
            transition: transform 0.2s ease-out;
            
            span{
              a{
                display: flex;
                justify-content: center;
                align-content: center;
                color: #000000;
                font-weight: 700;
                font-size: 26px;
                line-height: 1em;
              }
            }

            &:hover {
                transform: scale(1.1);
            }

            @keyframes pulse {
              0% {
                box-shadow: 0 0 0 0 ${(props) => props.theme.primaryColor};
              }
            }

            span {
              position: relative;
              z-index: 1;
              font-size: 20px;
              font-weight: 700;
            }

            img {
              position: absolute;
              width: unset;
              top: 0;
              right: 0;
              left: 0;
              bottom: 0;
              margin: auto;
            }
          }
        }
      }
    }
  }


  @media only screen and (max-width: 992px) {
    div.heading {
      .headingBackground {
        background-position: right;
        .heading-content {
          h1 {
            font-size: 40px;
            &.heading-sm {
              font-size: 28px;
            }
          }

          .register {
            button {
              width: 200px;
              span {
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 576px) {
    div.heading {
      .headingBackground {
        .heading-content {
          h1 {
            font-size: 30px;
            line-height: 40px;
            &.heading-sm {
              font-size: 18px;
            }
          }

          .register {
            button {
              width: 200px;
              span {
              }
            }
          }
        }
      }
    }
  }
`;

export default BannerWrapper;
