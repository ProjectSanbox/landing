import { weaponActiveNavBackground, weaponNavBackground } from 'assets'
import { Item } from 'models/item.model'
import React, { FC, memo, useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components/macro'
import { MainItem } from '.'

const LIMIT_ITEMS = 4

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
    slidesToShow: 4,
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
      <MainItemWrapper>
        <Slider {...mainImgOps} asNavFor={navSlider ? navSlider : undefined} ref={(slider) => setMainSlider(slider)}>
          {items.map((item, index) => {
            if (index < LIMIT_ITEMS) {
              return <MainItem key={index} item={item} />
            }
          })}
        </Slider>
      </MainItemWrapper>
      <SliderNavWrapper data-aos="fade-left">
        <Slider asNavFor={mainSlider ? mainSlider : undefined} ref={(slider) => setNavSlider(slider)} {...navImgOps}>
          {items.map((item, index) => {
            if (index < LIMIT_ITEMS) {
              return <img key={index} src={item.image} />
            }
          })}
        </Slider>
      </SliderNavWrapper>
    </Wrapper>
  )
}

export default memo(RenderItems)

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`

const MainItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  .slick-slider {
    &,
    & div {
      height: 100%;
    }
  }
`
const SliderNavWrapper = styled.div`
  position: absolute;
  bottom: 65px;
  right: 0;
  .slick-slider {
    overflow: visible;
    .slick-track {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .slick-slide {
        width: 152px !important;
        height: 100px;
        margin: auto 15px;
        background: url(${weaponNavBackground}) no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          transform: rotate(-32.68deg);
        }

        &.slick-current {
          width: 228px !important;
          height: 150px;
          background-image: url(${weaponActiveNavBackground});
        }
      }
    }
  }
`
