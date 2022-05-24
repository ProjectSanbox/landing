import { Item } from 'models/item.model'
import { TabType } from 'models/tab.model'
import React, { FC, memo, useState } from 'react'
import { Tab, Nav, Row, Col, Tabs } from 'react-bootstrap'
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

const { Container, Content, Pane } = Tab

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
            <SkillsTab {...item} />
          </Tab>
          <Tab eventKey={TabKeys.SKIN} title={TabLabels.SKIN}>
            <SkinsTab {...item} />
          </Tab>
        </Tabs>
      </TabsWrapper>
    </Wrapper>
  )
}

export default ItemInfoTab

const Wrapper = styled.div`
  width: 100%;
  max-width: 1433px;
  margin-left: auto;
  height: 254px;
  text-align: center;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.03) 83.99%);
`

const TabsWrapper = styled.div`
  padding-left: 5%;
  padding-right: 5%;

  .nav-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;

    li {
      button {
        font-family: 'Outfit';
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        padding: 2px 10px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.yellow2};
        background: ${({ theme }) => theme.black1};
        border: 1px solid ${({ theme }) => theme.black6};

        &.active {
          color: ${({ theme }) => theme.yellow2};
          background: ${({ theme }) => theme.black1};
          border-color: ${({ theme }) => theme.white};
          box-shadow: 0px 0px 2px #ff7e21, 0px 0px 3px #fb6900, inset 0px 0px 1px rgba(255, 126, 33, 0.6);
        }
      }
    }
  }
`
