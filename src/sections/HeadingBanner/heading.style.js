import styled from 'styled-components';
import headerBackground from 'assets/images/banner.webp';

const HeadingWrapper = styled.div`
        background: transparent;
    p{
        color: #ffffff;
        font-size: 18px;
        margin: 0;
        padding: 0;
    }
    div.heading{
        width: 100%;
        margin-top: 81px;
        .headingBackground{
            background-image: url(${headerBackground});
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: relative;
            .container{
                width: 100%;
                height: 100%;
            }

            .heading-content{
                position: absolute;
                top: 35%;
                transform: translateY(-35%);
                img{
                   width: 300px;
                }
                h1{
                    font-size: 36px;
                    line-height: 35.6px;
                    margin: 0;
                    margin-bottom: 10px;
                    text-transform: none;
                    padding: 0;
                    position: relative;
                    max-width: 800px;
                    span{
                        position: relative;
                        display: inline-block;
                    }
                }
                .register{
                    display: flex;
                    align-items: center;
                    margin-top: 49px;
                    justify-content: flex-start;
                    position: relative;
                    left: -20px;
                    div{
                        display: flex;
                        position: relative;
                        width: 80px;
                        height: 47px;
                        margin-right: 40px;
                        img{
                           width: 80px;
                           position: absolute;
                           top: 0;
                           left: 0;

                           &:nth-child(1){
                              left: 15px;

                           }
                           &:nth-child(2){
                              left: 30px;

                           }
                           &:nth-child(3){
                              left: 45px;

                           }
                           &:nth-child(4){
                              left: 60px;
  
                           }
                           &:nth-child(5){
                              left: 75px;

                           }
                        }

                    }
                    button{
                        width: 240px;
                        height: 56px;
                        color: #ffffff;
                        background: linear-gradient(264.42deg, #409FF5 -62.57%, #42B2FD 9.46%, #0E1EAD 103.19%);
                        position: relative;
                        border: 0;
                        overflow: hidden;
                        box-shadow: 0px 0px 12px rgba(40, 33, 108, 0.7);
                        &:before{
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            transform: translate(-50%, -50%);
                            width: 0;
                            border-radius: 50%;
                            height: 0;
                            background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
                            background: linear-gradient(to right, #8e2de2, #4a00e0);
                            transition: width 0.5s, height 0.5s;
                        }

                        &:hover{
                            &:before{
                                width: 500px;
                                height: 500px;
                            }
                        }

                        span{
                            position: relative;
                            z-index: 1;
                        }

                        img{
                            position: absolute;
                            width: unset;
                            top: 0;
                            right: 0;
                            left: 0;
                            bottom: 0;
                            margin: auto;
                        }
                    }
                }
            }
        }
    }



    @media only screen and (max-width: 975px){
        div.heading{
            margin-top: 60px;
            .headingBackground{
                .heading-content{
                    img{
                        width: 200px;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 758px){
        div.heading{
            height: 410px!important;
            .headingBackground{
                .heading-content{
                    h1{
                        font-size: 28px;
                    }
                    img{
                        width: 150px;
                    }

                    .register{
                        margin-top: 10px;
                        div{
   
                        }
                        button{
                            width: auto;
                            height: 46px;
                            img{
                                top: 50%;
                                left: 50%;
                                bottom: unset;
                                right: unset;
                                height: 95%;
                                transform: translate(-50%, -50%);
                            }
                        }
                    }
                }
            }
        }
    }
    
    @media only screen and (max-width: 635px){
        .heading{
            margin-top: 61px;
            .headingBackground{
                .heading-content{
                    button{
                        margin-top: 30px;
                        width: auto;
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

    @media only screen and (max-width: 576px){
        div.heading{
            height: 400px!important;
            .headingBackground{
                .heading-content{
                    h1{
                        font-size: 20px;
                        line-height: 25px;
                    }
                    img{
                        width: 150px;
                    }

                    .register{
                        div{
                            img{
                                margin-bottom: 0;
                                width: 60px;
                            }
                        }
                        button{
                            width: auto;
                            height: 46px;
                            margin-top: 0;
                            margin-top: 20px;
                        }
                    }
                }
            }
        }
    }

`;

export default HeadingWrapper;