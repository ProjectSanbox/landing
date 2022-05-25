export interface Item {
  itemId: string
  name: string
  fullSize: string | null
  image: string
  thumb50: string
  thumb200: string
  desc: string
  type: number
  rarity: number
  rarityLabel: string
  economy?: null
  bonusPerWin: number | null
  totalBattleCount: number | null
  dailyBattle: number | null
}
