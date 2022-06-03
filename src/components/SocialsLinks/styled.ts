import styled from 'styled-components/macro'
import border from 'assets/images/social/right-border.png'

export const SocialsWrapper = styled.div`
  position: fixed;
  right: 21px;
  bottom: 85px;
  z-index: 99;
`

export const SocialsContent = styled.div`
  padding: 18px 16px;
  position: relative;

  :before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 322px;
    width: 8px;
    background-image: url(${border});
    background-repeat: no-repeat;
  }
`

export const SocialItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`
