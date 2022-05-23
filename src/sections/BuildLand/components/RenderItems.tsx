import { Land } from 'models/land.model'
import React, { FC, memo } from 'react'
import Slider from 'react-slick'
import { LandSliderWrapper } from '../styled'
import SliderItem from './SliderItem'

type ItemsProps = {
  lands: Land[]
}

const RenderItems: FC<ItemsProps> = ({ lands }) => {
  const sliderOptions = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          auto: true,
        },
      },
    ],
  }
  return (
    <LandSliderWrapper>
      <Slider {...sliderOptions}>
        {lands.map((item, index) => (
          <SliderItem item={item} key={index} />
        ))}
      </Slider>
    </LandSliderWrapper>
  )
}

export default memo(RenderItems)
