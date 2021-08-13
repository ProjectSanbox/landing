import styled from "styled-components";
import backgroundVideo from 'assets/images/introduce/backgroundVideo.png';
import thumbnailVideo from 'assets/images/introduce/thumbnailVideo.png';

const IntroduceWrapper = styled.div`
  padding-top: 60px;
  background: linear-gradient(133.84deg, #4E4E4E -16.04%, #333333 9.33%, #1A1A1A 32.02%, #1A1A1A 62.06%, #262626 87.42%, #4E4E4E 112.12%);
  .introduce{
    width: 97%;
    margin-left: 3%;
    display: flex;
    .introduce-content{
        img{
          width: 99px;
          margin-bottom: 30px;
        }

        p{
          font-size: 24px;
          font-style: italic;
          padding-right: 193px;
          font-weight: 400;
          line-height: 33.6px;
        }

        .introduce-weapon{
          display: flex;
          img{
            width: 170px;
            margin-right: 30px;
          }
        }
    }

    .introduce-video{
      flex: 160%;
      height: 760px;
      background-image: url(${backgroundVideo});
      background-size: contain;
      background-repeat: no-repeat;
      position: relative;
      .plyr{
        width: 600px;
        position: absolute;
        bottom: 20%;
        left: -20%;
        .plyr__poster{
          background-image: url(${thumbnailVideo})!important;
        }
      }

      p{
        color: #ffffff;
        text-transform: uppercase;
        font-weight: 700;
        position: absolute;
        right: 15%;
        bottom: 20%;
      }
    }
  }

  @media only screen and (max-width: 1400px){
    .introduce{
      .introduce-video{
        p{
          right: 5%;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px){
    .introduce{
      .introduce-video{
        .plyr{
          bottom: 45%;
        }
      }
    }
  }

  @media only screen and (max-width: 975px){
    .introduce{
      flex-direction: column;
      .introduce-content{
        img{
          margin: auto;
        }

        p{
          padding: 5%;
        }
      }

      .introduce-video{
        position: unset;
        .plyr{
          position: relative;
          top: 0;
          left: 0;
          width: 97%;
        }

        p{
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 575px){
    .introduce{
      .introduce-content{
        .introduce-weapon{
          img:nth-last-child(1){
            display: none;
          }
        }
        p{
          font-size: 20px;
        }
      }
    }
  }
`;

export default IntroduceWrapper;