import { Item } from 'models/item.model'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'

type MainImageProps = { selectedItem: Item }

const MainItemImage: FC<MainImageProps> = ({ selectedItem }) => {
  return (
    <MainImage>
      <img src={selectedItem.fullSize || selectedItem.image} alt="" />
    </MainImage>
  )
}

export default memo(MainItemImage)

const MainImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`
