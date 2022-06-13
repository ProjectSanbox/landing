import { Item } from 'models/item.model'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import statsBg from 'assets/images/slider/champ-stats.png'

type StatsProps = { item: Item }

const ItemStats: FC<StatsProps> = ({ item }) => {
  return (
    <Wrapper>
      <div>
        <Span style={{ marginRight: '10px' }}>Rarity</Span>
        <Title>{item.rarityLabel}</Title>
      </div>
      <div>
        <Span style={{ marginRight: '10px' }}>Skill</Span>
        <Title>Coming soon</Title>
      </div>
    </Wrapper>
  )
}

export default memo(ItemStats)

const Wrapper = styled.div`
  width: 535px;
  height: 250px;
  padding: 16px 25px;
  background: url(${statsBg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  & > div:not(:last-child) {
    margin-bottom: 16px;
  }
`

const Span = styled.span`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.yellow7};
`

const Title = styled(Span)`
  font-weight: 800;
`
