import styled from 'styled-components';

const MediaWrapper = styled.div`
    margin-top: 150px;
    padding-bottom: 80px;
    background: #ffffff;
    p{
        color: black;
        margin-top: 30px;
    }

    a{
        color: #40a6d9;
    }

    ul{
        padding-left: 20px;
        margin: 20px 0px;
        li{
            color: black;
            list-style: circle;
        }
    }

    .media-heading{
        padding-top: 80px;
    }

    .media-content{
        display: flex;
        .media-icon{
            .items{
                width: 60px;
                height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                a{
                    color: #ffffff;
                    svg{
                        font-size: 20px;
                    }
                }

                &:nth-child(1){
                    background: #7489b7;
                }
                &:nth-child(2){
                    background: #40a6d9;
                }  
                &:nth-child(3){
                    background: #0088cc;
                }   
            }
        }

        .content-main{
            margin-left: 40px;
            width: 100%;
            .logo{
                background: black;
                width: 100%;
                height: 400px;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 60%;
                }
            }

            .intro{
                margin-top: 30px;
                .heading{
                    font-size: 40px;
                    font-weight: 700;
                }
            }
        }

        .block{
            width: 30%;
            margin-left: 40px;
        }
    }
`;

export default MediaWrapper;