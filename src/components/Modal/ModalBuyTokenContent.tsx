import { CloseModalIcon } from 'assets'
import background from 'assets/images/background/modal-buy-token.png'
import gateIo from 'assets/images/gate-icon.png'
import pancake from 'assets/images/pancake.png'
import { GATEIO_LINK, PANCAKE_LINK } from 'constant/payments'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import { CloseIcon, Title } from './styled'

type ModalProps = {
  closeModal: () => void
}

const ModalBuyTokenContent: FC<ModalProps> = ({ closeModal }) => {
  return (
    <Wrapper background={background}>
      <CloseIcon onClick={() => closeModal()} style={{ top: '16px', right: '14px' }}>
        <CloseModalIcon />
      </CloseIcon>
      <ModalContent>
        <Title style={{ marginBottom: '8px' }}>Buy PSB</Title>
        <p>Select channel to buy PSB</p>
        <LinksAction>
          <LinkItem>
            <Icon href={GATEIO_LINK} target="_blank">
              <img src={gateIo} />
            </Icon>
            <p>Gate.io</p>
          </LinkItem>
          <LinkItem>
            <Icon href={PANCAKE_LINK} target="_blank">
              <img src={pancake} />
            </Icon>
            <p>Pancake</p>
          </LinkItem>
        </LinksAction>
      </ModalContent>
    </Wrapper>
  )
}

export default memo(ModalBuyTokenContent)

const Wrapper = styled.div<{ background: string }>`
  width: 100%;
  padding: 16px 16px 48px 16px;
  text-align: center;
  background: url(${({ background }) => background}) no-repeat center center;
  -webkit-background-size: inherit;
  -moz-background-size: inherit;
  -o-background-size: inherit;
  background-size: inherit;
  filter: drop-shadow(4px 4px 15px rgba(0, 0, 0, 0.2));
  position: relative;
`
const ModalContent = styled.div`
  width: 100%;
  max-width: 262px;
  margin: 0 auto;
`

const LinksAction = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`

const LinkItem = styled.div`
  p {
    margin-bottom: 0;
  }
`

const Icon = styled.a`
  display: inline-block;
  padding: 10px 15px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.black1};
  border: 1px solid ${({ theme }) => theme.black1};
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`
