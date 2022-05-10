import React, { FC, memo } from 'react'
import { selectFooterMenus } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'
import styled from 'styled-components/macro'
import { Row, Col } from 'react-bootstrap'
import MenuContent from './MenuContent'

type MenusType = {}

const FooterMenus: FC<MenusType> = () => {
  const menus = useAppSelector(selectFooterMenus)

  return (
    <FooterMenusContent>
      <MenusListWrapper>
        {menus.map((menu, index) => (
          <MenuList key={index} xs={6} lg={Math.floor(12 / menus.length)}>
            <MenuContent item={menu} />
          </MenuList>
        ))}
      </MenusListWrapper>
    </FooterMenusContent>
  )
}

export default memo(FooterMenus)

const FooterMenusContent = styled.div``

const MenusListWrapper = styled(Row)``

const MenuList = styled(Col)``
