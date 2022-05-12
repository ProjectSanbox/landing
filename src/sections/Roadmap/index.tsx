import { SupportedBlockId } from 'constant/menus'
import React, { FC } from 'react'
import { Heading, RoadmapImage, RoadmapWrapper, TopHeading } from './styled'
import bottomHeading from 'assets/images/roadmap/bottom-heading.png'
import roadmap from 'assets/images/roadmap/roadmap.png'

type RoadmapProps = {}

const Roadmap: FC<RoadmapProps> = () => {
  return (
    <RoadmapWrapper id={SupportedBlockId.ROADMAP}>
      <TopHeading>
        <Heading>
          <span>Roadmap</span>
        </Heading>
        <img src={bottomHeading} />
      </TopHeading>
      <RoadmapImage>
        <img src={roadmap} data-aos="fade-right" />
      </RoadmapImage>
    </RoadmapWrapper>
  )
}

export default Roadmap
