import React, { FC } from 'react'
import { selectChampions } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'
import { RenderItems } from './components'
import { ChampSliderWrapper, Container, Heading, SectionHeading, SubHeading } from './styled'

import { championSectionBackground } from 'assets'

type ChampionProps = {}

const ChampionSection: FC<ChampionProps> = () => {
  const items = useAppSelector(selectChampions)

  return (
    <ChampSliderWrapper height="1210px" background={championSectionBackground}>
      <SectionHeading>
        <Heading>planetsandbox</Heading>
        <SubHeading>
          <span className="line"></span>
          <span className="sub-heading">Champion</span>
        </SubHeading>
      </SectionHeading>
      <Container>{items.length > 0 && <RenderItems items={items} />}</Container>
    </ChampSliderWrapper>
  )
}

export default ChampionSection
