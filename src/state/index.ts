import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import thunkMiddleware from 'redux-thunk'
import globalSlice from './global/global.slice'

const store = configureStore({
  reducer: {
    global: globalSlice,
  },
  middleware: [...getDefaultMiddleware({ thunk: true, serializableCheck: false }), thunkMiddleware],
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
