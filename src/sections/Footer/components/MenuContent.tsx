import { MenuItem } from 'models/menu.model'
import React, { FC, memo } from 'react'
import { FooterMenuTitle, MenuList } from '../styled'

type MenuProps = {
  item: MenuItem
}

const MenuContent: FC<MenuProps> = ({ item }) => {
  const { title, menu, menu2 } = item
  return (
    <>
      <FooterMenuTitle>{title}</FooterMenuTitle>
      <div>
        <MenuList>
          {menu.map((el, index) => (
            <li key={index}>
              {el.externalLink ? (
                <a href={el.url} target="_blank" rel="noreferrer">
                  {el.icon && <img className="item-icon" src={el.icon} />}
                  {el.name}
                </a>
              ) : (
                <a href={el.url}>
                  {el.icon && <img className="item-icon" src={el.icon} />}
                  {el.name}
                </a>
              )}
            </li>
          ))}
          {menu2 &&
            menu2.map((el, index) => (
              <li key={index}>
                {el.externalLink ? (
                  <a href={el.url}>
                    {el.icon && <img className="item-icon" src={el.icon} />}
                    {el.name}
                  </a>
                ) : (
                  <a href={el.url} target="_blank" rel="noreferrer">
                    {el.icon && <img className="item-icon" src={el.icon} />}
                    {el.name}
                  </a>
                )}
              </li>
            ))}
        </MenuList>
      </div>
    </>
  )
}

export default memo(MenuContent)
