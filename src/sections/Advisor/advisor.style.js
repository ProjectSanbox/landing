import styled from 'styled-components';

const AdvisorWrapper = styled.div`
     padding: 30px 0px 180px 0px;
    position: relative;
    background: #EB5757;
    z-index: 2;
    h1{
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
    }

    p{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: #777E90;
        margin: 0;
        color: #ffffff;
    }

    .adivisor-heading{
        text-align: center;
        h1{
            font-size: 48px;
            line-height: 48px;
        }
    }

    .text-upper{
        text-transform: uppercase;
    }

    .adivisor-content{
        text-align: center;
        .adivisor-item{
          img{
              width: 303px;
              margin: auto;
          }

          p.adivisor-name{
            font-size: 24px;
            line-height: 24px;
            font-weight: 700;
            margin: 16px 0px;
          }

          p.adivisor-job{
              font-size: 16px;
              font-weight: 700;
              color: ${props => props.theme.primaryColor};
              margin-bottom: 20px;
          }

          p.adivisor-info{
              font-size: 16px;
          }
        }
    }

    .backgorund{
        position: absolute;
        width: 100%;
        height: 360px;
        background: #A61520;
        bottom: 15%;
        left: 0;
        z-index: -1;
    }

    @media only screen and (max-width: 1200px){
        .modal-info{
            width: 90vw!important;
            .modal-info-box{
                align-items: center;
            }
        }
    }

    @media only screen and (max-width: 1080px){
        .modal-info{
            height: 85vh!important;
        }
    }

    @media only screen and (max-width: 1032px){
        .modal-info{
            height: 100vh!important;
            width: 100vw!important;
            border-radius: unset!important;
        }
    }

    @media only screen and (max-width: 768px){
        .modal-info{
            display: none!important;
        }

        .adivisor-item{
            button{
                display: none!important;
            }
        }

        .row{
            justify-content: center;
        }
    }

   

    @media only screen and (max-width: 480px){
        padding: 30px 0px;
        .adivisor-heading{
            h1{
                font-size: 49px;
                line-height: 49px;
            }
        }
  }

  @media only screen and (max-width: 376px){
    .backgorund{
        bottom: 0;
        height: 600px;
    }
  }

`;

export default AdvisorWrapper;