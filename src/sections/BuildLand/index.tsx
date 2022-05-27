import React, { FC } from 'react'
import { Heading, LandWrapper, SectionContent } from './styled'
import { landBackground } from 'assets'
import { useAppSelector } from 'state/hooks'
import { selectLands } from 'state/global/global.slice'
import { RenderItems } from './components'

type BuildLandProps = {}

const BuildLand: FC<BuildLandProps> = () => {
  const lands = useAppSelector(selectLands)
  return (
    <LandWrapper height="1170px" background={landBackground}>
      <SectionContent>
        <Heading>Build lands + share</Heading>
        <Heading>Passive Income</Heading>
        <p style={{ marginTop: '1rem' }}>Coming Soon</p>
        <RenderItems lands={lands} />
      </SectionContent>
    </LandWrapper>
  )
}

export default BuildLand
