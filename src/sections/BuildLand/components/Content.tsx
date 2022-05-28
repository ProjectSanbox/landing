import React, { FC, memo } from 'react'
import { Heading } from '../styled'

type ContentProps = {}

const Content: FC<ContentProps> = () => {
  return (
    <>
      <Heading>Build lands</Heading>
      <Heading>share Passive Income</Heading>
      <p style={{ marginTop: '1rem' }}>Coming Soon</p>
    </>
  )
}

export default memo(Content)
