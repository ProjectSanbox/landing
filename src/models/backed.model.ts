export interface BackedData {
  backed: BackedItem[]
  audit: BackedItem[]
}

export interface BackedItem {
  image: string
  url: string
}
