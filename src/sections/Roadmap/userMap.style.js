import styled from "styled-components";
import background from 'assets/images/backgroundroadmap.svg';

const UserMapWrapper = styled.div`
  padding: 80px 0;
  position: relative;
  border-bottom: 1px dashed #353945;
  
  .roadmap-background{
    width: 578.54px;
    height: 884.87px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${background});
  }

  h1{
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
  }

  p{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  .roadmap-heading{
    text-align: center;
    h1{
      font-size: 64px;
      line-height: 64px;
      color: #ffffff;
      letter-spacing: -2%;
    }
  }

  .roadmap-item{
    .roadmap-box{
      display: flex;
      img{
        width: 146px;
        margin: auto;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        position: relative;
        &::after{
          content: "";
          
          background: black;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateY(-50%);
        }
      }

      .roadmap-work{
        width: 339px;
        padding: 30px;
        background: transparent;
        border: 1px solid #2B50D5;
        border-radius: 16px;
        margin-bottom: 30px;
        p{
          margin: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 579px){
    .roadmap-background{
      width: 260px;
      height: 380px;
      position: absolute;
      background-size: cover;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media only screen and (max-width: 480px){
    padding: 30px 0px 0px 0px;
      .roadmap-heading{
        text-align: center;
      h1{
        font-size: 49px;
        line-height: 49px;
      }
    }
  }

`;

export default UserMapWrapper;
