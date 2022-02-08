import styled from "styled-components";
import headerBackground from "assets/images/banner/banner.jpg";

const BannerWrapper = styled.div`
  background: transparent;
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
          107.56deg,
          rgba(27, 24, 38, 0.9) 15.48%,
          rgba(27, 24, 38, 0) 72.61%
        );
      }

      .heading-content {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        h1 {
          font-size: 2.5em;
          line-height: 60px;
          margin: 0;
          margin-bottom: 10px;
          text-transform: none;
          color: #ffffff;
          padding: 0;
          position: relative;
          max-width: 800px;
          &.heading-sm {
            font-size: 32px;
            color: ${(props) => props.theme.primaryColor};
            font-weight: 400;
            font-family: "SFUEurostileNormal", sans-serif;
            text-transform: none;
          }
          span {
            position: relative;
            display: inline-block;
          }
        }
        .register {
          display: flex;
          align-items: center;
          margin-top: 49px;

          button {
            width: 270px;
            height: 56px;
            padding: 0;
            margin: 10px 30px 10px 0;
            border-radius: 5px;
            background: rgb(255,182,63);
            background: linear-gradient(309deg,rgba(255,182,63,1) 0%,rgba(255,224,27,1) 59%);
            position: relative;
            overflow: hidden;
            box-shadow: 0px 0px 12px rgba(40, 33, 108, 0.7);
            transition: transform 0.2s ease-out;

            &.download {
              background: linear-gradient(309deg,rgb(170 255 124) 0%,rgb(83 251 181) 59%);
            }
            
            span{
              a{
                display: flex;
                justify-content: center;
                align-contents: center;
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
