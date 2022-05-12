import Container from 'components/Container'
import { SupportedBlockId } from 'constant/menus'
import React, { FC } from 'react'
import { FooterHeading, FooterMenus } from './components'
import { FooterContent, FooterHeadingWrapper, FooterMenusWrapper, FooterWrapper } from './styled'

type FooterProps = {}

const Footer: FC<FooterProps> = () => {
  return (
    <FooterWrapper id={SupportedBlockId.FOOTER}>
      <Container>
        <FooterContent>
          <FooterHeadingWrapper xs={12} lg={4}>
            <FooterHeading />
          </FooterHeadingWrapper>
          <FooterMenusWrapper xs={12} lg={8}>
            <FooterMenus />
          </FooterMenusWrapper>
        </FooterContent>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
