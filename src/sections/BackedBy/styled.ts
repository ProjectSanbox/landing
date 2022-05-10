import { backedByBackground } from 'assets'
import styled from 'styled-components/macro'
import leftHeading from 'assets/images/background/left-heading.png'
import rightHeading from 'assets/images/background/right-heading.png'

export const Wrapper = styled.div`
  width: 100%;
  height: 3800px;
  padding-top: 95px;
  position: relative;
  background: url(${backedByBackground}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  top: -19px;
`

const Heading = styled.h3`
  display: inline-block;
  font-family: 'Square721 BT Bold';
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-transform: uppercase;
  text-shadow: 0px 0px 3px #ffd600;
`

export const AdvisorHeading = styled(Heading)`
  span {
    position: relative;
    display: inline-block;

    :after,
    :before {
      content: '';
      position: absolute;
      top: 50%;
      height: 2px;
      width: 444px;
      margin: 0 10px;
    }
    :before {
      right: 100%;
      background-image: url(${leftHeading});
    }
    :after {
      left: 100%;
      background-image: url(${rightHeading});
    }
  }
`
