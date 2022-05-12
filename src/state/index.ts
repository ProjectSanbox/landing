import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import globalSlice from './global/global.slice'
import { itemsApi } from 'services/items.service'
import { tokenPriceApi } from 'services/tokenPrice.service'

const store = configureStore({
  reducer: {
    [itemsApi.reducerPath]: itemsApi.reducer,
    [tokenPriceApi.reducerPath]: tokenPriceApi.reducer,
    global: globalSlice,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: true, serializableCheck: false }),
    thunkMiddleware,
    itemsApi.middleware,
    tokenPriceApi.middleware,
  ],
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
