import tabBg from 'assets/images/background/main-item.png'
import { Item } from 'models/item.model'
import React, { FC, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import styled from 'styled-components/macro'
import { RarityTab, SkillsTab, SkinsTab } from './tab'

enum TabKeys {
  RARITRY = 0,
  SKILL,
  SKIN,
}

enum TabLabels {
  RARITRY = 'Rarity',
  SKILL = 'Skill',
  SKIN = 'Skin',
}

type ItemTabProps = {
  item: Item
}

const ItemInfoTab: FC<ItemTabProps> = ({ item }) => {
  const [key, setKey] = useState<string | number>(TabKeys.RARITRY)
  return (
    <Wrapper>
      <TabsWrapper>
        <Tabs activeKey={key} onSelect={(k: any) => setKey(k)}>
          <Tab eventKey={TabKeys.RARITRY} title={TabLabels.RARITRY}>
            <RarityTab {...item} />
          </Tab>
          <Tab eventKey={TabKeys.SKILL} title={TabLabels.SKILL}>
            <SkillsTab />
          </Tab>
          <Tab eventKey={TabKeys.SKIN} title={TabLabels.SKIN}>
            <SkinsTab />
          </Tab>
        </Tabs>
      </TabsWrapper>
    </Wrapper>
  )
}

export default ItemInfoTab

const Wrapper = styled.div`
  width: 100%;
  max-width: 1434px;
  height: 255px;
  text-align: center;
`

const TabsWrapper = styled.div`
  font-family: 'Outfit';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  width: 75%;
  margin-left: auto;
  height: 100%;
  color: ${({ theme }) => theme.white};
  background: url(${tabBg}) no-repeat left top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .nav-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    // border-top: 1px solid ${({ theme }) => theme.white};
    border-bottom: none;
    margin-bottom: 15px;

    li {
      margin-top: -14px;

      button {
        font-weight: 500;
        padding: 2px 10px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.yellow2};
        background: ${({ theme }) => theme.black1};
        border: 1px solid ${({ theme }) => theme.black6};
        border-radius: 0;
        position: relative;

        :after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -11px;
          width: 0px;
          height: 0px;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid ${({ theme }) => theme.white};
          box-shadow: 0px 0px 2px #ff7e21, inset 0px 0px 1px rgba(255, 126, 33, 0.6);
          clear: both;
          display: none;
        }

        &.active {
          color: ${({ theme }) => theme.yellow2};
          background: ${({ theme }) => theme.black1};
          border-color: ${({ theme }) => theme.white};
          box-shadow: 0px 0px 2px #ff7e21, 0px 0px 3px #fb6900, inset 0px 0px 1px rgba(255, 126, 33, 0.6);

          :after {
            display: block;
          }
        }
      }
    }
  }

  .tab-content {
    font-weight: 400;
    display: flex;
    justify-content: center;
  }
`
