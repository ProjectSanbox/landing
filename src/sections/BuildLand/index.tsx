import landBackground from 'assets/images/land/background.png'
import React, { FC, useState } from 'react'
import { selectLands } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'
import { Content, RenderItems } from './components'
import { LandWrapper, SectionContent } from './styled'

type BuildLandProps = {}

const BuildLand: FC<BuildLandProps> = () => {
  const lands = useAppSelector(selectLands)
  const [sectionBg, setSectionBg] = useState(landBackground)
  return (
    <LandWrapper height="1178px" background={sectionBg}>
      <SectionContent>
        <Content />
        <RenderItems lands={lands} setSectionBg={setSectionBg} />
      </SectionContent>
    </LandWrapper>
  )
}

export default BuildLand
