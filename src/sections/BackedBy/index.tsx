import React from 'react'
import { AdvisorsList, AuditsContent, BackedByContent } from './components'
import { Wrapper } from './styled'

const BackedBy = () => {
  return (
    <Wrapper>
      <AdvisorsList />
      <BackedByContent />

      <AuditsContent />
    </Wrapper>
  )
}

export default BackedBy
