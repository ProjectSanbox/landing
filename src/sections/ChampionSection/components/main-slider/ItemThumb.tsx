import { Item } from 'models/item.model'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import thumbBg from 'assets/images/slider/champ-thumb.png'
import thumbLeftVectorBg from 'assets/images/slider/champ-thumb-vector.png'

type ThumbProps = { item: Item }

const ItemThumb: FC<ThumbProps> = ({ item }) => {
  return (
    <ThumbWrapper className="flex justify-content-center align-items-end">
      <ThumbImage>
        <div>
          <img src={item.image} />
        </div>
      </ThumbImage>
      <ItemName>{item.name}</ItemName>
    </ThumbWrapper>
  )
}

export default memo(ItemThumb)

const ThumbWrapper = styled.div`
  gap: 12px;
`

const ThumbImage = styled.div`
  width: 452px;
  height: 304px;
  padding: 7px;
  background: url(${thumbBg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  position: relative;

  :before {
    content: '';
    position: absolute;
    top: 63px;
    right: calc(100% - 66px);
    width: 201px;
    height: 72px;
    background-image: url(${thumbLeftVectorBg});
  }

  & > div {
    height: 100%;
    overflow: hidden;
    img {
      height: 100%;
      width: auto;
      z-index: -1;
    }
  }
`

const ItemName = styled.h3`
  font-family: 'Normandia';
  font-weight: 400;
  font-size: 120px;
  line-height: 121px;
  color: ${({ theme }) => theme.yellow2};
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
  margin-bottom: -25px;
`
