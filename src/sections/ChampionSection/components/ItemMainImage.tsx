import { Item } from 'models/item.model'
import React, { FC } from 'react'
import styled from 'styled-components/macro'

type ItemImageProps = {
  item: Item
}

const ItemMainImage: FC<ItemImageProps> = ({ item }) => {
  return (
    <ItemImageWrapper>
      <img src={item.fullSize || item.image} />
    </ItemImageWrapper>
  )
}

export default ItemMainImage

const ItemImageWrapper = styled.div``
