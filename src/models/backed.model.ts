export interface BackedData {
  backed: BackedItem[]
  audit: BackedItem[]
  partner: BackedItem[]
  media: BackedData[]
}

export interface BackedItem {
  image: string
  url: string
  target?: string
}
