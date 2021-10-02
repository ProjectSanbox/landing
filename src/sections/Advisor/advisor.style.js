import styled from 'styled-components';

const AdvisorWrapper = styled.div`
     padding: 60px 0px 0px 0px;
    position: relative;
    z-index: 2;
    p{
        font-weight: 400;
        color: #777E90;
        margin: 0;
        color: #ffffff;
    }

    .adivisor-heading{
        margin-bottom: 80px;
        h1{
            font-size: 48px;
            line-height: 48px;
        }
    }

    .text-upper{
        text-transform: uppercase;
    }

    .adivisor-content{
        display: flex;
        justify-content: center;
        .adivisor-item{
            &:not(:first-child){
                margin-left: 105px;
            }
            .adivisor-avatar{
                width: 320px;
                height: 320px;
            }
            .adivisor-intro{
                p.adivisor-name{
                font-size: 32px;
                line-height: 24px;
                font-weight: 700;
                margin: 16px 0px;
                color: ${props => props.theme.primaryColor};
            }

            p.adivisor-info{
                font-size: 18px;
                font-weight: 400;
                max-width: 320px;
            }
            }
        }
    }

    .backgorund{
        position: absolute;
        width: 100%;
        height: 651px;
        top: 10%;
        left: 0;
        z-index: -1;
    }

    @media only screen and (max-width: 1200px){
    .adivisor-content{
            .adivisor-item{
               &:not(:first-child){
                margin-left: 55px;
               }
                .adivisor-avatar{
                    width: 270px;
                    height: 270px;
                }

                .adivisor-intro{
                    p.adivisor-info{
                        max-width: 270px;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 992px){
    .adivisor-content{
            .adivisor-item{
                &:not(:first-child){
                    margin-left: 35px;
                }
                .adivisor-avatar{
                    width: 220px;
                    height: 220px;
                }

                .adivisor-intro{
                    p.adivisor-info{
                        max-width: 220px;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 576px){
    .adivisor-heading{
        text-align: center;
    }

    .adivisor-content{
        flex-direction: column;
            .adivisor-item{
                margin-left: 0px!important;
                margin-bottom: 100px;
                .adivisor-avatar{
                    margin: auto;
                }
                .adivisor-intro{
                    text-align: center;
                    p.adivisor-info{
                        max-width: 100%;
                    }
                }
            }
        }
    }
`;

export default AdvisorWrapper;