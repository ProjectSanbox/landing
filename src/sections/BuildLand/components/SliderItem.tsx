import { Land } from 'models/land.model'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import landBg from 'assets/images/slider/land_normal.png'

type ItemProps = {
  item: Land
}

const SliderItem: FC<ItemProps> = ({ item }) => {
  return (
    <ItemWrapper overlay={item.bg}>
      <div className="overlay"></div>
    </ItemWrapper>
  )
}

export default memo(SliderItem)

const ItemWrapper = styled.div<{ overlay: string }>`
  width: 265px;
  height: 590px;
  background: url(${landBg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${({ overlay }) => overlay}) no-repeat center center;
  }
`
