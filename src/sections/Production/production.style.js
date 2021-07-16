import styled from "styled-components";

const AboutSectionWrapper = styled.div`
  padding: 100px 0;
  position: relative;
  border-bottom: 1px dashed #353945;
  .text-upper{
    text-transform: uppercase;
  }
  p{
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }
  h1{
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
  }
  
  .production-info{
    p.production-info-title{
      color: ${props => props.theme.primaryColor};
      font-size: 16px;
      line-height: 16px;
      font-weight: 700;
    }
    p{
      font-size: 16px;
      line-height: 28px;
      color: #777E90;
    }
    h1{
     
      line-height: 1.5em;
      color: #fff;
    }
  }

  .production-img{
    svg{
      width: 720px!important;
    }
  }

  .row{
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1433px){
    .production-img{
      svg{
        width: 690px!important;
      }
    }
  }

  @media only screen and (max-width: 1355px){
    .production-img{
      svg{
        width: 620px!important;
      }
    }
  }

  @media only screen and (max-width: 1255px){
    .production-img{
      svg{
        width: 100%!important;
      }
    }
  }

  @media only screen and (max-width: 1191px){
    .production-img{
      svg{
        width: 520px!important;
      }
    }

    .production-info{
      h1{
        font-size: 49px;
        line-height: 49px;
      }
    }

  }

  @media only screen and (max-width: 1054px){
    .production-img{
      svg{
        width: 490px!important;
      }
    }
  }

  @media only screen and (max-width: 980px){
    .production-img{
      svg{
        width: 450px!important;
      }
    }
  }

  @media only screen and (max-width: 844px){
    .production-img{
      div{
        text-align: center;
      }
    }
  }


  @media only screen and (max-width: 847px){
    .production-img{
      svg{
        width: 420px!important;
      }
    }
  }

  @media only screen and (max-width: 500px){
    .production-img{
      svg{
        width: 100%!important;
      }
    }
  }

  @media only screen and (max-width: 768px){
      .production-img{
        margin-top: 100px!important;
      }
    }

  @media only screen and (max-width: 480px){
    padding: 40px 0px 40px 0px;
      .production-info{
      h1{
        font-size: 49px;
        line-height: 49px;
      }
    }

    .production-img{
      height: 300px;
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 360px){
    padding: 0px;
    .production-img{
      height: 250px;
    }
  }
`;

export default AboutSectionWrapper;