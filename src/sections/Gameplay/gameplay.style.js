import styled from 'styled-components';
import background from 'assets/images/backgroundsolution.svg';


const GamePlayWrapper = styled.div`
    padding: 60px 0px 100px;
    border-bottom: 1px dashed #353945;
    position: relative;
    
    .gameplay-background{
        width: 100%;
        height: 976.54px;
        background: url(${background});
        position: absolute;
        top: 58%;
        left: 16%;
        transform: translate(-50%, -50%);

    }
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

    button{
        font-family: 'DM Sans', sans-serif;
    }

    .changecol{
        flex-direction: row-reverse;
    }

    .gameplay-heading{
        text-align: center;
        h1{
            font-size: 64px;
            line-height: 64px;
            color: #fff;
        }
        div{
            text-align: center;
            p{
                width: 534px;
                margin: auto;
                color: #777E90;
                font-size: 16px;
                line-height: 28px;
            }
        }
    }

    .gameplay-content{
        .gameplay-item{
            margin-bottom: 20px;
            img{
                height: 303px;
            }
            .gameplay-item-heading{
                font-weight: 700;
                font-size: 20px;
                color: #ffffff;
                padding: 20px 0px;
                border-bottom: 2px solid #ffffff;
            }
            p{
                margin-top: 15px;
            }
        }
    }

    @media only screen and (max-width: 991px){
        .gameplay-content{
            .gameplay-item{
                img{
                    height: 185px;
                }
            }
        }
    }

    @media only screen and (max-width: 768px){
        .gameplay-content{
            .gameplay-item{
                img{
                    height: auto;
                }
            }
        }
    }

    @media only screen and (max-width: 575px){
        .gameplay-content{
            .gameplay-item{
                margin-bottom: 65px;
            }
        }
    }

`;

export default GamePlayWrapper;