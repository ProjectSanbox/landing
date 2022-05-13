import { btnDownload } from 'assets'
import SectionWrapper from 'components/SectionWrapper'
import styled from 'styled-components/macro'

export const BannerWrapper = styled(SectionWrapper)`
  position: relative;

  ${({ theme }) => theme.mediaWidth.upToMedium`
   padding: 90px 0;
`};

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #000000 12.45%, rgba(0, 0, 0, 0) 100%);
  }
`

export const BannerContent = styled.div`
  ${({ theme }) => theme.mediaMinWidth.minFromMedium`
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
  `};

  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.black2};

  p {
    margin-bottom: 0;
  }
`

const Title = styled.h1`
  font-family: 'Normandia';
  font-weight: 400;
  text-align: center;
  margin: 0;
`

export const SmallTitle = styled(Title)`
  font-size: 58px;
  line-height: 58px;
  color: ${({ theme }) => theme.common3};
`

export const BigTitle = styled(Title)`
  font-size: 58px;
  line-height: 58px;
  color: ${({ theme }) => theme.brand};
`

export const DownloadButtonWrapper = styled.div`
  margin-top: 75px;
`

export const DownloadButton = styled.a`
  display: inline-block;

  font-family: 'Square721 BT Bold';
  font-weight: 700;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
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

  ${({ theme }) => theme.mediaMinWidth.minFromMedium`
    width: 496px;
    height: 156px;
    font-size: 55px;
    line-height: 156px;
    padding: 0;
  `};
`
