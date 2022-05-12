import React, { FC, ReactNode } from 'react'
import styled from 'styled-components/macro'
import { Container as BootstrapContainer } from 'react-bootstrap'

type ContainerProps = {
  children: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  const allClasses = []
  if (className) {
    allClasses.push(className)
  }
  return <ContainerWrapper className={allClasses.join(' ')}>{children}</ContainerWrapper>
}

export default Container

const ContainerWrapper = styled(BootstrapContainer)``
