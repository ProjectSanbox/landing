import styled from 'styled-components';

const OurTeamWrapper = styled.div`
    padding: 80px 0px 160px 0px;
    position: relative;
    z-index: 2;

    .ourteam-background{
        width: 100%;
        height: 976.54px;
        position: absolute;
        bottom: 45%;
        right: 20%;
    }

    .ourteam-heading{
        text-align: center;
        margin-bottom: 80px;
        h1{
            font-size: 48px;
            line-height: 48px;
        }
    }

    .text-upper{
        text-transform: uppercase;
    }

    .ourteam-content{
        position: relative;
        .ourteam-item{
            padding: 0px 10px;
            .ourteam-img{
               img{
                    border-radius: 16px;
                    border: 1px solid #fff;
                    overflow: hidden;
               }
            }
        }
        .ourteam-info{
            width: 100%;
            text-align: center;
            p{
                margin: 0;
                padding: 0;
                &.ourteam-name{
                    margin-top: 20px;
                    color: #fff;
                    font-size: 18px;
                    font-weight: bold;
                    text-transform: uppercase;
                }

                &.ourteam-role{
                    font-size: 15px;
                    color: ${props => props.theme.primaryColor};
                    margin-bottom: 30px;
                }
            }
        }

        

    .slick-dots{
        bottom: -105px;
            li{
                width: 150px;
                height: 6.25px;
                background: rgba(156, 41, 50, 0.5);
                border-radius: 16px;
                &.slick-active{
                    background: #9C2932;
                }
              .ft-slick__dots--custom{
                width: 100%;
                height: 100%;
            }
        }
    }

    }

    .slick-arrow{
        display: none!important;
    }
    
    .content-backgound{
            width: 100%;
            height: 527px;
            background: radial-gradient(78.39% 53.42% at 60.34% 46.58%, #32070A 0%, rgba(166, 21, 32, 0.01) 100%);
            position: absolute;
            top: 30%;
            z-index: -1;
        }

    @media only screen and (max-width: 1000px){
        .ourteam-item{
            padding: 20px 35px!important;
        }
    }

    @media only screen and (max-width: 992px){
        .ourteam-item{
            .ourteam-item-desc{
               p{
                max-height: 200px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 7;
               }
            }
        }
    }

    @media only screen and (max-width: 480px){
        padding: 30px 0px!important;
        .ourteam-background{
            background-size: cover;
        }

        .ourteam-item{
            min-height: 375px;
        }
        padding: 0px 0px;
        .ourteam-heading{
            margin-top: 30px;
        h1{
            font-size: 49px;
            line-height: 49px;
        }
    }
  }

  .ourteam-content{
    .slick-dots{
        li{
            bottom: 100px;
            width: 7px;
        }
    }
  }
`;

export default OurTeamWrapper;
