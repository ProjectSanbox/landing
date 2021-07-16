import styled from "styled-components";
import footerBg from "assets/images/footer-bg.png";

const FooterWrapper = styled.div`
  background: #17181C;
h1{
    font-size: 24px;
    line-height: 32px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  p{
    color: #777E90;
    font-family: 'Poppins', sans-serif;
  }

  a{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  .footer-heading{
    height: 128px;
    text-align: center;
    border-bottom: 1px dashed #353945;
    margin-bottom: 20px;
    position: relative;
    .footer-heading-content{
      display: flex;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img{
        width: 129px;
        margin-right: 20px;
      }
      p{
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 0;
        color: #777E90;

      }
    }
  }

  .footer-main-content{
    padding-bottom: 45px;
    border-bottom: 1px dashed #353945;
      ul{
        li{
          line-height: 20px;
          margin-bottom: 10px;
          a{
            color: #777E90;
            margin-bottom: 5px;
            font-size: 12px;
            line-height: 20px;
            &.upper{
              text-transform: uppercase;
            }
            svg{
              width: 16px;
              color: #FCFCFD;
              margin-right: 3px;
            }
          }
        }
      }
      li{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: #777E90;
        font-size: 12px;
        line-height: 20px;
        list-style: none;
        &:nth-child(2){
         a{
            svg{
              margin-right: 7px;
            }
          }
        }
      }

    form{
      .footer-input{
          width: 100%;
          height: 43px;
          border: 2px solid #ACA7ED;
          border-radius: 90px;
          margin-top: 30px;
          position: relative;
          right: 5px;
          input{
          outline: none;
          background: transparent;
          width: 270px;
          height: 20px;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          color: #777E90;
          font-size: 14px;
            &::placeholder{
              color: #777E90;
            }
          }
          button{
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: ${props => props.theme.primaryColor};
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            svg{
              filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(43deg) brightness(105%) contrast(101%);
              width: 14px;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
            &:hover{
              background: #FCFCFD;
              svg{
                filter: invert(65%) sepia(94%) saturate(340%) hue-rotate(110deg) brightness(99%) contrast(85%);
              }
            }
          }
        }
      }
    }

    .footer-introduce{
      padding: 32px 0px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      line-height: 20px;
      color: #ACA7ED;
      p{
        margin-bottom: 0;
      }
    .footer-introduce-service{
        display: flex;
        a{
          margin-left: 10px;
          color: ${props => props.theme.primaryColor}!important;
        }
      }
    }

    @media only screen and (max-width: 992px){
      .footer-heading{
        .footer-heading-content{
          display: block;
          text-align: center;
          img{
            margin: auto
          }
        }
      }
    }

    @media only screen and (max-width: 480px){
    .footer-heading{
      .footer-heading-content{
        img{
          width: 94px;
        }
        p{
          font-size: 13px;
          line-height: 25px;
          margin-bottom: 0;
          color: #777E90;

        }
      }
    }

    .footer-introduce{
      font-size: 10px;
    }
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 568px) {
    max-width: 100%;
  }
  @media (min-width: 576px) {
    max-width: 95%;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  
  &.fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

`;

export default FooterWrapper;
