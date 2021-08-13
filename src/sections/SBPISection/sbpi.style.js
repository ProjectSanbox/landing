import styled from 'styled-components';

const SBPIWrapper = styled.div`
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

    .SBPI-heading{
        text-align: center;
        h1{
            font-size: 64px;
            line-height: 64px;
        }
    }

    .SBPI-content{
        display: flex;
        align-items: center;
        .SBPI-content-left, .SBPI-content-right{
            .SBPI-content-item{
                background: #8e2de2;
                background: -webkit-linear-gradient(to bottom, #8e2de2, #4a00e0);
                background: linear-gradient(to top, #8e2de2, #4a00e0);
                border-radius: 10px;
                width: 300px;
                padding: 10px;
                text-align: center;
                margin-bottom: 30px;
                img{
                    width: 87px;
                    margin: 0px auto 20px;
                }
                p{
                    font-size: 20px;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: ${props => props.theme.primaryColor}
                }
            }       
        }
    }

    @media only screen and (max-width: 991px){
        .SBPI-content{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .SBPI-content-left, .SBPI-content-right{
            width: 100%;
            display: flex;
            justify-content: start;
            .SBPI-content-item{
                width: 45%!important;
                &:nth-child(1){
                    margin-right: 5%;
                }
            }
        }

        .SBPI-content-img{
            img{
                width: 400px
            }
        }

        .SBPI-arrow-left,.SBPI-arrow-right{
            transform: rotate(90deg);
        }
    }

    @media only screen and (max-width: 600px){
        padding: 60px 0px 0px;

        .SBPI-content{
            height: 730px;
            margin-top: 250px;
        }
  
        .SBPI-content-img{
            position: relative;
            top: -150px;
            img{
                width: 300px
            }
        }

        .SBPI-arrow-right{
            position: relative;
            top: -220px;
        }

        .SBPI-arrow-left,.SBPI-arrow-right{
            img{
                width: 50%;
            }
        }

        .SBPI-content-right{
            position: relative;
            top: -275px;
        }
    }
`;

export default SBPIWrapper;