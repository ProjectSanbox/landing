import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import Logo from 'assets/images/logo.png'

type FooterHeadingType = {}

const FooterHeading: FC<FooterHeadingType> = () => {
  return (
    <FooterHeadingContent>
      <div>
        <img style={{ width: '300px' }} src={Logo} alt="Planet Sandbox" title="Planet Sandbox" />
      </div>
      <a href="mailto: admin@planetsandbox.io">admin@planetsandbox.io</a>
    </FooterHeadingContent>
  )
}

export default memo(FooterHeading)

const FooterHeadingContent = styled.div`
  text-align: center;

  a,
  a:hover,
  a:active,
  a:focus {
    color: inherit;
    text-decoration: none;
  }
`
