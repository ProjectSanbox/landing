import React from 'react'
import { AdvisorsList, AuditsContent, BackedByContent, MediasContent, PartnerContent } from './components'
import { Wrapper } from './styled'
import { backedByBackground } from 'assets'

const BackedBy = () => {
  return (
    <Wrapper height="3800px" background={backedByBackground}>
      <AdvisorsList />
      <BackedByContent />
      <PartnerContent />
      <AuditsContent />
      <MediasContent />
    </Wrapper>
  )
}

export default BackedBy
