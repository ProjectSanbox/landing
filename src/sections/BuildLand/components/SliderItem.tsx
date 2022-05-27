import { Land } from 'models/land.model'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import landActiveBg from 'assets/images/slider/land-active.png'
import landBackground from 'assets/images/land/background.png'

type ItemProps = {
  item: Land
  index: number
  setSectionBg: (value: string) => void
  activeKey: number | null
  setActiveKey: (value: number | null) => void
}

const SliderItem: FC<ItemProps> = ({ item, index, setSectionBg, activeKey, setActiveKey }) => {
  const handleClick = () => {
    setActiveKey(activeKey === index ? null : index)
    setSectionBg(activeKey === index ? landBackground : item.sectionBg)
  }
  return (
    <ItemWrapper className={`flex align-items-center ${activeKey === index && 'active'}`} onClick={handleClick}>
      <div className="item-overlay">
        <img src={item.bg} />
      </div>
      <div className="item-image">
        <img src={item.image} />
      </div>
      <div className="item-name">{item.name}</div>
    </ItemWrapper>
  )
}

export default memo(SliderItem)

const ItemWrapper = styled.div`
  width: 270px;
  height: 601px;
  position: relative;
  overflow: hidden;

  .item-overlay {
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    z-index: -1;

    img {
      width: 100%;
    }
  }

  .item-image {
    z-index: -1;
    img {
      transition: transform 0.3s ease;
      transform: scale(2) translate(40px, 55px);
    }
  }

  .item-name {
    font-family: 'Normandia';
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    color: ${({ theme }) => theme.yellow7};
    text-transform: uppercase;
    position: absolute;
    bottom: 45px;
    right: 0px;
    left: 0px;
    display: none;
  }

  :hover,
  &.active {
    background-image: url(${landActiveBg}) !important;
    .item-image {
      img {
        transition: transform 0.3s ease;
        transform: scale(1.5) translate(0, -25px);
      }
    }
    .item-name {
      display: block;
      transition: all 750ms ease 0s;
    }
  }
`
