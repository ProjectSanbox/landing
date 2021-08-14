import styled from 'styled-components';
import header_background from 'assets/images/header_background.png';

const HeadingWrapper = styled.div`
    p{
        color: #ffffff;
        font-size: 18px;
        margin: 0;
        padding: 0;
    }
    .heading{
        width: 100%;
        height: 838px;
        margin-top: 81px;
        .headingBackground{
            background-image: url(${header_background});
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            .heading-content{
                width: 50%;
                height: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                img{
                    margin-bottom: 32px;
                }

                p{
                    color: #004280;
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: 1rem;
                    word-spacing: 3px;
                    letter-spacing: 2px;
                }

                button{
                    margin-top: 70px;
                    width: 240px;
                    height: 48px;
                    color: #ffffff;
                    background: linear-gradient(264.42deg, #409FF5 -62.57%, #42B2FD 9.46%, #0E1EAD 103.19%);
                    position: relative;
                    border: 0;
                    overflow: hidden;
                }
            }
        }
    }
    
    @media only screen and (max-width: 600px){
        .heading{
            margin-top: 61px;
            .headingBackground{
                .heading-content{
                    button{
                        margin-top: 30px;
                        width: 200px;
                        height: 40px;
                    }

                    img{
                        margin-bottom: 16px;
                    }

                    p{
                        font-size: 12px;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 376px){
        .headingBackground{
            .heading-content{
                button{
                    margin-top: 10px!important;
                    width: 100px!important;
                    height: 25px!important;
                    font-size: 10px;
                    border-radius: 4px!important;
                }

                p{
                    font-size: 11px!important;
                    line-height: 1.5;
                }

            }
        }
    }

`;

export default HeadingWrapper;