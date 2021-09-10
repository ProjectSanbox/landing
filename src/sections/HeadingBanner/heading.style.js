import styled from 'styled-components';
import headerBackground from 'assets/images/banner.jpg';

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
        height: 773.25px!important;
        .headingBackground{
            background-image: url(${headerBackground});
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: relative;
            .heading-content{
                padding: 0px 0px 0px 160px;
                position: absolute;
                top: 35%;
                transform: translateY(-35%);
                img{
                   width: 200px;
                }
                h1{
                    font-weight: 400;
                    font-size: 36px;
                    line-height: 57.6px;
                    margin: 0;
                    padding: 0;
                    position: relative;
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
                        img{
                            width: 151.6px;
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

    @media only screen and (max-width: 1400px){
        div.heading{
            height: 730px!important;
        }
    }

    @media only screen and (max-width: 992px){
        div.heading{
            height: 520px!important;
            .headingBackground{
                .heading-content{
          
                }
            }
        }
    }

    @media only screen and (max-width: 975px){
        div.heading{
            margin-top: 60px;
        }
    }

    @media only screen and (max-width: 758px){
        div.heading{
            height: 410px!important;
            .headingBackground{
                .heading-content{
                    padding: 0px 0px 0px 60px;
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
            height: 300px!important;
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
                            }
                        }
                        button{
                            width: auto;
                            height: 46px;
                            margin-top: 0;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 376px){
        div.heading{
            .headingBackground{
                .heading-content{
                   padding: 0px 0px 0px 10px;
                }
            }
        }
    }

`;

export default HeadingWrapper;