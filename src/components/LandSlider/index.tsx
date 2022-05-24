import { Land } from 'models/land.model'
import React, { FC, memo } from 'react'

type SliderProps = {
  width?: number
  height?: number
  lands: Land[]
}

const LandSlider: FC<SliderProps> = () => {
  return (
    <div id="block1" className="blocks">
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
    </div>
  )
}

export default memo(LandSlider)

// const Slider
