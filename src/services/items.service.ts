import { createApi } from '@reduxjs/toolkit/query/react'
import { ITEM_RARITIES } from 'constant/item'
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
      transformResponse: (response: Item[]) => {
        response = response ?? ([] as Item[])

        response = response.map((item) => {
          item.rarity = item.rarity || Math.floor(Math.random() * 4)
          const find = ITEM_RARITIES.filter((e) => e.value === item.rarity)
          item.rarityLabel = find.length > 0 ? find[0].label : 'Common'

          return item
        })

        return response
      },
    }),
  }),
})

export const { useGetListItemsQuery } = itemsApi
