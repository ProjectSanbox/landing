import { teamsBackground } from 'assets'
import Container from 'components/Container'
import { DEFAULT_MEMBERS } from 'constant/members'
import { SupportedBlockId } from 'constant/menus'
import React from 'react'
import Slider from 'react-slick'
import MemberItem from './MemberItem'
import { Line, SubTitle, Heading, TopContent, Wrapper } from './styled'

const TeamMembers = () => {
  const settings = {
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <Wrapper background={teamsBackground} id={SupportedBlockId.TEAM}>
      <Container>
        <TopContent>
          <Heading fontSize={60} lineHeight={40}>
            Team Members
          </Heading>
          <SubTitle>The Minders Studio</SubTitle>
          <Line />
          <p>A group of passionate and talented soldiers in game industry</p>
          <p>With diligence and dedication to bring the best game experience to players</p>
        </TopContent>
        <Slider {...settings}>
          {DEFAULT_MEMBERS.map((member, index) => (
            <MemberItem key={index} index={index} item={member} />
          ))}
        </Slider>
        <p style={{ marginTop: '40px' }}>
          And more than 20 skilled enthusiasts with rich experience in the gaming industry
        </p>
      </Container>
    </Wrapper>
  )
}

export default TeamMembers
