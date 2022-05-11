import { weaponSectionBackground, weaponSliderBackground } from 'assets'
import styled from 'styled-components/macro'

export const SectionWrapper = styled.div`
  width: 100%;
  height: 1115px;
  position: relative;
  background: url(${weaponSectionBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-top: -52px;
`

export const SectionContent = styled.div`
  width: 100%;
  max-width: 1244px;
  margin: 0 auto;
`

export const Heading = styled.h3`
  width: 693px;
  margin: 0 auto;
  color: ${({ theme }) => theme.common3};
  font-family: 'Normandia';
  font-weight: 400;
  font-size: 49.4545px;
  line-height: 50px;
  text-align: center;
  text-transform: uppercase;
`

export const SliderWrapper = styled.div`
  width: 1244px;
  height: 550px;
  margin: 50px auto 0 auto;
  background: url(${weaponSliderBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`
