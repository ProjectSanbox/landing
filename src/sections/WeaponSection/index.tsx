import React from 'react'
import { selectWeapons } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'
import { RenderItems } from './components'
import { Heading, SectionContent, SectionWrapper, SliderWrapper } from './styled'

const WeaponSection = () => {
  const items = useAppSelector(selectWeapons)

  return (
    <SectionWrapper className="flex justify-content-center align-items-center">
      <SectionContent>
        <Heading>Acquire your NFT gears and have fun</Heading>
        <SliderWrapper>{items.length > 0 && <RenderItems items={items} />}</SliderWrapper>
      </SectionContent>
    </SectionWrapper>
  )
}

export default WeaponSection
