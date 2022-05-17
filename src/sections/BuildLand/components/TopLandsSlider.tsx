import { Land } from 'models/land.model'
import React, { FC, memo } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components/macro'

type TopLandsProps = {
  lands: Land[]
}

const TopLandsSlider: FC<TopLandsProps> = ({ lands }) => {
  const settings = {
    rows: 3,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }
  return (
    <Wrapper>
      <Slider {...settings}>
        {lands.map((land, index) => (
          <img key={index} src={land.image} />
        ))}
      </Slider>
    </Wrapper>
  )
}

export default memo(TopLandsSlider)

const Wrapper = styled.div``
