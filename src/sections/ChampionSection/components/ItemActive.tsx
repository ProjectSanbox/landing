import { Item } from 'models/item.model'
import React, { FC } from 'react'
import styled from 'styled-components/macro'

type ItemImageProps = {
  item: Item
}

const ItemActive: FC<ItemImageProps> = ({ item }) => {
  return (
    <Wrapper className="flex justify-content-between">
      <MainImage>
        <img src={item.fullSize || item.image} data-aos="fade-right" />
      </MainImage>
    </Wrapper>
  )
}

export default ItemActive

const Wrapper = styled.div`
  position: relative;
`

const MainImage = styled.div`
  width: 100%;
  max-width: 50%;
`
