import styled from 'styled-components';
import frame from 'assets/images/nft/frame.png';

const GameAssetsWrapper = styled.div`
    padding: 180px 0;
    .NFT-heading{
        position: relative;
        text-align: center;
        margin-bottom: 68px;
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
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .NFT-weapon{
                background-image: url(${frame});
                background-repeat: no-repeat;
                background-size: cover;
                width: 290px;
                height: 290px;
                display: flex;
                align-items: center;
                justify-content: center;
                img#nft4{
                    width: 75%;
                }
            }

            .intro{
                text-align: center;
                p.heading{
                    font-weight: 700;
                    font-size: 20px;
                    margin: 0;
                    color: #ffffff;
                    padding: 0;
                    margin-bottom: 5px;
                    margin-top: 30px;
                }

                p{
                    font-size: 16px;
                    color: ${props => props.theme.primaryColor};
                }
            }
        }
    }

    @media only screen and (max-width: 1200px){
        .NFT-content{
            .NFT-item{
                .NFT-weapon{
                    width: 270px;
                    height: 270px;
                }
            }
        }
    }
    
    @media only screen and (max-width: 992px){
        .NFT-content{
            .NFT-item{
                .NFT-weapon{
                    width: 200px;
                    height: 200px;
                }
            }
        }
    }

    @media only screen and (max-width: 768px){
        .NFT-content{
            .NFT-item{
                .NFT-weapon{
                    width: 290px;
                    height: 290px;
                }
            }
        }
    }

    @media only screen and (max-width: 576px){
        .NFT-content{
            .NFT-item{
                .NFT-weapon{
                    width: 270px;
                    height: 270px;
                }
            }
        }
    }

`;

export default GameAssetsWrapper;