import { btnDownload, weaponSliderBackground } from 'assets'
import SectionWrapper from 'components/SectionWrapper'
import styled from 'styled-components/macro'

export const WeaponSliderWrapper = styled(SectionWrapper)`
  position: relative;
  margin-top: -62px;
  z-index: 2;
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
  width: 100%;
  height: 550px;
  margin: 50px auto 0 auto;
  background: url(${weaponSliderBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

export const MarketButtonWrapper = styled.div`
  margin-top: 42px;
  text-align: center;
`

export const MarketButton = styled.a`
  display: inline-block;
  width: 313px;
  height: 99px;
  font-family: 'Square721 BT Bold';
  font-weight: 700;
  font-size: 32px;
  line-height: 99px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black1};
  background: url(${btnDownload}) no-repeat center center;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  :hover {
    color: ${({ theme }) => theme.black1};
  }
`
