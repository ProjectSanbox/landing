import { Item } from 'models/item.model'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'

type MainImageProps = { item: Item }

const MainItemImage: FC<MainImageProps> = ({ item }) => {
  return (
    <MainImage>
      <img src={item.fullSize || item.image} alt="" />
    </MainImage>
  )
}

export default memo(MainItemImage)

const MainImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`
