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

  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    background: rgba(0,0,0,.7);
    iframe{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    button{
     svg{
      font-size: 25px;
      position: absolute;
      top: 20px;
      right: 20px;
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(43deg) brightness(105%) contrast(101%);
     }
    }
  }

  .production-img{
    img{
      border-radius: 5px;
    }

    button{
      svg{
        font-size: 60px;
        position: absolute;
        top: 45%;
        left: 55%;
        transform: translate(-55%, -45%);
        filter: invert(0%) sepia(1%) saturate(3%) hue-rotate(332deg) brightness(0%) contrast(0%);
      }
    }
  }

  .row{
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 768px){
    .production-img{
      img{
        width: 100%!important;
        height: 100%!important;
        margin-left: 0!important;
      }
    }
  }
`;

export default AboutSectionWrapper;