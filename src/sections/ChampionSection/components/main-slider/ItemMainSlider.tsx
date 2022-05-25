import { Item } from 'models/item.model'
import React, { FC } from 'react'
import styled from 'styled-components/macro'

import { ItemInfoTab } from '.'
import ItemThumb from './ItemThumb'

type ItemImageProps = {
  item: Item
}

const ItemMainSlider: FC<ItemImageProps> = ({ item }) => {
  return (
    <ItemMainWrapper className="flex justify-content-between align-items-end flex-column">
      <ItemThumb item={item} />
      <ItemInfoTab item={item} />
    </ItemMainWrapper>
  )
}

export default ItemMainSlider

const ItemMainWrapper = styled.div`
  width: 100%;
  gap: 55px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;
  `};
`
