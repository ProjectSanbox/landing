import React, { FC, memo, ReactNode } from 'react'
import styled from 'styled-components/macro'

type HeadingProps = {
  fontSize?: number | string
  lineHeight?: number | string
  color?: string
  children: string | ReactNode | ReactNode[]
}

const SectionHeading: FC<HeadingProps> = (props) => {
  return <HeadingWrapper {...props}>{props.children}</HeadingWrapper>
}

export default memo(SectionHeading)

const HeadingWrapper = styled.h3<HeadingProps>`
  font-family: 'Normandia';
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '62px')};
  line-height: ${(props) => (props.fontSize ? props.fontSize + 'px' : '63px')};
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => (props.color ? props.color : props.theme.white)};
`
