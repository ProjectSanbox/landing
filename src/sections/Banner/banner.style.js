import styled from "styled-components";
import headerBackground from "assets/images/banner/banner.webp";

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
    height: 120vh;
    .headingBackground {
      background-image: url(${headerBackground});
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
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
          font-size: 45px;
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
            margin:10px;
            background: ${(props) => props.theme.primaryColor};
            position: relative;
            border: 0;
            overflow: hidden;
            border-radius: unset;
            box-shadow: 0px 0px 12px rgba(40, 33, 108, 0.7);
            span{
              a{
                color: #000000;
                font-weight: 700;
                font-size: 26px;
              }
            }

            &:hover {
              border: 2px solid ${(props) => props.theme.primaryColor};
              box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
              animation: pulse 1s;
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
