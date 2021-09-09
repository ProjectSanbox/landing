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
        width: 560px;
        height: 95vh;
        background-color: linear-gradient(179.55deg, #552D91 4.95%, #4D6FA3 39.58%, #41CCBC 85.57%);
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .popup-logo{
            width: 85.205%;
            margin: auto;
        }

        .loot-box{
            width: 74.464%;
           position: absolute;
           left: 55%;
           top: 65%;
           transform: translate(-55%, -65%);
        }

        .popup-info{
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            p{
                font-size: 24px;
                font-weight: 400;
                font-style: italic;
            }

            button{
                width: 240px;
                height: 56px;
                background: radial-gradient(127.37% 191.06% at 106.67% -3%, #1DBFFF 1.87%, #1FB8FB 3.31%, #2D81DC 15.69%, #3853C2 27.74%, #412FAE 39.17%, #4815A0 49.85%, #4C0597 59.46%, #4D0094 67.1%, #3C0075 74.63%, #26004C 85.8%, #180033 94.64%, #13002A 100%);
                color: #ffffff;
                font-size: 20px;
                font-weight: 900;
                border-radius: 60px;
                border: none;
            }
        }

        .btn-close{
            position: absolute;
            top: -20px;
            right: -40px;
            width: unset;
            height: unset;
            svg{
                font-size: 40px;
            }
        }
    }
`;

export default PopupWrapper;