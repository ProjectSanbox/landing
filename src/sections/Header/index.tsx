import useScrollPosition from '@react-hook/window-scroll'
import { smallLogo } from 'assets'
import Container from 'components/Container'
import React, { FC } from 'react'
import { HeaderNav, BuyNftButton, PsbExchangePrice } from './components'
import { HeaderContent, HeaderElement, HeaderFrame, Logo, HeaderWrapper } from './styled'
import { isMobile } from 'react-device-detect'
import { useAppSelector } from 'state/hooks'
import { selectPriceExchange } from 'state/global/global.slice'
import { SupportedPayment } from 'constant/payments'

type HeaderProps = {}

const Header: FC<HeaderProps> = () => {
  const scrollY = useScrollPosition()
  const priceExchange = useAppSelector(selectPriceExchange)
  return (
    <HeaderWrapper>
      <HeaderFrame showBackground={scrollY > 95}>
        <Container>
          <HeaderContent>
            <Logo>
              <a href="/">
                <img src={smallLogo} />
              </a>
            </Logo>
            {!isMobile && (
              <HeaderElement>
                <HeaderNav />
                {priceExchange[SupportedPayment.PSB] && (
                  <PsbExchangePrice price={priceExchange[SupportedPayment.PSB]?.usd} />
                )}
                <BuyNftButton />
              </HeaderElement>
            )}
          </HeaderContent>
        </Container>
      </HeaderFrame>
    </HeaderWrapper>
  )
}

export default Header
