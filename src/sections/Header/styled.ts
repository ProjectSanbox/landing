import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 3;
`

export const HeaderFrame = styled.div<{ showBackground: boolean }>`
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

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div``

export const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
