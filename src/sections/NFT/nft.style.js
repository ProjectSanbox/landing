import styled from 'styled-components';

const BlockWrapper = styled.div`
    padding: 180px 0;
    .NFT-heading{
        position: relative;
        text-align: center;
        margin-bottom: 40px;
       div{
           align-items: center;
           p{
               max-width: 730px;
               margin: auto
           }
       }
    }

    .NFT-content{
       .NFT-item{
        padding-bottom: 19px;
        height: 378.6px;
        background: linear-gradient(133.84deg, #4E4E4E -16.04%, #333333 9.33%, #1A1A1A 32.02%, #1A1A1A 62.06%, #262626 87.42%, #4E4E4E 112.12%);
        border-radius: 16px;
        img{
            height: 275px;
        }
       }

       .intro{
           padding: 0px 5%;
           width: 100%;
           text-align: center;
        p.heading{
            font-size: 20px;
            line-height: 28px;
            font-weight: 700;
            color: #ffffff;
        }
        p{
            font-size: 14px;
            line-height: 16.98px;
            color: #BDBDBD;
        }
       }
    }

    .slick-slide {
        padding: 0 5px;
    }

    .arrow{
        display: none;
        align-items: center;
        top: 117%;
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
                width: 10px;
                height: 10px;
                background: #b5b4b1;
                border-radius: 16px;
                &.slick-active{
                    background: #4967ab;
                }
              .ft-slick__dots--custom{
                width: 100%;
                height: 100%;
            }
        }
    }

    @media only screen and (max-width: 601px){
        .slick-dots{
            li{
                width: 10px;
                height: 10px;
            }
        }
    }


    @media only screen and (max-width: 576px){
    padding: 0;
    .NFT-heading{
        div{
            flex-direction: column;
        }
    }

    .arrow{
        top: 100%;
        display: none;
    }

  }
`;

export default BlockWrapper;