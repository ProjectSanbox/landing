import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ListItemType } from 'constant/item'
import { DEFAULT_MENUS } from 'constant/menus'
import { Item } from 'models/item.model'
import { MenuItem } from 'models/menu.model'
import { itemsApi } from 'services/items.service'
import { AppState } from 'state'

interface GlobalStateType {
  user: string
  items: Item[]
  footer_menus: MenuItem[]
}

const initialState: GlobalStateType = {
  user: '',
  items: [],
  footer_menus: DEFAULT_MENUS,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(itemsApi.endpoints.getListItems.matchFulfilled, (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload
    })
  },
})

export const {} = globalSlice.actions

export const selectChampions = (state: AppState): Item[] =>
  state.global.items.filter((item) => item.type === ListItemType.CHAMPION)
export const selectWeapons = (state: AppState): Item[] =>
  state.global.items.filter((item) => item.type === ListItemType.WEAPON)

export const selectFooterMenus = (state: AppState): MenuItem[] => state.global.footer_menus

export default globalSlice.reducer
