import React, { FC, memo, useState } from 'react'
import styled from 'styled-components/macro'
import { formatMoneyUsd } from 'utils/formatCurrencyAmount'
import btnBackgoundGreen from 'assets/images/btn/Btn1-sm.png'
import Modal from 'components/Modal'
import ModalBuyTokenContent from 'components/Modal/ModalBuyTokenContent'

type PsbPriceProps = {
  price: number | undefined
}

const PsbExchangePrice: FC<PsbPriceProps> = ({ price }) => {
  const [toggleBuyTokenModal, setToggleBuyTokenModal] = useState(false)
  return (
    <>
      <Button onClick={() => setToggleBuyTokenModal(true)}>PSB {formatMoneyUsd(price ? price : 0, 2)}</Button>
      <Modal isOpen={toggleBuyTokenModal} onDismiss={() => setToggleBuyTokenModal(false)}>
        <ModalBuyTokenContent closeModal={() => setToggleBuyTokenModal(false)} />
      </Modal>
    </>
  )
}

export default memo(PsbExchangePrice)

const Button = styled.button`
  font-family: 'SFU Eurostile Bold';
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  height: 45px;
  width: 142px;
  background: url(${btnBackgoundGreen}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-right: 12px;
`
