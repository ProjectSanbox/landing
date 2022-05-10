import AOS from 'aos'
import { SupportedBlockId } from 'constant/menus'
import React, { useEffect } from 'react'
import { BannerContent, BannerWrapper, BigTitle, DownloadButton, DownloadButtonWrapper, SmallTitle } from './styled'

const Banner = () => {
  useEffect(() => {
    AOS.init({
      throttleDelay: 99,
      debounceDelay: 50,
      disable: false,
      duration: 500,
      once: false,
      mirror: true,
    })
  })
  return (
    <BannerWrapper id={SupportedBlockId.HOME}>
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
          <DownloadButton
            href="https://drive.google.com/uc?export=download&id=1XhyjO_ehgSytZWcqnNYZQYvA3YjzUtbk"
            target="_blank"
            rel="noreferrer"
          >
            Play Game
          </DownloadButton>
        </DownloadButtonWrapper>
      </BannerContent>

      {/*
      <Title as="span" data-aos="fade-up" data-aos-delay="500">
        Choose your NFT Gears and jump into this crypto powered real time shooter!Choose your NFT Gears and jump into
        this crypto.
      </Title> */}
      {/*  <Box className="register">
                <Button className="banner-btn">
                  <Text as="span">
                    <a href="https://drive.google.com/file/d/122-s6QkUhDxvr_lREFdERxvjBJbr5w5c/view?usp=sharing/">
                      play game
                    </a>
                  </Text>
                </Button>
              </Box> */}
    </BannerWrapper>
  )
}

export default Banner
