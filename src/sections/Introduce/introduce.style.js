import styled from "styled-components";
import backgroundVideo from 'assets/images/introduce/backgroundVideo.png';
import thumbnailVideo from 'assets/images/introduce/thumbnailVideo.png';



const root = {
  height_background: '760px'
}

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
      height: ${root.height_background};
      background-image: url(${backgroundVideo});
      background-size: cover;
      background-repeat: no-repeat;
      .video-wrapper{
        display: flex;
        align-items: flex-end;
        margin-top: calc(${root.height_background} - (${root.height_background} * (55/100)));
        position: relative;
        right: 20%;
        div{
          margin-right: 20px;
          .plyr{
            width: 600px;
            .plyr__poster{
              background-image: url(${thumbnailVideo})!important;
            }
          }
        }
      }
      
      p{
        color: #ffffff;
        text-transform: uppercase;
        font-family: 'Goma Block', sans-serif;
        font-weight: 400;
      }
    }
  }

  @media only screen and (max-width: 1200px){
    .introduce{
      .introduce-content{
        .introduce-weapon{
          img:nth-last-child(1){
            display: none;
          }
        }
      }

      .introduce-video{
        .video-wrapper{
          div{
            .plyr{
              width: 400px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 975px){
    .introduce{
      flex-direction: column;
      margin: auto;
      .introduce-content{
        .introduce-weapon{
          img{
            margin: 0px auto;
          }
        }

        p{
          padding: 5%;
        }
      }

      .introduce-video{
        flex: 100%;
        height: 400px;
        .video-wrapper{
          margin-top: 0;
          right: 0;
          div{
            width: 100%;
            margin: 0;
            .plyr{
              width: 100%;
            }
          }
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
        img{
          margin: auto;
        }
        .introduce-weapon{
          img{
            width: 150px;
          }
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