import styled from 'styled-components';
import headerBackground from 'assets/images/headerBackgournd.jpg';

const ExhibitionWrapper = styled.div`
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

    @media only screen and (max-width: 728px){
        .headingContent{
            h1{
                font-size: 40px!important;
            }
        }
    }

    @media only screen and (max-width: 600px){
        .exhibition{
            margin-top: 120px!important;
        }

        .exhibition{
            height: 450px!important;
            iframe{
                height: 450px!important;
            }
        }
    }

    @media only screen and (max-width: 455px){
        .headingContent{
            width: 100%!important;
            margin-left: 0!important;
            transform: translateX(-50%);
            text-align: center;
            padding: 0 20px;
            p{
                text-align: left;
            }
        }
    }
`;

export default ExhibitionWrapper;