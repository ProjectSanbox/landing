import Container from 'components/Container'
import { DEFAULT_BACKED_BY } from 'constant/backedBy'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import { BackedByItem } from '..'
import { ListItemsWrapper, Heading } from '../../styled'

type MediaProps = {}

const MediasContent: FC<MediaProps> = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Media</Heading>
        <ListItemsWrapper data-aos="fade-down" gap="24px" marginBottom="0">
          {DEFAULT_BACKED_BY.media.map((items, index) => (
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

export default memo(MediasContent)

const Wrapper = styled.div`
  text-align: center;
  padding: 60px 0;
`
