import styled from "styled-components";
import background from 'assets/images/roadmap/background.jpg';

const UserMapWrapper = styled.div`
    position: relative;
  .usermap-wrapper{
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 73px 0px;
    img{
      position: relative;
      z-index: 2;
    }
  }

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
  }

  .roadmap-heading{
    width: 100%;
    text-align: center;
    z-index: 2;
    position: relative;
    h1{
      font-size: 48px;
      line-height: 48px;
    }
  }

  @media only screen and (max-width: 576px){
    padding: 60px 0;
  }
`;

export default UserMapWrapper;
