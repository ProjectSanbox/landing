import { btnDownload, headerBackground } from 'assets'
import styled from 'styled-components/macro'

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(${headerBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #000000 12.45%, rgba(0, 0, 0, 0) 100%);
  }
`

export const BannerContent = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  font-size: 57.5474px;
  line-height: 58px;
  color: ${({ theme }) => theme.common3};
`

export const BigTitle = styled(Title)`
  font-size: 57.5474px;
  line-height: 58px;
  color: ${({ theme }) => theme.brand};
`

export const DownloadButtonWrapper = styled.div`
  margin-top: 75px;
`

export const DownloadButton = styled.a`
  display: inline-block;
  width: 496px;
  height: 156px;
  font-family: 'Square721 BT';
  font-weight: 700;
  font-size: 55.4667px;
  line-height: 156px;
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
