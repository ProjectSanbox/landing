import { Item } from 'models/item.model'
import React, { FC } from 'react'
import styled from 'styled-components/macro'

type ItemImageProps = {
  item: Item
}

const ItemActive: FC<ItemImageProps> = ({ item }) => {
  return (
    <Wrapper>
      <MainImage>
        <img src={item.fullSize || item.image} />
      </MainImage>
    </Wrapper>
  )
}

export default ItemActive

const Wrapper = styled.div`
  position: relative;
`

const MainImage = styled.div``
