import { champActiveNavBackground, champNavBackground } from 'assets'
import { Item } from 'models/item.model'
import React, { FC, memo, useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components/macro'
import { ItemActive, ItemNavImage } from '.'

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
    infinite: true,
    arrows: false,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  }
  return (
    <Wrapper>
      {/* <MainImageWrapper>
        <Slider {...mainImgOps} asNavFor={navSlider ? navSlider : undefined} ref={(slider) => setMainSlider(slider)}>
          {items.map((item, index) => {
            if (index < 5) {
              return <ItemActive key={index} item={item} />
            }
          })}
        </Slider>
      </MainImageWrapper> */}
      <NavImageWrapper data-aos="fade-left" data-aos-delay="500">
        <Slider asNavFor={mainSlider ? mainSlider : undefined} ref={(slider) => setNavSlider(slider)} {...navImgOps}>
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

const NavImageWrapper = styled.div`
  position: absolute;
  bottom: 70px;
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
