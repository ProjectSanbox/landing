import { Item } from 'models/item.model'
import React, { FC } from 'react'
import styled from 'styled-components/macro'
import ItemThumbImage from './ItemThumbImage'

type ItemImageProps = {
  item: Item
}

const ItemActive: FC<ItemImageProps> = ({ item }) => {
  console.log(item)

  return (
    <Wrapper className="flex justify-content-between">
      <MainImage>
        <img src={item.fullSize || item.image} data-aos="fade-right" />
      </MainImage>
      <MainItemInfo>
        <MainItemTopInfo className="flex justify-content-between align-items-end">
          <ItemThumbImage item={item} />
          <ItemName>{item.name}</ItemName>
        </MainItemTopInfo>
      </MainItemInfo>
    </Wrapper>
  )
}

export default ItemActive

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;
  `};
`

const MainImage = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaMinWidth.minFromMedium`
    width: 50%;
  `};
`

const MainItemInfo = styled.div`
  gap: 14px;
  width: 100%;
  ${({ theme }) => theme.mediaMinWidth.minFromMedium`
    width: 50%;
  `};
`

const MainItemTopInfo = styled.div``

const ItemName = styled.h5`
  width: calc((100% -14px) / 2);
  font-family: 'Normandia';
  font-weight: 400;
  font-size: 90px;
  line-height: 90px;
  color: ${({ theme }) => theme.yellow2};
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
  margin-bottom: 0;
`
