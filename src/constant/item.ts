export enum ItemRarity {
  COMMON = 'Common',
  UNCOMMON = 'Uncommon',
  MYTHICAL = 'Mythical',
  LEGENDARY = 'Legendary',
}

export const ITEM_RARITIES = [
  {
    value: 0,
    label: ItemRarity.COMMON,
  },
  {
    value: 1,
    label: ItemRarity.UNCOMMON,
  },
  {
    value: 2,
    label: ItemRarity.MYTHICAL,
  },
  {
    value: 3,
    label: ItemRarity.LEGENDARY,
  },
]

export enum ListItemType {
  WEAPON = 1,
  CHAMPION,
  BOX,
}
