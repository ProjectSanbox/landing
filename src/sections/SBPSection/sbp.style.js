import styled from 'styled-components';

const SBPWrapper = styled.div`
    padding: 60px 0px 100px;
    border-bottom: 1px dashed #353945;
    p{
        margin-bottom: 5px;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        color: #777E90;
    }

    h1{
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
    }

    .SBP-heading{
        text-align: center;
        h1{
            font-size: 64px;
            line-height: 64px;
        }
    }

    .col{
        padding: 0!important;
    }

    .SBP-content{
        .SBP-content-left{
            padding: 10px 30px;
            background: #8e2de2;
            background: -webkit-linear-gradient(to bottom, #8e2de2, #4a00e0);
            background: linear-gradient(to top, #8e2de2, #4a00e0);
            border-radius: 10px;
            display: flex;
            justify-content: center;

            div{
                margin-right: 30px;
                text-align: center;
                img{
                    width: 60%;
                    margin: 10px auto 20px;
                }

                p.SBP-left-heading{
                    text-transform: uppercase;
                    font-weight: 700;
                    color: ${props => props.theme.primaryColor};
                    font-size: 18px;
                }

                p{
                    color: ${props => props.theme.primaryColor};
                    font-size: 12px;
                    font-weight: 700;
                    margin: 0;
                    line-height: 1.3;
                }

            }
            ul{
                li{
                    color: #fff;
                    font-size: 13px;
                }
            }
        }

        .SBP-content-img{
            display: flex;
            align-items: center;
            .SBP-arrow-left{
                width: 200px;
            }

            .SBP-arrow-right{
                width: 220px;
            }
        }

        .SBP-content-right{
            .SBP-right-item{
                display: flex;
                margin-bottom: 20px;
                border-radius: 10px;
                background: #8e2de2;
                background: -webkit-linear-gradient(to bottom, #8e2de2, #4a00e0);
                background: linear-gradient(to top, #8e2de2, #4a00e0);
                padding: 10px 30px;
                align-items: center;
                img{
                    width: 70px;
                    margin-right: 20px;
                }

                p{
                    text-transform: uppercase;
                    font-size: 20px;
                    font-weight: bold;
                    color: ${props => props.theme.primaryColor};
                }
            }
        }
    }

    @media only screen and (max-width: 1200px){
        padding: 60px 0px 320px;
        .SBP-content{
            .row{
                justify-content: center;
                align-items: center;
                    .SBP-content-img{
                    flex-direction: column;
                    div{
                        .SBP-main-img{
                            width: 420px;
                        }
                    }
                    .SBP-arrow-left{
                        margin-top: 60px;
                    }
                    .arrow-right-box{
                        position: absolute;
                        top: 228px;
                    }
                    img{
                        transform: rotate(90deg);
                    }
                }

                .SBP-content-img{
                    .SBP-arrow-right{
                        width: 180px;
                    }
                }

                .SBP-content-right{
                    padding: 0;
                    display: flex;
                    position: absolute;
                    justify-content: space-around;
                    width: 100%;
                    top: 120px;
                    .SBP-right-item{
                        flex-direction: column;
                        width: 110px;
                        p{
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 500px){
        .SBP-content-img{
            .SBP-arrow-left{
                width: 150px!important;
            }

            .SBP-arrow-right{
                width: 150px!important;
            }
        }

        .SBP-content-right{
            top: 45px!important;
        }
        
    }

    @media only screen and (max-width: 376px){
        .SBP-content-img{
            .SBP-arrow-left{
                width: 100px!important;
            }

            .SBP-arrow-right{
                width: 100px!important;
            }
        }

        .SBP-content-right{
            top: 10px!important;
        }
    }
`;

export default SBPWrapper;