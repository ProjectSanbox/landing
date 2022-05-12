import Container from 'components/Container'
import { DEFAULT_BACKED_BY } from 'constant/backedBy'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import { ListItemsWrapper, SectionHeading } from '../../styled'
import BackedByItem from '../BackedByItem'

type BackedProps = {}

const BackedByContent: FC<BackedProps> = () => {
  return (
    <Wrapper>
      <Container>
        <SectionHeading>Backed By</SectionHeading>
        <ListItemsWrapper data-aos="fade-down">
          {DEFAULT_BACKED_BY.backed.map((item, index) => (
            <BackedByItem key={index} item={item} />
          ))}
        </ListItemsWrapper>
      </Container>
    </Wrapper>
  )
}

export default memo(BackedByContent)

const Wrapper = styled.div`
  text-align: center;
  padding: 120px 0 60px 0;
`
