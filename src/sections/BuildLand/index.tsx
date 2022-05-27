import React, { FC, useState } from 'react'
import { Heading, LandWrapper, SectionContent } from './styled'
import landBackground from 'assets/images/land/background.png'
import { useAppSelector } from 'state/hooks'
import { selectLands } from 'state/global/global.slice'
import { RenderItems } from './components'

type BuildLandProps = {}

const BuildLand: FC<BuildLandProps> = () => {
  const lands = useAppSelector(selectLands)
  const [sectionBg, setSectionBg] = useState(landBackground)
  return (
    <LandWrapper height="1178px" background={sectionBg}>
      <SectionContent>
        <Heading>Build lands + share</Heading>
        <Heading>Passive Income</Heading>
        <p style={{ marginTop: '1rem' }}>Coming Soon</p>
        <RenderItems lands={lands} setSectionBg={setSectionBg} />
      </SectionContent>
    </LandWrapper>
  )
}

export default BuildLand
