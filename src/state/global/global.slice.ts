import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ListItemType } from 'constant/item'
import { Item } from 'models/item.model'
import { itemsApi } from 'services/items.service'
import { AppState } from 'state'

interface GlobalStateType {
  user: string
  items: Item[]
}

const initialState: GlobalStateType = {
  user: '',
  items: [],
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

export default globalSlice.reducer
