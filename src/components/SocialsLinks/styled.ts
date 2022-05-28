import styled from 'styled-components/macro'
import leftBorder from 'assets/images/social/left-border.png'

export const SocialsWrapper = styled.div`
  position: fixed;
  left: 45px;
  bottom: 105px;
  z-index: 99;
`

export const SocialsContent = styled.div`
  padding: 23px 20px;
  position: relative;

  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 410px;
    width: 8px;
    background-image: url(${leftBorder});
  }
`

export const SocialItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`
