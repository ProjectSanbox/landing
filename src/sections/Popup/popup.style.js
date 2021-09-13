import styled from 'styled-components';
import background from 'assets/images/popup/background.png';

const PopupWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0, .7);
    z-index: 999;

    &.hide{
        display: none;
    }

    .popup{
        width: 30.2708333333vw;
        padding-top: 40px;
        height: 85vh;
        background-color: linear-gradient(179.55deg, #552D91 4.95%, #4D6FA3 39.58%, #41CCBC 85.57%);
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 40px 40px center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .popup-logo{
            width: 85.205%;
            margin: auto;
            div{
                position: relative;
                .popup-img{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40%;
                }
            }
        }

        .loot-box{
           width: 60.464%;
           position: absolute;
           left: 55%;
           top: 50%;
           transform: translate(-55%, -50%);
        }

        p.notification{
            font-size: 20px;
            font-weight: 400;
            width: 100%;
            text-align: center;
            font-style: italic;
            padding: 0 20px;
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translateY(-25%);
            transform: translateX(-50%);
        }

        .popup-info{
            position: absolute;
            bottom: 30px;
            left: 50%;
            width: 100%;
            max-width: 452px;
            text-align: center;
            transform: translateX(-50%);
            div{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                span.countdown{
                    padding: 0px 4%;
                    p{
                        text-transform: uppercase;
                        font-size: 20px;
                        font-family: 'Goma Block', sans-serif;
                        font-weight: 400;
                        text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
                        background: radial-gradient(127.37% 191.06% at 106.67% -3%, #1DBFFF 1.87%, #1FB8FB 3.31%, #2D81DC 15.69%, #3853C2 27.74%, #412FAE 39.17%, #4815A0 49.85%, #4C0597 59.46%, #4D0094 67.1%, #3C0075 74.63%, #26004C 85.8%, #180033 94.64%, #13002A 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
            }

            button{
                width: 200px;
                height: 46px;
                background: radial-gradient(127.37% 191.06% at 106.67% -3%, #1DBFFF 1.87%, #1FB8FB 3.31%, #2D81DC 15.69%, #3853C2 27.74%, #412FAE 39.17%, #4815A0 49.85%, #4C0597 59.46%, #4D0094 67.1%, #3C0075 74.63%, #26004C 85.8%, #180033 94.64%, #13002A 100%);
                color: #ffffff;
                font-size: 20px;
                font-weight: 700;
                border-radius: 60px;
                border: none;
            }
        }

        .btn-close{
            position: absolute;
            top: -5px;
            right: -10px;
            width: unset;
            height: unset;
            svg{
                font-size: 20px;
                color: rgba(255, 255, 255, 0.5);
            }
        }
    }

    @media only screen and (max-width: 1100px){
        .popup{
            width: 500px;
            height: 85vh;
            .loot-box{
                top: 75%;
                top: 65%;
            transform: translate(-55%, -75%);
            }

            .popup-info{
                button{
                    width: 150px;
                    font-size: 15px;
                }
            }
        }
    }

    @media only screen and (max-width: 530px){
        .popup{
            width: 420px;
            height: 85vh;
            .loot-box{
                top: 80%;
                top: 65%;
            transform: translate(-55%, -80%);
            }

            .btn-close{
                svg{
                    font-size: 30px;
                }
            }
        }
    }

    @media only screen and (max-width: 425px){
        .popup{
            width: 340px;
            height: 75vh;
            .loot-box{
                top: 80%;
                top: 65%;
            transform: translate(-55%, -80%);
            }

            p.notification{
                font-size: 16px;
            }

            .popup-info{
                div{
                    span.countdown{
                        margin-bottom: 0;
                        p{
                            font-size: 16px;
                        }
                    }
                }
            }

            .btn-close{
                right: -10px;
                svg{
                    font-size: 25px;
                }
            }
        }
    }
`;

export default PopupWrapper;