import styled from 'styled-components';
import background from 'assets/images/backgroundourteam.svg';

const OurTeamWrapper = styled.div`
    padding: 120px 0px;
    border-bottom: 1px dashed #353945;
    position: relative;

    .ourteam-background{
        width: 100%;
        height: 976.54px;
        background: url(${background});
        position: absolute;
        bottom: 45%;
        right: 20%;
    }

    h1{
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
    }

    p{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: #777E90;
    }

    .ourteam-heading{
        text-align: center;
        h1{
            font-size: 64px;
            line-height: 64px;
        }
    }

    .text-upper{
        text-transform: uppercase;
    }

    .ourteam-content{
        .ourteam-item{
            padding: 0px 10px;
            .ourteam-img{
                img{
                    clip-path: polygon(11% 0, 100% 0%, 90% 100%, 0% 100%);
                    border-bottom-left-radius: 10px;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 50px;
                    border-top-left-radius: 50px;
                }
            }
        }

        .slick-dots{
            margin: 20px;
            li{
                width: 100px;
                height: 5px;
                background: #fff;
                border-radius: 10px;
                &.slick-active{
                    background: ${props => props.theme.primaryColor};
                }
              .ft-slick__dots--custom{
                width: 100%;
                height: 100%;
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

        .slick-arrow{
            &.slick-prev{
                display: none!important;
            }

            &.slick-next{
                display: none!important;
            }
        }

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
        .ourteam-background{
            background-size: cover;
        }

        .ourteam-item{
            min-height: 375px;
        }
        padding: 0px 0px;
        .ourteam-heading{
        h1{
            font-size: 49px;
            line-height: 49px;
        }
    }

    .slick-dots{
        li{
          width: 20px!important;
        }
    }
  }

`;

export default OurTeamWrapper;
