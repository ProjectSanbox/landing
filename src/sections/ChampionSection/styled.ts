import { championSectionBackground } from 'assets'
import styled from 'styled-components/macro'

export const ChampionSectionWrapper = styled.div`
  width: 100%;
  height: 1209px;
  position: relative;
  background: url(${championSectionBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  top: -60px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const SectionHeading = styled.div`
  position: absolute;
  top: 180px;
  right: 385px;
`

export const Heading = styled.h1`
  font-family: 'Normandia';
  font-weight: 400;
  font-size: 80.2474px;
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
