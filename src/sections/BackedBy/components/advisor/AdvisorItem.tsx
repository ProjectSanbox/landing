import { Advisor } from 'models/advisor.model'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'

type AdvisorProps = {
  advisor: Advisor
  index: number
}

const AdvisorItem: FC<AdvisorProps> = ({ advisor, index }) => {
  return (
    <ItemWrapper data-aos="fade-down" data-aos-delay={index * 200}>
      <ItemImage>
        <img src={advisor.avatar} />
      </ItemImage>
      <ItemName>{advisor.name}</ItemName>
      <ItemDesc>{advisor.desc}</ItemDesc>
    </ItemWrapper>
  )
}

export default memo(AdvisorItem)

const ItemWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaMinWidth.minFromMedium`
    width: 300px;
  `};
`

const ItemImage = styled.div`
  position: relative;

  :after,
  :before {
    content: '';
    width: 90px;
    height: 120px;
    position: absolute;
    border: 3px solid ${({ theme }) => theme.yellow2};
  }

  :before {
    top: -2px;
    right: -2px;
    border-width: 3px 3px 0 0;
  }
  :after {
    bottom: -2px;
    left: -2px;
    border-width: 0 0 3px 3px;
  }
`
const ItemName = styled.div`
  font-family: 'Square721 BT Bold';
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${({ theme }) => theme.yellow2};
  margin-top: 18px;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: left;
`

const ItemDesc = styled.div`
  font-family: 'Square721 BT';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
`
