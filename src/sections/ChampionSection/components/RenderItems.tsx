import { Item } from 'models/item.model'
import React, { FC, memo, useState } from 'react'
import styled from 'styled-components/macro'
import Slider from 'react-slick'
import ItemMainImage from './ItemMainImage'
import ItemNavImage from './ItemNavImage'

type ItemsProps = {
  items: Item[]
}

const RenderItems: FC<ItemsProps> = ({ items }) => {
  const [mainSlider, setMainSlider] = useState<Slider | null>(null)
  const [navSlider, setNavSlider] = useState<Slider | null>(null)
  const mainImgOps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          //   prevArrow: <SlickArrowLeft />,
          //   nextArrow: <SlickArrowRight />,
        },
      },
    ],
  }
  const navImgOps = {
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    infinite: true,
    arrows: true,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    centerPadding: '10px',
  }
  return (
    <Wrapper>
      {/* <MainImageWrapper>
        <Slider {...mainImgOps} asNavFor={navSlider ? navSlider : undefined} ref={(slider) => setMainSlider(slider)}>
          {items.map((item, index) => (
            <ItemMainImage key={index} item={item} />
          ))}
        </Slider>
      </MainImageWrapper>
      <NavImageWrapper>
        <Slider asNavFor={mainSlider ? mainSlider : undefined} ref={(slider) => setNavSlider(slider)} {...navImgOps}>
          {items.map((item, index) => (
            <ItemNavImage key={index} item={item} />
          ))}
        </Slider>
      </NavImageWrapper> */}
    </Wrapper>
  )
}

export default memo(RenderItems)

const Wrapper = styled.div`
  position: relative;
`

const MainImageWrapper = styled.div``

const NavImageWrapper = styled.div`
  position: absolute;
  bottom: 70px;
  right: 385px;
  width: 580px;
  .slick-slider {
    position: unset;
  }
`
