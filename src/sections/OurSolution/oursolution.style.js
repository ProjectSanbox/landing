import styled from 'styled-components';
import background from 'assets/images/backgroundsolution.svg';


const OursolutionWrapper = styled.div`
    padding: 60px 0px 100px;
    border-bottom: 1px dashed #353945;
    position: relative;
    
    .oursolution-background{
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

    .oursolution-heading{
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

    .oursolution-content{
        margin-top: 80px;
        display: flex;
        .oursolution-content-heading{
            width: 39px;
            height: 24px;
            background: ${props => props.theme.primaryColor};
            text-align: center;
            border-radius: 24px;
            padding-bottom: 4px;
            position: relative;
            p{
                font-size: 12px;
                line-height: 24px;
                font-weight: 600;
                color: #fff;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        h1{
            font-size: 40px;
            line-height: 48px;
            color: #fff;
            padding-bottom: 30px;
            border-bottom: 1px solid #353945;
        }

        .oursolution-content-btn{
            display: flex;
            justify-content: space-between;
            button{
                font-size: 16px;
                line-height: 16px;
                width: 166px;
                height: 48px;
                border-radius: 90px;
                margin-top: 20px;
                &.btn-dark{
                    background: ${props => props.theme.primaryColor};
                    color: ${props => props.theme.primaryColor};
                    color: #141416;
                    &:hover{
                        background: transparent;
                        border: 2px solid ${props => props.theme.primaryColor};
                        color: ${props => props.theme.primaryColor};
                    }
                }
                &.btn-tranperant{
                    background: transparent;
                    border: 2px solid ${props => props.theme.primaryColor};
                    color: ${props => props.theme.primaryColor};
                    &:hover{
                        background: ${props => props.theme.primaryColor};
                        color: #ffffff;
                        border: 2px solid ${props => props.theme.primaryColor};
                    }
                }
                &.btn-tranperant-dark{
                    background: transparent;
                    color: ${props => props.theme.primaryColor};
                    border: 2px solid ${props => props.theme.primaryColor};
                    &:hover{
                        background: ${props => props.theme.primaryColor};
                        color: #141416;
                        border: 2px solid ${props => props.theme.primaryColor};
                    }
                }
            }
        }

        .oursolution-content-img{
            border-width: 5px;
            border-style: solid;
            border-color: #3C3685;
            border-radius: 16px;
            overflow: hidden;
            margin-top: 40px;
        }

    }

    @media only screen and (max-width: 1200px){
        .oursolution-content-img{
           position: absolute;
           top: 50%;
           transform: translateY(-50%)!important;
        }

        .oursolution-content-btn{
            button{
                width: 145px!important;
                height: 43px!important;
            }
        }
    }
    
    @media only screen and (max-width: 1090px){
        .oursolution-content-img{
           position: unset;
           transform: unset!important;
        }
    }


    @media only screen and (max-width: 768px){
        .oursolution-content-img{
            position: unset;
            transform: unset!important;
        }

        .oursolution-content{
            flex-direction: column-reverse!important;
                .oursolution-content-img{
                margin-left: 0!important;
                margin-top: 50px;
            }

            .oursolution-content-btn{
                justify-content: unset;
                button{
                    &:nth-child(1){
                    margin-right: 20px;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 554px){
        .oursolution-heading{
            div{
                p{
                    width: auto;
                }
            }
        }
    }

    @media only screen and (max-width: 480px){
        padding: 0px 0px 60px 0px;
        .oursolution-heading{
            h1{
                font-size: 49px;
                line-height: 49px;
            }
        }

        .oursolution-content-img{
           margin-top: 20px!important;
        }
  }

  @media only screen and (max-width: 321px){
    .oursolution-content-btn{
        button{
            width: 145px!important;
            height: 43px!important;
        }
    }
  }
`;

export default OursolutionWrapper;