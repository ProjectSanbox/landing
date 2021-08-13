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
               flex: 200%;
           }
       }
    }

    .NFT-content{
        div{
            .NFT-item{
            height: 450px;
            background: #C4C4C4;
            border-radius: 16px;
            background: #2A2A2C;
            border: 3px solid #303034;
            text-align: center;
            position: relative;
                .item-weapon{
                    font-family: 'Goma Block', sans-serif;
                    font-size: 24px;
                    font-weight: 400;
                    margin-top: 40px;
                    margin-bottom: 0;
                }
                .item-name{
                    font-family: 'Product Sans', sans-serif;
                    font-weight: 900;
                    font-size: 16px;
                }

                .item-image{
                    width: 250px;
                    margin: auto;
                }

                .item-price{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    font-family: 'Goma Block', sans-serif;
                    font-weight: 400;
                    color: #ffffff;
                    margin-top: 20px;
                    img{
                        width: 45px;
                        margin-right: 10px;
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
        display: none!important;
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