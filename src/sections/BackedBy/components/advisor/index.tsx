import { DEFAULT_ADVISOR } from 'constant/advisors'
import React, { memo } from 'react'
import { AdvisorHeading } from '../../styled'
import styled from 'styled-components/macro'
import AdvisorItem from './AdvisorItem'

const AdvisorsList = () => {
  return (
    <AdvisorsListWrapper>
      <div>
        <AdvisorHeading>
          <span>Advisors</span>
        </AdvisorHeading>
      </div>
      <AdvisorsListItem className="flex justify-content-between">
        {DEFAULT_ADVISOR.map((advisor, index) => (
          <AdvisorItem key={index} index={index} advisor={advisor} />
        ))}
      </AdvisorsListItem>
    </AdvisorsListWrapper>
  )
}

export default memo(AdvisorsList)

const AdvisorsListWrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.white};
  width: 100%;
  max-width: 1090px;
  margin: 0 auto;
`

const AdvisorsListItem = styled.div`
  margin-top: 90px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;
  `};
`
