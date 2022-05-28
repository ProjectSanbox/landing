import { weaponSectionBackground } from 'assets'
import React from 'react'
import { selectWeapons } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'
import { RenderItems } from './components'
import {
  Heading,
  MarketButton,
  MarketButtonWrapper,
  SectionContent,
  SliderWrapper,
  WeaponSliderWrapper,
} from './styled'

const WeaponSection = () => {
  const items = useAppSelector(selectWeapons)

  return (
    <WeaponSliderWrapper
      height="1115px"
      background={weaponSectionBackground}
      className="flex justify-content-center align-items-center"
    >
      <SectionContent>
        <Heading fontSize={50} lineHeight={50}>
          Acquire your NFT gears
        </Heading>
        <Heading fontSize={50} lineHeight={50}>
          and jump into Planetsandbox Battleverse
        </Heading>
        <SliderWrapper>{items.length > 0 && <RenderItems items={items} />}</SliderWrapper>
        <MarketButtonWrapper>
          <MarketButton href={process.env.REACT_APP_DAPP_MARKET_LINK} target="_blank" rel="noreferrer">
            Marketplace
          </MarketButton>
        </MarketButtonWrapper>
      </SectionContent>
    </WeaponSliderWrapper>
  )
}

export default WeaponSection
