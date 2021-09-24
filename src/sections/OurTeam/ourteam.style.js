import styled from 'styled-components';

const OurTeamWrapper = styled.div`
    padding: 80px 0px 160px 0px;
    position: relative;
    z-index: 2;

    .ourteam-background{
        width: 100%;
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

        .screen{
            display: none;
        }
    }

    .text-upper{
        text-transform: uppercase;
    }

    .ourteam-content{
        position: relative;
        .ourteam-item{
            display: flex!important;
            flex-direction: column;
            align-items: center;
            justify-content: center;
           .ourteam-img{
               width: 290px;
               height: 290px;
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
                    font-size: 20px;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-family: 'Goma Block', sans-serif;
                }

                &.ourteam-role{
                    font-size: 16px;
                    color: ${props => props.theme.primaryColor};
                    margin-bottom: 30px;
                    font-weight: 400;
                }
            }
        }

        

    .slick-dots{
        bottom: -40px;
            li{
                width: 10px;
                height: 10px;
                background: rgba(156, 41, 50, 0.5);
                border-radius: 16px;
                &.slick-active{
                    background: ${props => props.theme.primaryColor};
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
        background: radial-gradient(59.57% 46.53% at 50.34% 46.58%, rgba(61, 216, 249, 0) 0%, #000000 100%);
        position: absolute;
        top: 30%;
        z-index: -1;
    }


    @media only screen and (max-width: 1400px){
        .ourteam-content{
            .ourteam-item{
                .ourteam-img{
                    width: 250px;
                    height: 250px;
                }
            }
        }
    }

    @media only screen and (max-width: 1200px){
        .ourteam-content{
            .ourteam-item{
                .ourteam-img{
                    width: 270px;
                    height: 270px;
                }
            }
        }
    }

    @media only screen and (max-width: 992px){
        .ourteam-content{
            .ourteam-item{
                .ourteam-img{
                    width: 200px;
                    height: 200px;
                }
            }
        }
    }

    @media only screen and (max-width: 768px){
        .ourteam-content{
            .ourteam-item{
                .ourteam-img{
                    width: 290px;
                    height: 290px;
                }
            }
        }
    }

    @media only screen and (max-width: 576px){
        .ourteam-content{
            .ourteam-item{
                .ourteam-img{
                    width: 270px;
                    height: 270px;
                }
            }
        }
    }

`;

export default OurTeamWrapper;
