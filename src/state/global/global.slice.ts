import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ListItemType } from 'constant/item'
import { DEFAULT_LANDS } from 'constant/lands'
import { DEFAULT_MENUS } from 'constant/menus'
import {
  PriceExchangeResponseType,
  PriceExchangeType,
  SupportedPayment,
  SupportedPaymentAddress,
} from 'constant/payments'
import { DEFAULT_SOCIALS } from 'constant/socials'
import { Champion, Item, Weapon } from 'models/item.model'
import { Land } from 'models/land.model'
import { MenuItem } from 'models/menu.model'
import { Social } from 'models/social.model'
import { itemsApi } from 'services/items.service'
import { tokenPriceApi } from 'services/tokenPrice.service'
import { AppState } from 'state'

const DEFAULT_PRICE_EXCHANGE: PriceExchangeType = {
  [SupportedPayment.BNB]: {
    usd: 0,
    usd_24h_change: 0,
  },
  [SupportedPayment.PSB]: {
    usd: 0,
    usd_24h_change: 0,
  },
  [SupportedPayment.PULV]: {
    usd: 0,
    usd_24h_change: 0,
  },
}

interface GlobalStateType {
  user: string
  items: Item[]
  champions: Champion[]
  weapons: Weapon[]
  lands: Land[]
  socials: Social[]
  footer_menus: MenuItem[]
  price_exchange: PriceExchangeType
}

const initialState: GlobalStateType = {
  user: '',
  items: [],
  champions: [],
  weapons: [],
  lands: DEFAULT_LANDS,
  socials: DEFAULT_SOCIALS,
  footer_menus: DEFAULT_MENUS,
  price_exchange: DEFAULT_PRICE_EXCHANGE,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(itemsApi.endpoints.getListItems.matchFulfilled, (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload
    })
    builder.addMatcher(
      itemsApi.endpoints.getListChampions.matchFulfilled,
      (state, action: PayloadAction<Champion[]>) => {
        state.champions = action.payload
      }
    )
    builder.addMatcher(itemsApi.endpoints.getListWeapons.matchFulfilled, (state, action: PayloadAction<Weapon[]>) => {
      state.weapons = action.payload
    })
    builder.addMatcher(
      tokenPriceApi.endpoints.getTokenPrice.matchFulfilled,
      (state, action: PayloadAction<PriceExchangeResponseType>) => {
        const response = action.payload
        if (response[SupportedPaymentAddress.BNB]) {
          state.price_exchange[SupportedPayment.BNB] = {
            usd: response[SupportedPaymentAddress.BNB]?.usd || 0,
            usd_24h_change: response[SupportedPaymentAddress.BNB]?.usd_24h_change || 0,
          }
        }
        if (response[SupportedPaymentAddress.PSB]) {
          state.price_exchange[SupportedPayment.PSB] = {
            usd: response[SupportedPaymentAddress.PSB]?.usd || 0,
            usd_24h_change: response[SupportedPaymentAddress.PSB]?.usd_24h_change || 0,
          }
        }
        if (response[SupportedPaymentAddress.PULV]) {
          state.price_exchange[SupportedPayment.PULV] = {
            usd: response[SupportedPaymentAddress.PULV]?.usd || 0,
            usd_24h_change: response[SupportedPaymentAddress.PULV]?.usd_24h_change || 0,
          }
        }
      }
    )
  },
})

export const {} = globalSlice.actions

export const selectPriceExchange = (state: AppState): PriceExchangeType => state.global.price_exchange
export const selectChampions = (state: AppState): Item[] =>
  state.global.items
    .filter((item) => item.type === ListItemType.CHAMPION)
    .map((item) => {
      const stat = state.global.champions.filter((champ) => champ.Id === item.itemId)
      if (stat.length > 0) item = { ...item, champStats: stat[0] }
      return item
    })

export const selectWeapons = (state: AppState): Item[] =>
  state.global.items
    .filter((item) => item.type === ListItemType.WEAPON)
    .map((item) => {
      const stat = state.global.weapons.filter((weapon) => weapon.Id === item.itemId)
      if (stat.length > 0) item = { ...item, weaponStats: stat[0] }
      return item
    })

export const selectLands = (state: AppState): Land[] => state.global.lands
export const selectSocials = (state: AppState): Social[] => state.global.socials

export const selectFooterMenus = (state: AppState): MenuItem[] => state.global.footer_menus

export default globalSlice.reducer
