import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 80px 0px;
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

  .footer-heading-content{
    text-align: center;
    margin-bottom: 40px;
    img{
      width: 300px;
      margin: auto
    }
  }

  .footer-list{
    .footer-title{
      font-size: 16px;
      color: ${props => props.theme.primaryColor};
      text-transform: uppercase;
      font-weight: 700;
    }

    .comnunity{
      display: flex;
      justify-content: space-between;
    }

    ul{
      margin-bottom: 40px;
      li{
        font-size: 14px;
        color: #ffffff;
        text-transform: capitalize;
        margin-bottom: 18px;
        a{
          transition: 0.3s;
          &:hover{
            padding-left: 5px;
            color: ${props => props.theme.primaryColor};
          }
        }
      }
    }

    ul.footer-link{
      li{
        text-transform: capitalize;
        img{
          width: 24px;
          height: 24px;
          margin-right: 8px;
        }
        a{
          display: flex;
          align-items: center;
          display: block;
           display: flex;
          svg{
            margin-right: 10px;
          }
        }
      }
    }
  }

  .copyright{
    text-align: center;
  }

  @media only screen and (max-width: 992px){

    .hide{
      display: none;
    }

    .copyright{
      display: block;
      text-align: center;
    }

    .footer-list{
      text-align: center;  
      .comnunity{
          justify-content: center;
          ul{
            &:not(:last-child){
              margin-right: 40px;
            }
          }
        }
    }
  }
`;

export default FooterWrapper;
