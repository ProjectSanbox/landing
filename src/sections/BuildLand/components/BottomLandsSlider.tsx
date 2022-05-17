import { Land } from 'models/land.model'
import React, { FC, memo } from 'react'

type TopLandsProps = {
  lands: Land[]
}

const BottomLandsSlider: FC<TopLandsProps> = ({ lands }) => {
  return <>Bottom Lands</>
}

export default memo(BottomLandsSlider)
