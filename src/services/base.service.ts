import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from 'api/endpoint'

const baseOptions: FetchBaseQueryArgs = {
  baseUrl: API.base,
}

export const baseQuery = fetchBaseQuery({
  ...baseOptions,
})

export const tokenPriceQuery = fetchBaseQuery({
  ...baseOptions,
  baseUrl: API.tokenPrice,
})
