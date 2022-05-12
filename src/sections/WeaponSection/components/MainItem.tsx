import { Item } from 'models/item.model'
import React, { FC, memo } from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components/macro'
import MainItemStats from './MainItemStats'

type MainItemProps = {
  item: Item
}

const MainItem: FC<MainItemProps> = ({ item }) => {
  return (
    <Wrapper>
      <Col
        data-aos="fade-right"
        xs={12}
        md={6}
        style={{ alignSelf: 'center' }}
        className="flex justify-content-center align-items-center"
      >
        <img style={{ transform: 'rotate(-32.68deg)' }} src={item.image} />
      </Col>
      <Col xs={12} md={6}>
        <MainItemStats item={item} />
      </Col>
    </Wrapper>
  )
}

export default memo(MainItem)

const Wrapper = styled(Row)``
