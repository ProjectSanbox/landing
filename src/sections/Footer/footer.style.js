import styled from "styled-components";
import footerBg from "assets/images/footer-bg.png";

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
      color: #ffffff;
      text-transform: uppercase;
    }

    ul{
      margin-bottom: 40px;
      li{
        font-size: 15px;
        color: #ffffff;
        text-transform: uppercase;
        margin-bottom: 18px;
      }
    }

    ul.footer-link{
      li{
        a{
          display: flex;
          align-items: center;
          svg{
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export default FooterWrapper;
