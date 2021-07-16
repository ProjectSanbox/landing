import styled from 'styled-components';

const AdvisorWrapper = styled.div`
     padding: 30px 0px 80px 0px;
    border-bottom: 1px dashed #353945;
    position: relative;

    h1{
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
    }

    p{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: #777E90;
        margin: 0;
    }

    .adivisor-heading{
        text-align: center;
        h1{
            font-size: 64px;
            line-height: 64px;
        }
    }

    .text-upper{
        text-transform: uppercase;
    }

    .adivisor-content{
        display: flex;
        flex-wrap: wrap; 
        .row{
            justify-content: center;
        }
        .adivisor-item{
            background: #17181C;
            border-radius: 16px;
            padding: 25px 35px;
            margin: 20px 0px;
            overflow: hidden;

            button{
                width: unset;
                height: unset;
                padding: 0;
                &:hover{
                    color: ${props => props.theme.primaryColor};
                }
            }

            .adivisor-item-heading{
                text-align: center;
                p{
                    margin: 0;
                    font-size: 14px;
                    line-height: 24px;
                    color: #FCFCFD;     
                }

                p.text-job{
                    color: #ACA7ED;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #353945;
                }

                img{
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    margin: auto;
                    margin-bottom: 20px;
                }
            }
            
            .adivisor-item-desc{
                font-size: 14px;
                line-height: 24px;
                color: #ACA7ED;
                padding-top: 20px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: auto;
                overflow: hidden;
            }

            .overlay{
                position: fixed;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background: rgba(0,0,0,.7);
                z-index: 9;
            }

            .modal-info{
                width: 80vw;
                height: 80vh;
                position: fixed;
                align-items: center;
                top: 75%;
                left: 50%;
                transform: translate(-50%, -75%);
                z-index: 1;
                background: #17181C;
                padding: 10px 10px;
                border-radius: 40px;
                box-shadow: 2px 2px 2px rgba(255,255,255,.1);
                z-index: 999999;
                .modal-info-box{
                    display: flex;
                    position: absolute;
                    width: 80%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    .modal-info-avatar{
                        img{
                            width: 100%;
                            border-radius: 30px;
                        }
                    }

                    .modal-info-desc{
                        width: 60%;
                        margin-left: 40px;
                        .modal-info-name{
                            font-weight: 700;
                        }

                        .modal-info-job{
                            font-size: 14px;
                        }

                        .modal-info-introduce{
                            font-size: 14px;
                            margin-top: 30px;
                        }
                    }
                }

                button{
                    width: unset;
                    height: unset;
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    svg{
                        font-size: 25px;
                    }
                }
            }
        }   
    }

    @media only screen and (max-width: 1200px){
        .modal-info{
            width: 90vw!important;
            .modal-info-box{
                align-items: center;
            }
        }
    }

    @media only screen and (max-width: 1080px){
        .modal-info{
            height: 85vh!important;
        }
    }

    @media only screen and (max-width: 1032px){
        .modal-info{
            height: 100vh!important;
            width: 100vw!important;
            border-radius: unset!important;
        }
    }

    @media only screen and (max-width: 768px){
        .modal-info{
            display: none!important;
        }

        .adivisor-item{
            button{
                display: none!important;
            }
        }

        .row{
            justify-content: center;
        }
    }

   

    @media only screen and (max-width: 480px){
        padding: 0px 0px;
        .adivisor-heading{
            h1{
                font-size: 49px;
                line-height: 49px;
            }
        }
  }

`;

export default AdvisorWrapper;