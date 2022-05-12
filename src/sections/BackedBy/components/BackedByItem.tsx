import { BackedItem } from 'models/backed.model'
import React, { FC, memo } from 'react'
import { BackedByLink } from '../styled'

const BackedByItem: FC<BackedItem> = (item) => {
  return (
    <BackedByLink target={item.target ? item.target : '_blank'} href={item.url} rel="noreferrer" padding="0 12px">
      <img src={item.image} />
    </BackedByLink>
  )
}

export default memo(BackedByItem)
