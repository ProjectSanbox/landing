import React from 'react'
import { selectWeapons } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'
import { RenderItems } from './components'
import { Heading, MarketButton, MarketButtonWrapper, SectionContent, SectionWrapper, SliderWrapper } from './styled'

const WeaponSection = () => {
  const items = useAppSelector(selectWeapons)

  return (
    <SectionWrapper className="flex justify-content-center align-items-center">
      <SectionContent>
        <Heading>Acquire your NFT gears and have fun</Heading>
        <SliderWrapper>{items.length > 0 && <RenderItems items={items} />}</SliderWrapper>
        <MarketButtonWrapper>
          <MarketButton href={process.env.REACT_APP_DAPP_DOWNLOAD_LINK} target="_blank" rel="noreferrer">
            Marketplace
          </MarketButton>
        </MarketButtonWrapper>
      </SectionContent>
    </SectionWrapper>
  )
}

export default WeaponSection
