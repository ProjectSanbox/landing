import { Land } from 'models/land.model'
import React, { FC, memo, useState } from 'react'
import Slider from 'react-slick'
import { LandSliderWrapper } from '../styled'
import SliderItem from './SliderItem'

type ItemsProps = {
  lands: Land[]
  setSectionBg: (value: string) => void
}

const RenderItems: FC<ItemsProps> = ({ lands, setSectionBg }) => {
  const [activeKey, setActiveKey] = useState<number | null>(null)
  const sliderOptions = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    // focusOnSelect: true,
    infinite: true,
    arrows: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
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
          <SliderItem
            item={item}
            index={index}
            setSectionBg={setSectionBg}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            key={index}
          />
        ))}
      </Slider>
    </LandSliderWrapper>
  )
}

export default memo(RenderItems)
