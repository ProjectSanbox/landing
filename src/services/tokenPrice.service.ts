import { createApi } from '@reduxjs/toolkit/query/react'
import { PriceExchangeResponseType, SupportedPaymentAddress } from 'constant/payments'
import { tokenPriceQuery } from './base.service'

export const tokenPriceApi = createApi({
  reducerPath: 'tokenPriceApi',
  baseQuery: tokenPriceQuery,
  keepUnusedDataFor: 1,
  endpoints: (builder) => ({
    getTokenPrice: builder.query<PriceExchangeResponseType, void>({
      query: () => {
        const contract_addresses = SupportedPaymentAddress.PSB
        return {
          url: `binance-smart-chain`,
          method: 'GET',
          params: {
            contract_addresses,
            vs_currencies: 'usd',
            // include_24hr_change: 'true',
          },
        }
      },
    }),
  }),
})

export const { useGetTokenPriceQuery } = tokenPriceApi
