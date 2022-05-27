import { roadmapBackground } from 'assets'
import bottomHeading from 'assets/images/roadmap/bottom-heading.png'
import roadmap from 'assets/images/roadmap/roadmap.png'
import { SupportedBlockId } from 'constant/menus'
import React, { FC } from 'react'
import { Heading, RoadmapImage, RoadmapWrapper, TopHeading } from './styled'

type RoadmapProps = {}

const Roadmap: FC<RoadmapProps> = () => {
  return (
    <RoadmapWrapper background={roadmapBackground} height="1076px" id={SupportedBlockId.ROADMAP}>
      <TopHeading>
        <Heading fontSize={62} lineHeight={63}>
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
