import styled from 'styled-components';
import headerBackground from 'assets/images/headerBackground.png';

const HeadingWrapper = styled.div`
    p{
        color: #ffffff;
        font-size: 18px;
    }
    .headingBackground{
        background-image: url(${headerBackground});
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: 65%;
        position: relative;
        .headingContent{
            z-index: 2;
            width: 52%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            margin-left: 125px;
            h1{
                font-size: 64px;
                font-weight: bold;
            }
        }
        &::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: rgba(0,0,0,.2);
        }
    }

    @media only screen and (max-width: 1080px){
        .headingContent{
            h1{
                font-size: 50px!important;
            }
        }
    }

    @media only screen and (max-width: 845px){
        .headingBackground{
            background-position-x: 60%;
        }

        .headingContent{
            h1{
                font-size: 40px!important;
            }
        }
    }


    @media only screen and (max-width: 728px){
        .headingContent{
            h1{
                font-size: 40px!important;
            }
        }
    }

    @media only screen and (max-width: 679px){

        .headingContent{
            width: 65%!important;
        }
    }

    @media only screen and (max-width: 600px){
        .heading{
            margin-top: 120px!important;
        }

        .heading{
            iframe{
                height: 450px!important;
            }
        }
    }

    @media only screen and (max-width: 457px){
        .headingBackground{
            background-position-x: 50%;
        }

        .headingContent{
            width: 100%!important;
            margin-left: 0!important;
            transform: translateX(-50%);
            text-align: center;
            padding: 0 20px;
            h1{
                font-size: 35px!important;
                line-height: 40px;
            }
            p{
                text-align: left;
                padding: 0 20px;
                font-size: 15px;
                margin: 0;
            }
        }
    }
`;

export default HeadingWrapper;