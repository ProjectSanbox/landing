import { Item } from 'models/item.model'
import React, { FC } from 'react'
import styled from 'styled-components/macro'

type ItemImageProps = {
  item: Item
}

const ItemNavImage: FC<ItemImageProps> = ({ item }) => {
  return (
    <ItemImageWrapper className="flex justify-content-center align-items-center">
      <img src={item.image} />
    </ItemImageWrapper>
  )
}

export default ItemNavImage

const ItemImageWrapper = styled.div`
  width: 96px;
  height: 111px;
  margin: 0 auto;
  img {
    width: 80px;
  }
`
