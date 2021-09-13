import styled from "styled-components";
import backgroundVideo from 'assets/images/introduce/backgroundVideo.png';
import thumbnailVideo from 'assets/images/introduce/thumbnailVideo.jpg'

const root = {
  height_background: '830px'
}

const IntroduceWrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background: linear-gradient(133.84deg, #4E4E4E -16.04%, #333333 9.33%, #1A1A1A 32.02%, #1A1A1A 62.06%, #262626 87.42%, #4E4E4E 112.12%);
  .introduce{
    width: 100%;
    .introduce-content{
        img{
          width: 99px;
          margin-bottom: 30px;
        }
        p{
          font-size: 22px;
          font-style: italic;
          padding-right: 193px;
          font-weight: 400;
          line-height: 33.6px;
        }
    }

    .introduce-video{
      padding: 0px 40px;
      width: 100%;
      height: ${root.height_background};
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      .video-wrapper{
        margin-top: 60px;
        div{
          .plyr{
            width: 100%;
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
        font-size: 24px;
        margin-top: 23px;
      }
    }
  }

  @media only screen and (max-width: 1200px){
    .introduce{
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
    padding-bottom: 0;
    .introduce{
      flex-direction: column;
      margin: auto;
      .introduce-content{
        margin-top: 0;
        .heading{
          text-align: center;
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
        p{
          font-size: 20px;
        }
      }
    }
  }
`;

export default IntroduceWrapper;