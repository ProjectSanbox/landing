import Container from 'components/Container'
import React, { useEffect } from 'react'
import { Line, SubTitle, Title, TopContent, Wrapper } from './styled'
import AOS from 'aos'

const TeamMembers = () => {
  useEffect(() => {
    AOS.init({
      throttleDelay: 99,
      debounceDelay: 50,
      disable: false,
      duration: 500,
      once: false,
      mirror: true,
    })
  })
  return (
    <Wrapper>
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
