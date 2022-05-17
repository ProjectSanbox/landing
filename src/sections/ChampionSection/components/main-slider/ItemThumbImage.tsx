import { Item } from 'models/item.model'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import champThumb from 'assets/images/slider/champ-thumb.png'

type ThumbProps = {
  item: Item
}

const ItemThumbImage: FC<ThumbProps> = () => {
  return <Wrapper>111</Wrapper>
}

export default memo(ItemThumbImage)

const Wrapper = styled.div`
  width: calc((100% -14px) / 2);

  background: url(${champThumb}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`
