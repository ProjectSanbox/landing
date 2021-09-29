import styled from 'styled-components';
import background from 'assets/images/background.png';

const GamePlayWrapper = styled.div`
    width: 100%;
    padding: 150px 0px 50px 0px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .gameplay-heading{
        .screen{
            display: none;
        }
    }

    .gameplay-content{
        margin-top: 65px;
        .gameplay-item{
            display: flex;
            align-items: center;
            align-items: center;
           .gameplay-image{
               width: 59.30%;
               margin-right: 100px;
           }

           .gameplay-intro{
               width: 25.69%;
               img{
                   width: 134px;
                   margin-bottom: 30px;
               }

               h1{
                   font-size: 24px;
                   color: #ffffff;
                   margin: 0;
                   padding: 0;
               }

               p{
                   font-size: 18px;
               }

               ul{
                   li{
                       font-size: 18px;
                       list-style-type: disc;
                   }
               }
           }
        }
    }

    .slick-arrow{
        display: none!important;
    }

    ul{
        bottom: -50px;
        li{
            .ft-slick__dots--custom{
                width: 10px;
                height: 10px;
                background: ${props => props.theme.primaryColor};
                border-radius: 50%;
                opacity: 0.2;
            }

            &.slick-active{
                .ft-slick__dots--custom{
                    opacity: 1;
                }
            }
        }
    }

    @media only screen and (max-width: 1200px){
        .gameplay-content{
            .gameplay-item{
                flex-direction: column;
                .gameplay-image{
                    width: 90%;
                    margin: auto;
                }

                .gameplay-intro{
                    width: 90%;
                    text-align: center;
                    margin: 20px 0px auto;
                    img{
                        margin: auto;
                    }

                    ul{
                        li{
                            position: relative;
                            list-style-type: none;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1200px){
        .hide{
            display: none;
        }
        .gameplay-heading{
            h1{
                text-align: center;
            }

            .screen{
                display: block;
            }
        }
    }
`;

export default GamePlayWrapper;