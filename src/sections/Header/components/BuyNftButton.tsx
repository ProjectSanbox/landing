import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import btnBackgoundYellow from 'assets/images/btn/Btn2-sm.png'

type ButtonProps = {}

const BuyNftButton: FC<ButtonProps> = () => {
  return (
    <Button href={process.env.REACT_APP_DAPP_MARKET_LINK} target="_blank">
      Buy NFTs
    </Button>
  )
}

export default memo(BuyNftButton)

const Button = styled.a`
  display: inline-block;
  font-family: 'SFU Eurostile Bold';
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  height: 45px;
  width: 142px;
  line-height: 45px;
  text-align: center;
  background: url(${btnBackgoundYellow}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: ${({ theme }) => theme.black1};
  text-transform: uppercase;
  :hover {
    color: ${({ theme }) => theme.black1};
  }
`
