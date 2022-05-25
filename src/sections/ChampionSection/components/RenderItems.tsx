import { champActiveNavBackground, champNavBackground } from 'assets'
import { Item } from 'models/item.model'
import React, { FC, memo, useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components/macro'
import { ItemMainSlider } from './main-slider'
import ItemNavImage from './nav-slider/ItemNavImage'

type ItemsProps = {
  items: Item[]
  selectedItem: Item | null
  setSelectedItem: (value: Item) => void
}

const RenderItems: FC<ItemsProps> = ({ items, selectedItem, setSelectedItem }) => {
  const sliderOption = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    // infinite: true,
    // arrows: false,
    centerPadding: '0px',
    // variableWidth: true,
  }
  return (
    <Wrapper>
      <MainImageWrapper>
        {selectedItem !== null && (
          <>
            <MainImage>
              <img src={selectedItem.fullSize || selectedItem.image} alt="" />
            </MainImage>
            <ItemMainSlider item={selectedItem} />
          </>
        )}
      </MainImageWrapper>
      <NavImageWrapper>
        <Slider {...sliderOption} beforeChange={(currentSlide, nextSlide) => setSelectedItem(items[nextSlide])}>
          {items.map((item, index) => {
            if (index < 5) {
              return <ItemNavImage key={index} item={item} />
            }
          })}
        </Slider>
      </NavImageWrapper>
    </Wrapper>
  )
}

export default memo(RenderItems)

const Wrapper = styled.div`
  position: relative;
  height: 900px;
`

const MainImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  & .slick-slider,
  & .slick-list {
    height: 100%;
  }
`

const MainImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`

const NavImageWrapper = styled.div`
  position: absolute;
  bottom: 105px;
  right: 0;
  width: 580px;
  .slick-slider {
    .slick-slide {
      & > div > div {
        background: url(${champNavBackground}) no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
      &.slick-current > div > div {
        background-image: url(${champActiveNavBackground});
      }
    }
  }
`
