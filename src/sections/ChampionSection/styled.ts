import SectionWrapper from 'components/SectionWrapper'
import { Container as BootstrapContainer } from 'react-bootstrap'
import styled from 'styled-components/macro'

export const ChampSliderWrapper = styled(SectionWrapper)`
  position: relative;
  margin-top: -60px;
  .container {
    @media (min-width: 1400px) {
      max-width: 1420px;
    }
  }
`

export const Container = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

export const SectionHeading = styled.div`
  position: absolute;
  top: 180px;
  right: 18%;
`

export const Heading = styled.h1`
  font-family: 'Normandia';
  font-weight: 400;
  font-size: 80px;
  line-height: 81px;
  text-transform: uppercase;
  color: rgba(125, 125, 125, 0.3);
`

export const SubHeading = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.yellow2};
  .line {
    display: inline-block;
    width: 165px;
    height: 2px;
    background-color: ${({ theme }) => theme.yellow2};
  }

  .sub-heading {
  }
`
