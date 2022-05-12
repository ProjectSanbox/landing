import { BackedItem } from 'models/backed.model'
import React, { FC, memo } from 'react'
import { BackedByLink } from '../styled'

type ItemProps = {
  item: BackedItem
  padding?: string | number
}

const BackedByItem: FC<ItemProps> = ({ item, padding }) => {
  return (
    <BackedByLink target={item.target ? item.target : '_blank'} href={item.url} rel="noreferrer" padding={padding}>
      <img src={item.image} />
    </BackedByLink>
  )
}

export default memo(BackedByItem)
