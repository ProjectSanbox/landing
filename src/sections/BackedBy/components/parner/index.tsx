import Container from 'components/Container'
import { DEFAULT_BACKED_BY } from 'constant/backedBy'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import { ListItemsWrapper, Heading } from '../../styled'
import BackedByItem from '../BackedByItem'

type PartnerProps = {}

const PartnerContent: FC<PartnerProps> = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Partner</Heading>
        <ListItemsWrapper data-aos="fade-down">
          {DEFAULT_BACKED_BY.partner.map((items, index) => (
            <div key={index}>
              {items.map((item, idx) => (
                <BackedByItem key={idx} item={item} />
              ))}
            </div>
          ))}
        </ListItemsWrapper>
      </Container>
    </Wrapper>
  )
}

export default memo(PartnerContent)

const Wrapper = styled.div`
  text-align: center;
  padding: 60px 0;
`
