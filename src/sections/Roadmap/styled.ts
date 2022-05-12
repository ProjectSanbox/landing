import { roadmapBackground } from 'assets'
import styled from 'styled-components/macro'
import leftHeading from 'assets/images/roadmap/left-heading.png'
import rightHeading from 'assets/images/roadmap/right-heading.png'

export const RoadmapWrapper = styled.div`
  width: 100%;
  height: 1076px;
  padding: 166px 0 85px 0;
  position: relative;
  background: url(${roadmapBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  text-align: center;
`

export const TopHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  & > img {
    width: 36px;
    height: 18px;
  }
`

export const Heading = styled.h3`
  display: inline-block;
  font-family: 'Normandia';
  font-weight: 400;
  font-size: 62px;
  line-height: 63px;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  text-shadow: 0px 0px 2px #ffd700, 0px 0px 7px #ba6f02;

  span {
    position: relative;
    display: inline-block;

    :after,
    :before {
      content: '';
      position: absolute;
      top: 25%;
      width: 461.31px;
      height: 46.21px;
      margin: 0 17px;
    }
    :before {
      right: 100%;
      background-image: url(${leftHeading});
    }
    :after {
      left: 100%;
      background-image: url(${rightHeading});
    }
  }
`

export const RoadmapImage = styled.div`
  padding-right: 23px;
  text-align: left;
  img {
    max-width: 1896px;
  }
`
