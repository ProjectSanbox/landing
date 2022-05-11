import React, { FC } from 'react'
import { selectChampions } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'
import { RenderItems } from './components'
import { SectionWrapper, Container, Heading, SectionHeading, SubHeading } from './styled'

type ChampionProps = {}

const ChampionSection: FC<ChampionProps> = () => {
  const items = useAppSelector(selectChampions)

  return (
    <SectionWrapper>
      <SectionHeading>
        <Heading>planetsandbox</Heading>
        <SubHeading>
          <span className="line"></span>
          <span className="sub-heading">Champion</span>
        </SubHeading>
      </SectionHeading>
      <Container>{items.length > 0 && <RenderItems items={items} />}</Container>
    </SectionWrapper>
  )
}

export default ChampionSection
