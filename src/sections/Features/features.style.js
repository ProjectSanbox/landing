import styled from 'styled-components';
import background from 'assets/images/backgroundsolution.svg';


const FeaturesWrapper = styled.div`
    padding: 60px 0px 100px;
    border-bottom: 1px dashed #353945;
    position: relative;
    
    .features-background{
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

    .features-heading{
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

    .features-content{
        .features-item{
            margin-bottom: 20px;
            img{
                height: 197px;
            }
            .features-item-heading{
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

    @media only screen and (max-width: 575px){
        .features-content{
            .features-item{
                margin-bottom: 65px;
            }
        }
    }

`;

export default FeaturesWrapper;