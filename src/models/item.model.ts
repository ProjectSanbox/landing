export interface Item {
  itemId: string
  name: string
  fullSize: string | null
  image: string
  winBonus: string
  desc: string
  type: number
  rarity: number
  rarityLabel: string
  economy: string
  dailyEarnBattle: number | null
  earnBattle: string
  stat?: Champion | Weapon
}

export interface Champion {
  Id: string
  Hp: string
  Speed: string
  EconomyId: string
  NftItemLevelUpId: string
  Rarity: number
  HeadColliderCenter: string
  HeadRadiusAndHeight: string
  BodyColliderCenter: string
  BodyRadiusAndHeight: string
}

export interface Weapon {
  id: string
  Category: number
  Tags: string
  Rarity: number
  Damage: number
  ProjectileCount: number
  SpreadRadius: string
  FireRate: string
  EffectiveDistance: number
  AOE: number
  AOEDamage: number
  ReloadTime: string
  Weight: string
  HRecoil: string
  VRecoil: string
  Magazine: number
  AimTime: number
  SwapTime: number
  ShortId: number
  BulletPerMag: number
  EconomyId: string
  NftItemLevelUpId: string
}
