import styled from 'styled-components/macro'

export const ContractWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 20px;
  z-index: 99;
`

export const ContractContent = styled.div`
  width: 260px;
  height: 47px;
  overflow: hidden;
  color: ${({ theme }) => theme.white};
  font-family: 'SFU Eurostile';
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.533);
  text-align: center;
  border-radius: 5px;
  padding: 10px 0px;
  position: relative;
  box-shadow: rgb(6 24 44 / 40%) 0px 0px 0px 2px, rgb(6 24 44 / 65%) 0px 4px 6px -1px,
    rgb(255 255 255 / 8%) 0px 1px 0px inset;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  transition: all 0.3s ease-out 0s;

  :hover {
    width: 100%;
    height: 160px;
  }

  a,
  a:hover {
    color: rgb(255, 215, 0);
  }
`

export const Text = styled.p`
  margin-bottom: 0;
`

export const Span = styled.span``

export const PriceWrapper = styled(Text)`
  gap: 5px;
`

export const PricePercent = styled(Span)<{ exchange: number }>`
  color: ${({ exchange }) => (exchange >= 0 ? 'rgb(94, 219, 74)' : '0')};

  svg {
    margin-top: -8px;
  }
`
