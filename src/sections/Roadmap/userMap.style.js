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
    color: #ffffff;
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

  .roadmap-content{
    margin-top: 40px;
    margin-bottom: 60px;
    .roadmap-item{
      display: flex;
      left: 0;
      &.right{
        flex-direction: row-reverse;
      }
      div.item{
        width: 50%;
        text-align: right;
        &.right{
          text-align: left;
        }
        p{
        font-size: 25px;
        color: #ea8c01;
        }

        ul{
          li{
            color: #ffffff;
          }
        }
      }
      .roadmap-line{
        width: 8px;
        background: ${props => props.theme.primaryColor};
        position: relative;
        margin: 0 20px;
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
