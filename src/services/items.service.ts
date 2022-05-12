import { createApi } from '@reduxjs/toolkit/query/react'
import { Item } from 'models/item.model'
import { baseQuery } from './base.service'

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery,
  keepUnusedDataFor: 1,
  endpoints: (builder) => ({
    getListItems: builder.query<Item[], void>({
      query: () => {
        return {
          url: `metadata/default/all`,
          method: 'GET',
        }
      },
    }),
  }),
})

export const { useGetListItemsQuery } = itemsApi
