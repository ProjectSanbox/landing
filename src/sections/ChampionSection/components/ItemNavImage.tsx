import { Item } from 'models/item.model'
import React, { FC } from 'react'
import styled from 'styled-components/macro'

type ItemImageProps = {
  item: Item
}

const ItemNavImage: FC<ItemImageProps> = ({ item }) => {
  return (
    <ItemImageWrapper>
      <img src={item.image} />
    </ItemImageWrapper>
  )
}

export default ItemNavImage

const ItemImageWrapper = styled.div`
  img {
    width: 80px;
  }
`
