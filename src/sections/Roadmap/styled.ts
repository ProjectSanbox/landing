import leftHeading from 'assets/images/roadmap/left-heading.png'
import rightHeading from 'assets/images/roadmap/right-heading.png'
import SectionHeading from 'components/SectionHeading'
import SectionWrapper from 'components/SectionWrapper'
import styled from 'styled-components/macro'

export const RoadmapWrapper = styled(SectionWrapper)`
  padding: 166px 0 85px 0;
  position: relative;
  text-align: center;
  margin-top: -52px;
  z-index: -1;
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

export const Heading = styled(SectionHeading)`
  display: inline-block;
  text-shadow: 0px 0px 2px #ffd700, 0px 0px 7px #ba6f02;

  span {
    position: relative;
    display: inline-block;

    :after,
    :before {
      ${({ theme }) => theme.mediaMinWidth.minFromMedium`
        content: '';
    `};

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
