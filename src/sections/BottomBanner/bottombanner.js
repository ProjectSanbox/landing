import styled from "styled-components";
import banner from "assets/images/bottombanner/bannerBottom.jpg";

const BottomBannerWrapper = styled.div`
  height: 500px;
  position: relative;
  .bottomBanner {
    height: 100%;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(0.7);
  }

  p {
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }

  .bottomBanner-content {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .bottomBanner-heading {
      font-size: 35px;
      color: #ffffff;
      font-weight: 700;
    }

    button {
      color: #ffffff;
      background: rgb(108, 237, 120);
      background: linear-gradient(
        360deg,
        rgba(108, 237, 120, 1) 0%,
        rgba(53, 223, 177, 1) 35%
      );
      border: 0;
      height: 40px;
      border-radius: 20px;
      &:hover {
        border: 1px solid ${(props) => props.theme.primaryColor};
        background: transparent;
        color: ${(props) => props.theme.primaryColor};
      }
    }
  }
  @media only screen and (max-width: 1300px) {
    .bottomBanner {
      background-position-x: 20%;
    }
  }

  @media only screen and (max-width: 1000px) {
    .bottomBanner {
      background-position-x: 40%;
    }
  }

  @media only screen and (max-width: 457px) {
    .bottomBanner-content {
      .bottomBanner-heading {
        line-height: 40px;
      }
    }
  }
`;

export default BottomBannerWrapper;
