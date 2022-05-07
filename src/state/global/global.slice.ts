import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from 'state'

interface GlobalStateType {
  user: string
}

const initialState: GlobalStateType = {
  user: '',
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
})

export const {} = globalSlice.actions

export default globalSlice.reducer
