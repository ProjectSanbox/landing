import { headerBackground } from 'assets'
import { SupportedBlockId } from 'constant/menus'
import React from 'react'
import { BannerContent, BannerWrapper, BigTitle, DownloadButton, DownloadButtonWrapper, SmallTitle } from './styled'

const Banner = () => {
  return (
    <BannerWrapper height="1380px" background={headerBackground} id={SupportedBlockId.HOME}>
      <div className="overlay"></div>
      <BannerContent>
        <SmallTitle data-aos="fade-up" className="heading">
          build your worlds
        </SmallTitle>
        <BigTitle data-aos="fade-up" data-aos-delay="300" style={{ marginBottom: '16px' }}>
          rules your games
        </BigTitle>
        <p data-aos="fade-up" data-aos-delay="500">
          Download PlanetSandbox for Windows
        </p>
        <DownloadButtonWrapper data-aos="fade-up" data-aos-delay="500">
          <DownloadButton href={process.env.REACT_APP_DAPP_DOWNLOAD_LINK} target="_blank" rel="noreferrer">
            Play Game
          </DownloadButton>
        </DownloadButtonWrapper>
      </BannerContent>
    </BannerWrapper>
  )
}

export default Banner
