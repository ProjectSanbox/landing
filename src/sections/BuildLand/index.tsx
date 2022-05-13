import React, { FC } from 'react'
import { Wrapper } from './styled'
import { landBackground } from 'assets'

type BuildLandProps = {}

const BuildLand: FC<BuildLandProps> = () => {
  return (
    <Wrapper height="1170px" background={landBackground}>
      <></>
    </Wrapper>
  )
}

export default BuildLand
