import SectionWrapper from 'components/SectionWrapper'
import styled from 'styled-components/macro'
import landActiveBg from 'assets/images/slider/land_active.png'

export const LandWrapper = styled(SectionWrapper)`
  position: relative;
  margin-top: -52px;
  overflow: hidden;
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
  .slick-slide {
    &.slick-current > div > div,
    &:hover > div > div {
      background-image: url(${landActiveBg});
    }
  }
`
