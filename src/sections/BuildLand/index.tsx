import React, { FC } from 'react'
import { Wrapper } from './styled'
import { landBackground } from 'assets'
import { useAppSelector } from 'state/hooks'
import { selectLands } from 'state/global/global.slice'
import { TopLandsSlider } from './components'

type BuildLandProps = {}

const BuildLand: FC<BuildLandProps> = () => {
  const lands = useAppSelector(selectLands)
  return (
    <Wrapper height="1170px" background={landBackground}>
      <TopLandsSlider lands={lands} />
    </Wrapper>
  )
}

export default BuildLand
