import styled from 'styled-components';
import background from 'assets/images/backgroundourteam.svg';

const OurTeamWrapper = styled.div`
    padding: 160px 0px;
    position: relative;
    background: #EB5757;

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

        .arrow{
        display: flex;
        align-items: center;
        top: 117%;
        div.slick-arrow{
        width: 32px;
        height: 32px;
        border-radius: 4px;
        background: #42B9FF;
        position: relative;
            img{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
    }

        span{
            font-size: 16px;
            color: #fff;
            text-transform: uppercase;
        }
    }

    

    div.arrow-next{
        position: absolute;
        right: 10%;
        z-index: 2;
        .slick-next{
            transform: unset;
            &::before{
                display: none;
            }
        }
    }

    div.arrow-pre{
        position: absolute;
        left: 10%;

        z-index: 2;
        .slick-prev{
            transform: unset;
            &::before{
                display: none;
            }
            
            img{
               transform: translate(-50%, -50%) rotate(180deg) ;
            }
        }
    }

    .slick-dots{
        bottom: -105px;
            li{
                width: 150px;
                height: 6.25px;
                background: #b5b4b1;
                border-radius: 16px;
                &.slick-active{
                    background: #fff;
                }
              .ft-slick__dots--custom{
                width: 100%;
                height: 100%;
            }
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
