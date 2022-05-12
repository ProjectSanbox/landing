import Container from 'components/Container'
import { DEFAULT_BACKED_BY } from 'constant/backedBy'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import { BackedByLink, ListItemsWrapper, SectionHeading } from '../../styled'

type AuditsProps = {}

const AuditsContent: FC<AuditsProps> = () => {
  return (
    <Wrapper>
      <Container>
        <SectionHeading>Security Audits</SectionHeading>
        <ListItemsWrapper data-aos="fade-down">
          {DEFAULT_BACKED_BY.audit.map((item, index) => (
            <BackedByLink key={index} target="_blank" href={item.url} rel="noreferrer">
              <img src={item.image} />
            </BackedByLink>
          ))}
        </ListItemsWrapper>
      </Container>
    </Wrapper>
  )
}

export default memo(AuditsContent)

const Wrapper = styled.div`
  text-align: center;
  padding: 60px 0;
`
