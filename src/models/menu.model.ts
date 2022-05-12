export interface Menu {
  url: string
  name: string
  icon?: string
  externalLink?: boolean
}

export interface MenuItem {
  title: string
  menu: Menu[]
  menu2?: Menu[]
}
