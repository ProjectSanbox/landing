import { createApi } from '@reduxjs/toolkit/query/react'
import { ITEM_RARITIES } from 'constant/item'
import { Champion, Item, Weapon } from 'models/item.model'
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
    getListChampions: builder.query<Champion[], void>({
      query: () => {
        return {
          url: `metadata/blueprint/character`,
          method: 'GET',
        }
      },
    }),
    getListWeapons: builder.query<Weapon[], void>({
      query: () => {
        return {
          url: `metadata/blueprint/gun`,
          method: 'GET',
        }
      },
    }),
  }),
})

export const { useGetListItemsQuery, useGetListChampionsQuery, useGetListWeaponsQuery } = itemsApi
