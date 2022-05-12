export interface BackedData {
  backed: BackedItem[]
  audit: BackedItem[]
  partner: BackedItem[]
  media: BackedItem[]
}

export interface BackedItem {
  image: string
  url: string
  target?: string
}
