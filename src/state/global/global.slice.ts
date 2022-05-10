import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ListItemType } from 'constant/item'
import { DEFAULT_MENUS } from 'constant/menus'
import { PriceExchangeResponseType, SupportedPayment, SupportedPaymentAddress } from 'constant/payments'
import { Item } from 'models/item.model'
import { MenuItem } from 'models/menu.model'
import { itemsApi } from 'services/items.service'
import { tokenPriceApi } from 'services/tokenPrice.service'
import { AppState } from 'state'

export interface PriceExchangeType {
  [SupportedPayment.BNB]?: number
  [SupportedPayment.PSB]?: number
  [SupportedPayment.PULV]?: number
}

const DEFAULT_PRICE_EXCHANGE = {
  [SupportedPayment.BNB]: 0,
  [SupportedPayment.PSB]: 0,
  [SupportedPayment.PULV]: 0,
}

interface GlobalStateType {
  user: string
  items: Item[]
  footer_menus: MenuItem[]
  price_exchange: PriceExchangeType
}

const initialState: GlobalStateType = {
  user: '',
  items: [],
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
      tokenPriceApi.endpoints.getTokenPrice.matchFulfilled,
      (state, action: PayloadAction<PriceExchangeResponseType>) => {
        const response = action.payload
        if (response[SupportedPaymentAddress.BNB]) {
          state.price_exchange[SupportedPayment.BNB] = response[SupportedPaymentAddress.BNB]?.usd
        }
        if (response[SupportedPaymentAddress.PSB]) {
          state.price_exchange[SupportedPayment.PSB] = response[SupportedPaymentAddress.PSB]?.usd
        }
        if (response[SupportedPaymentAddress.PULV]) {
          state.price_exchange[SupportedPayment.PULV] = response[SupportedPaymentAddress.PULV]?.usd
        }
      }
    )
  },
})

export const {} = globalSlice.actions

export const selectPriceExchange = (state: AppState): PriceExchangeType => state.global.price_exchange
export const selectChampions = (state: AppState): Item[] =>
  state.global.items.filter((item) => item.type === ListItemType.CHAMPION)
export const selectWeapons = (state: AppState): Item[] =>
  state.global.items.filter((item) => item.type === ListItemType.WEAPON)

export const selectFooterMenus = (state: AppState): MenuItem[] => state.global.footer_menus

export default globalSlice.reducer
