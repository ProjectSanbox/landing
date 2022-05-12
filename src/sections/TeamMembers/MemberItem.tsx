import { Member } from 'models/member.model'
import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { ItemWrapper } from './styled'

type ItemProps = {
  item: Member
  index: number
}

const MemberItem: FC<ItemProps> = ({ item, index }) => {
  return (
    <ItemWrapper data-aos="flip-left" data-aos-duration={(index % 4) * 500}>
      <ItemImage>
        <img src={item.avatar} />
      </ItemImage>
      <ItemName>{item.name}</ItemName>
      <ItemRole>{item.role}</ItemRole>
    </ItemWrapper>
  )
}

export default MemberItem

const ItemImage = styled.div`
  img {
    max-width: 160px;
    margin: 0 auto;
    border: 3px solid ${({ theme }) => theme.blue1};
    border-radius: 50%;
  }
`

const ItemName = styled.div`
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  background: linear-gradient(180deg, #e7d10e 0%, #fe9b07 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const ItemRole = styled.div`
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`
