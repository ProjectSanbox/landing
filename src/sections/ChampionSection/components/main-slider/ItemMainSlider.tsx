import { Item } from 'models/item.model'
import React, { FC } from 'react'
import styled from 'styled-components/macro'

import ItemThumb from './ItemThumb'
import ItemStats from './ItemStats'

type ItemImageProps = {
  item: Item
}

const ItemMainSlider: FC<ItemImageProps> = ({ item }) => {
  return (
    <ItemMainWrapper className="flex justify-content-between align-items-end flex-column">
      <MainImageWrapper>
        <img src={item.fullSize || item.image} alt="" />
      </MainImageWrapper>
      <ItemThumb item={item} />
      <ItemStats item={item} />
    </ItemMainWrapper>
  )
}

export default ItemMainSlider

const ItemMainWrapper = styled.div`
  width: 100%;
  gap: 20px;
  position: relative;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;
  `};
`

const MainImageWrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 1650px;
  left: 40px;
  z-index: 2;
`
