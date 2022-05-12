import React from 'react'
import { AdvisorsList, AuditsContent, BackedByContent, MediasContent, PartnerContent } from './components'
import { Wrapper } from './styled'

const BackedBy = () => {
  return (
    <Wrapper>
      <AdvisorsList />
      <BackedByContent />
      <PartnerContent />
      <AuditsContent />
      <MediasContent />
    </Wrapper>
  )
}

export default BackedBy
