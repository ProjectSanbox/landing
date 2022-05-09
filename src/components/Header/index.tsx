import React, { FC } from 'react'
import styled from 'styled-components/macro'
import useScrollPosition from '@react-hook/window-scroll'
import Container from 'components/Container'

type HeaderProps = {}

const Header: FC<HeaderProps> = () => {
  const scrollY = useScrollPosition()
  return (
    <Wrapper>
      <HeaderFrame showBackground={scrollY > 95}>
        <Container>
          <>111</>
        </Container>
      </HeaderFrame>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 3;
`

const HeaderFrame = styled.div<{ showBackground: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 95px;
  top: 0;
  position: relative;
  z-index: 21;

  /* Background slide effect on scroll. */
  background: ${({ showBackground }) => (showBackground ? 'rgba(19, 19, 19, 0.85)' : 'transparent;')};
  transition: background-position 0.1s, box-shadow 0.1s;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding:  1rem;
    grid-template-columns: auto 1fr;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 1rem;
  `}
`
