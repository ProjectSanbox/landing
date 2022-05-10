import { SupportedBlockId } from 'constant/menus'
import React, { FC, memo } from 'react'
import styled from 'styled-components/macro'

type NavProps = {}

const HeaderNav: FC<NavProps> = () => {
  return (
    <HeaderNavList>
      <li>
        <a href={SupportedBlockId.ROADMAP}>Roadmap</a>
      </li>
      <li>
        <a href={SupportedBlockId.EVENT}>Event</a>
      </li>
      <li>
        <a href={SupportedBlockId.NFT}>Token</a>
      </li>
      <li>
        <a href={SupportedBlockId.TEAM}>TEAM</a>
      </li>
      <li>
        <a href={SupportedBlockId.FAQS}>FAQs</a>
      </li>
    </HeaderNavList>
  )
}

export default memo(HeaderNav)

const HeaderNavList = styled.ul`
  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 0;
  li {
    display: inline-block;
    padding: 0px 5px;
    margin-left: 3px;
    a {
      display: block;
      padding: 10px;
      color: ${({ theme }) => theme.brand};
      border: 2px solid transparent;
      :hover {
        border-color: ${({ theme }) => theme.brand};
        box-shadow: 0 0 0 20px rgb(255 255 255 / 0%);
      }
    }
  }
`
