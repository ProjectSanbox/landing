import styled from "styled-components";
import background from "assets/images/roadmap/background.png";

const UserMapWrapper = styled.div`
  position: relative;
  .usermap-wrapper {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 135px 0px;
    img {
      position: relative;
      z-index: 2;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
  }

  .roadmap-heading {
    width: 100%;
    text-align: center;
    z-index: 2;
    position: relative;
  }

  .roadmap-content{
    .character{
      position: absolute;
      top: 0;
      left: 0;
      width: 37.5%;
      z-index: 0;
    }

    .roadmap{
      width: 89%;
      z-index: 2;
      margin-left: auto;
    }
  }

  @media only screen and (max-width: 576px) {
    padding: 60px 0;
  }
`;

export default UserMapWrapper;
