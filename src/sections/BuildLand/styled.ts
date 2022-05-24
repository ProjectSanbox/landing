import SectionWrapper from 'components/SectionWrapper'
import styled from 'styled-components/macro'
import landBg from 'assets/images/slider/land.png'

export const LandWrapper = styled(SectionWrapper)`
  position: relative;
  margin-top: -52px;
  overflow: hidden;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
`

export const SectionContent = styled.div`
  width: 100%;
  max-width: 1390px;
  margin: 0 auto;
  padding-top: 160px;
  text-align: center;
  color: ${({ theme }) => theme.white};
`
export const Heading = styled.h3`
  width: 693px;
  margin: 0 auto;
  color: ${({ theme }) => theme.white};
  font-family: 'Normandia';
  font-weight: 400;
  font-size: 56px;
  line-height: 57px;
  text-align: center;
  text-transform: uppercase;
`

export const LandSliderWrapper = styled.div`
  margin-top: 58px;
  .slick-track {
    display: flex;
    justify-content: space-between;
  }
  .slick-slide {
    width: 270px !important;
    height: 601px;
    & > div > div {
      background: url(${landBg}) center center no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
    &.slick-current > div > div,
    &:hover > div > div {
    }
  }
`
