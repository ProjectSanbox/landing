import styled from 'styled-components';

const GamePlayWrapper = styled.div`
    padding: 60px 0px 100px;
    .gameplay-heading{
        text-align: center;
        h1{
            font-size: 48px;
            line-height: 48px;
            text-transform: uppercase;
        }

        p{
            font-size: 20px;
            padding: 0px 250px;
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
               overflow: hidden;
               flex: 55%;
               left: -2%;
               z-index: -1;
               position: relative;
               background: linear-gradient(to right, #4b6cb7,#303030);
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
                        margin-bottom: 20px;
                        margin-top: 20px;
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

        &.slick-disabled{
            background: rgb(66,185,255, 0.5);
            cursor: no-drop;
        }
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
    .gameplay-heading{
        p{
            padding: 0px 100px;
        }
    }

    .gameplay-content{
        .gameplay-video{
            .gameplay-intro{
                height: 350px;
            }
        }
    }
  }

  @media only screen and (max-width: 1025px){
    .gameplay-content{
        .gameplay-video{
            .gameplay-intro{
                height: 314px;
                div{
                    img{
                        width: 40px;
                        margin-bottom: 10px;
                        margin-top: 10px;
                    }
                }
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

  @media only screen and (max-width: 870px){
    .gameplay-content{
        .gameplay-video{
            flex-direction: column;
            .gameplay-intro{
                flex: none;
                left: 0;
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

    .gameplay-heading{
        p{
            padding: 0;
        }
    }

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