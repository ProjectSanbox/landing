import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import globalSlice from './global/global.slice'
import { itemsApi } from 'services/items.service'

const store = configureStore({
  reducer: {
    [itemsApi.reducerPath]: itemsApi.reducer,
    global: globalSlice,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: true, serializableCheck: false }),
    thunkMiddleware,
    itemsApi.middleware,
  ],
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
