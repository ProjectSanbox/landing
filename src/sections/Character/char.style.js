import styled from 'styled-components'
import CharBackground from '../../assets/images/character/CharBackground.png'
import BackGround from '../../assets/images/character/BackGround.svg'

const char_height = '1199.5px'

const CharWrapper = styled.div`
  height: ${char_height};
  width: 100%;
  background-image: url(${BackGround});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  top: -60px;

  @font-face {
    font-family: "Normandia";
    src: local("Normandia"),
         url("../../assets/fonts/Normandia/Normandia.ttf") format("ttf");
  }
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap');

  .char-heading{
    position: absolute;
    top: 135px;
    left: 570px;

    .heading-lg{
      font-family: 'Normandia';
      font-size: 80.25px;
      color: rgba(125, 125, 125, 1);
    }
    .char-subtitle{
      position: relative;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      top: -60px;

      .heading-md{
        margin: 0;
        font-size: 45.86px;
        color: rgba(125, 125, 125, 1);
        font-family: 'Outfit', sans-serif;
        font-weight: 700;
      }
      hr{
        width: 165.51px;
        height: 2.86598px;
        background-color: #7D7D7D;
        border: none;
        /* margin: 0; */
        margin: 29px 16.48px 0 0;
      }
    }
  }
  .char-content{
    position: absolute;
    bottom: 0;

    img{
      margin-left: 50px;
    }
  }

`
export default CharWrapper