import { weaponSectionBackground } from 'assets'
import React from 'react'
import { selectWeapons } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'
import { RenderItems } from './components'
import { Heading, MarketButton, MarketButtonWrapper, SectionContent, SliderWrapper, Wrapper } from './styled'

const WeaponSection = () => {
  const items = useAppSelector(selectWeapons)

  return (
    <Wrapper
      height="1115px"
      background={weaponSectionBackground}
      className="flex justify-content-center align-items-center"
    >
      <SectionContent>
        <Heading>Acquire your NFT gears and have fun</Heading>
        <SliderWrapper>{items.length > 0 && <RenderItems items={items} />}</SliderWrapper>
        <MarketButtonWrapper>
          <MarketButton href={process.env.REACT_APP_DAPP_DOWNLOAD_LINK} target="_blank" rel="noreferrer">
            Marketplace
          </MarketButton>
        </MarketButtonWrapper>
      </SectionContent>
    </Wrapper>
  )
}

export default WeaponSection
