import React, { FC, ReactNode, memo } from 'react'
import styled from 'styled-components/macro'

type BoxProps = {
  children: ReactNode
  className?: string
}

const Box: FC<BoxProps> = ({ children, className }) => {
  const allClasses = ['box']
  if (className) {
    allClasses.push(className)
  }
  return <BoxWrapper className={allClasses.join(' ')}>{children}</BoxWrapper>
}

export default memo(Box)

const BoxWrapper = styled.div``
