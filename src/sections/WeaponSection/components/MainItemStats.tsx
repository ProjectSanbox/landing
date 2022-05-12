import { Item } from 'models/item.model'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import leftTitle from 'assets/images/background/weapon-left-title.png'

type StatsProps = {
  item: Item
}

const MainItemStats: FC<StatsProps> = ({ item }) => {
  console.log(item)

  return (
    <ContentWrapper>
      <Title>
        <span>{item.name}</span>
      </Title>
    </ContentWrapper>
  )
}

export default memo(MainItemStats)

const ContentWrapper = styled.div`
  margin-top: 90px;
`

const Title = styled.h5`
  font-family: 'Normandia';
  font-weight: 400;
  font-size: 32px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.yellow2};
  margin-bottom: 14px;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.15);

  span {
    position: relative;
    display: inline-block;

    :before {
      content: '';
      position: absolute;
      bottom: 10px;
      height: 3px;
      width: 139px;
      margin: 0 10px;
    }
    :before {
      right: 100%;
      background-image: url(${leftTitle});
    }
  }
`
