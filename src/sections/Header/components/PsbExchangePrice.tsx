import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import { formatMoneyUsd } from 'utils/formatCurrencyAmount'
import btnBackgoundGreen from 'assets/images/btn/Btn1-sm.png'

type PsbPriceProps = {
  price: number | undefined
}

const PsbExchangePrice: FC<PsbPriceProps> = ({ price }) => {
  return <Button>PSB {formatMoneyUsd(price ? price : 0, 2)}</Button>
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
