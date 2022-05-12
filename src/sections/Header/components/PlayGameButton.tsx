import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'
import btnBackgoundYellow from 'assets/images/btn/Btn2-sm.png'

type ButtonProps = {}

const PlayGameButton: FC<ButtonProps> = () => {
  return <Button>Play Game</Button>
}

export default memo(PlayGameButton)

const Button = styled.button`
  font-family: 'SFU Eurostile Bold';
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  height: 45px;
  width: 142px;
  background: url(${btnBackgoundYellow}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`
