import { DEFAULT_MEMBERS } from 'constant/members'
import { SupportedBlockId } from 'constant/menus'
import React from 'react'
import MemberItem from './MemberItem'
import { Line, MembersListWrapper, SubTitle, Title, TopContent, Wrapper } from './styled'

const TeamMembers = () => {
  return (
    <Wrapper id={SupportedBlockId.TEAM}>
      <TopContent>
        <Title>Team Members</Title>
        <SubTitle>The Minders Studio</SubTitle>
        <Line />
        <p>A group of passionate and talented soldiers in game industry</p>
        <p>With diligence and dedication to bring the best game experience to players</p>
      </TopContent>
      <MembersListWrapper>
        {DEFAULT_MEMBERS.map((member, index) => (
          <MemberItem key={index} index={index} item={member} />
        ))}
      </MembersListWrapper>
      <p>And more than 20 skilled enthusiasts with rich experience in the gaming industry</p>
    </Wrapper>
  )
}

export default TeamMembers
