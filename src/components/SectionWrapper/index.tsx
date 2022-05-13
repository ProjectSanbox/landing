import React, { FC, ReactNode } from 'react'
import styled from 'styled-components/macro'

type WrapperProps = {
  className?: string
  id?: string | undefined
  height?: string | number
  width?: string | number
  background?: string
  backgroundSize?: string
  children: ReactNode | ReactNode[]
}

const SectionWrapper: FC<WrapperProps> = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}

export default SectionWrapper

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;

  ${(props) =>
    props.background &&
    ` background: url(${props.background}) no-repeat center center;
    -webkit-background-size: ${props.backgroundSize ? props.backgroundSize : 'cover'};
    -moz-background-size: ${props.backgroundSize ? props.backgroundSize : 'cover'};
    -o-background-size: ${props.backgroundSize ? props.backgroundSize : 'cover'};
    background-size: ${props.backgroundSize ? props.backgroundSize : 'cover'};`}

  ${({ theme, width, height }) => theme.mediaMinWidth.minFromMedium`
    width: ${width ? width : '100%'};
    height: ${height ? height : '100%'};
`};
`
