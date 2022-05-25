import { championSectionBackground } from 'assets'
import { Item } from 'models/item.model'
import React, { FC, useEffect, useState } from 'react'
import { selectChampions, selectSocials } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'
import { RenderItems, SocialLinks } from './components'
import { ChampSliderWrapper, Container, Heading, SectionHeading, SubHeading } from './styled'

type ChampionProps = {}

const ChampionSection: FC<ChampionProps> = () => {
  const items = useAppSelector(selectChampions)
  const socials = useAppSelector(selectSocials)

  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  useEffect(() => {
    if (!items[0]) return
    setSelectedItem(items[0])
  }, [items])

  return (
    <ChampSliderWrapper height="1210px" background={championSectionBackground}>
      <SectionHeading>
        <Heading>planetsandbox</Heading>
        <SubHeading>
          <span className="line"></span>
          <span className="sub-heading">Champion</span>
        </SubHeading>
      </SectionHeading>
      <Container>
        {items.length > 0 && (
          <RenderItems items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        )}
      </Container>
      {socials && <SocialLinks socials={socials} />}
    </ChampSliderWrapper>
  )
}

export default ChampionSection
