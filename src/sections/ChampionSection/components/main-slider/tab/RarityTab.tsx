import { Item } from 'models/item.model'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'

const RarityTab: FC<Item> = (item) => {
  return <RarityTabWrapper>{item.rarityLabel}</RarityTabWrapper>
}

export default memo(RarityTab)

const RarityTabWrapper = styled.div``
