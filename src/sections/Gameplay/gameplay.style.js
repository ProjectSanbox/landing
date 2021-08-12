import styled from 'styled-components';
import background from 'assets/images/backgroundsolution.svg';


const GamePlayWrapper = styled.div`
    padding: 60px 0px 100px;
    background: linear-gradient(133.84deg, #4E4E4E -16.04%, #333333 9.33%, #1A1A1A 32.02%, #1A1A1A 62.06%, #262626 87.42%, #4E4E4E 112.12%);
    .gameplay-heading{
        text-align: center;
        h1{
            font-size: 48px;
            line-height: 48px;
            text-transform: uppercase;
        }
    }

    .gameplay-content{
        width: 97%;
        margin-left: 3%;
        margin-top: 80px;
        .gameplay-video{
           display: flex;
           align-items: center;
           .gameplay-intro{
               height: 392px;
               flex: 60%;
               position: relative;
               background: linear-gradient(267.93deg, rgba(64, 159, 245, 0) 1.02%, #0E1EAD 71.01%);
              div{
                  width: 80%;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  text-align: center;
                    .intro-heading{
                    font-weight: 700;
                    font-size: 24px;
                    text-transform: uppercase;
                    }
                    img{
                        width: 100px;
                        margin: auto;
                    }
                    
                    ul{
                        text-align: left;
                        margin-bottom: 10px;
                        li{
                            color: #fff;
                            &::before{
                                content: "▶";
                                font-size: 13px;
                                padding-right: 5px;
                            }   
                        }
                    }
              }
           }
        }

        div{
            position: relative;
            img.video{
                flex: 40%;
            }
        }
    }

    .arrow{
        display: flex;
        align-items: center;
        top: 105%;
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
        bottom: -55px;
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

  @media only screen and (max-width: 1200px){
    .gameplay-content{
        .gameplay-video{
            .gameplay-intro{
                height: 350px;
            }
        }
    }
  }

  @media only screen and (max-width: 992px){
    .gameplay-content{
        .gameplay-video{
            .gameplay-intro{
                height: 314px;
                div{
                    img{
                        width: 60px;
                    }
                }
            }
        }
    }
  }

  @media only screen and (max-width: 850px){
    .gameplay-content{
        .gameplay-video{
            flex-direction: column;
            .gameplay-intro{
                flex: none;
                width: 100%;
                height: 400px;
            }
        }
    }

    .arrow{
        display: none;
    }
  }

  @media only screen and (max-width: 576px){
    .gameplay-content{
        margin: auto;
    }

    .slick-dots{
        li{
            width: 100px;
        }
    }

    .slick-slide.slick-cloned {
        opacity: 0;
    }
  }
   
`;

export default GamePlayWrapper;