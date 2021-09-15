import styled from 'styled-components';
import heading_background from 'assets/images/meme/heading-background.jpg';

const HeadingWrapper = styled.div`
    width: 100%;
    height: 650px;
    background-image: url(${heading_background});
    background-size: cover;
    position: relative;
    margin-top: 80px;
    .heading-content{
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
    }
    a{
        background: #2196f3;
        width: 150px;
        height: 50px;
        border-radius: 5px;
        line-height: 50px;
        cursor: pointer;
        display: inline-block;
        position: relative;
        margin-top: 40px;
    }
    p{
        margin: 5px 0px;
        padding: 0;
        font-size: 15px;
        text-transform: uppercase;
    }
    .special{
        color: #2196f3;
        font-weight: bold;
        font-size: 24px;
        font-family: 'Goma Block', sans-serif;
        font-weight: 400;
    }
    
    .box-text{
        background: #2196f3;
        margin: 10px 125px;
        padding: 5px 0px;
        clip-path: polygon(9% 0, 100% 0%, 88% 100%, 0% 100%);
        font-size: 24px;
        font-weight: bold;
    }
    .prize-money{
        font-size: 30px;
        font-family: 'Goma Block', sans-serif;
        font-weight: 400;
    }
    .card{
        position: relative;
        min-width: 600px;
        height: 480px;
        box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
            inset -5px -5px 15px rgba(255, 255, 255, 0.1),
            5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        margin: 30px;
        transition: 0.5s;
        .box{
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            background: #2a2b2f;
            border-radius: 15px;
            overflow: hidden;
            transition: 0.5s;
            &::before{
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 50%;
                height: 100%;
                background: rgba(255, 255, 255, 0.03);
                z-index: 0;
            }
            .content{
                padding: 20px;
                text-align: center;
                .card-heading{
                    font-size: 48px;
                    color: #fff;
                    z-index: 1;
                    transition: 0.5s;
                    margin-bottom: 15px;
                    display: block;
                }
            }
        }
    }
    @media only screen and (max-width: 974px){
        margin-top: 60px;
    }
    @media only screen and (max-width: 750px){
        .box-text{
            margin: 10px 0px;
        }
        .heading-content{
            left: 50%;
            top: 50%;
            right: 0;
            transform: translate(-50%, -50%);
            .card{
                min-width: 450px;
                height: 480px;
                margin: 0;
            }
        }
    }
    @media only screen and (max-width: 540px){
        .heading-content{
           width: 100%;
           .card{
                min-width: 300px;
                height: 480px;
                margin: 0;
                .box{
                    top: 10px;
                    left: 10px;
                    right: 10px;
                    bottom: 10px;
                }
            }
        }
    }
`;

export default HeadingWrapper;