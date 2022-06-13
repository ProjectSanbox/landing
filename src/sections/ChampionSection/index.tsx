import { championSectionBackground } from 'assets'
import React, { FC } from 'react'
import { selectChampions } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'
import { RenderItems } from './components'
import { ChampSliderWrapper, Heading, SectionHeading, SubHeading } from './styled'

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

      {items.length > 0 && <RenderItems items={items} />}
    </ChampSliderWrapper>
  )
}

export default ChampionSection
