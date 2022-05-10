import Container from 'components/Container'
import { SupportedBlockId } from 'constant/menus'
import React from 'react'
import { Line, SubTitle, Title, TopContent, Wrapper } from './styled'

const TeamMembers = () => {
  return (
    <Wrapper id={SupportedBlockId.TEAM}>
      <Container>
        <TopContent>
          <Title>Team Members</Title>
          <SubTitle>The Minders Studio</SubTitle>
          <Line />
          <p>A group of passionate and talented soldiers in game industry</p>
          <p>With diligence and dedication to bring the best game experience to players</p>
        </TopContent>
      </Container>
    </Wrapper>
  )
}

export default TeamMembers
