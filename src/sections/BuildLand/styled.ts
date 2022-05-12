import { buildLandBackground } from 'assets'
import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  width: 100%;
  height: 1170px;
  position: relative;
  background: url(${buildLandBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-top: -52px;
`
