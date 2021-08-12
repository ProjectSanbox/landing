import styled from 'styled-components';

const BlockWrapper = styled.div`
    background: linear-gradient(181.29deg, #409FF5 7.66%, #42B2FD 50.07%, #0E1EAD 105.25%);
    padding: 180px 0;
    .NFT-heading{
        position: relative;
        text-align: center;
        margin-bottom: 40px;
       div{
           display: flex;
           align-items: center;
           p{
               flex: 200%;
           }
           button{
               width: 176px;
               height: 36px;
               background: #ffffff;
               color: #000000;
               text-transform: uppercase;
               font-size: 10px;
               font-weight: 900;
               clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
               border-top-left-radius: 17px;
               border-bottom-right-radius: 17px;
           }
       }
    }

    .NFT-content{
        div{
            .NFT-item{
            height: 450px;
            background: #C4C4C4;
            border-radius: 20px;
            border: 5px solid #ffffff;
            text-align: center;
            position: relative;
            .item-info{
                width: 296px;
                height: 100px;
                background: #2E0066;
                text-align: center;
                border-radius: 8px;
                position: absolute;
                left: 50%;
                bottom: 42px;
                transform: translateX(-50%);

                    p.info-title{
                        font-size: 24px;
                        line-height: 24px;
                        color: #ffffff;
                        text-transform: uppercase;
                        font-weight: 700;
                        margin: 0;
                        padding-top: 20px;
                    }

                    p{
                        font-size: 16px;
                        color: #42B9FF;
                    }

                    .item-price{
                        width: 276px;
                        height: 44px;
                        background: #FEB724;
                        border-radius: 8px;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: -20px;
                        p{
                            font-size: 16px;
                            line-height: 44px;
                            color: #000000;
                            font-weight: 700;
                        }
                    }
                }
            }
        }
    }

    .slick-slide {
        padding: 0 5px;
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


    @media only screen and (max-width: 576px){
    padding: 140px 0;
    .NFT-heading{
        div{
            flex-direction: column;
        }
    }

    .slick-dots{
        li{
            width: 5%;
        }
    }

    .arrow{
        top: 100%;
        display: none;
    }

    .slick-dots{
        bottom: -60px;
    }
  }
`;

export default BlockWrapper;