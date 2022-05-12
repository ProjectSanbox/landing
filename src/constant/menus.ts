import { discord, facebook, medium, telegram, twitter, youtube } from 'assets'
import { MenuItem } from 'models/menu.model'

export enum SupportedBlockId {
  HOME = 'home',
  ROADMAP = 'roadmap',
  TEAM = 'team',
  GAMEPLAY = 'gameplay',
  NFT = 'nft',
  FOOTER = 'footer',
  EVENT = 'event',
  FAQS = 'faqs',
}

export enum MenuType {
  PRODUCTS = 'Products',
  INFORMATION = 'Information',
  INTRODUCE = 'Introduce',
  JOIN = 'Join our community',
}

export const DEFAULT_MENUS: MenuItem[] = [
  {
    title: MenuType.PRODUCTS,
    menu: [
      {
        url: '#' + SupportedBlockId.HOME,
        name: 'Home',
      },
      {
        url: '#' + SupportedBlockId.GAMEPLAY,
        name: 'Gameplay',
      },
      {
        url: '#' + SupportedBlockId.NFT,
        name: 'NFT Items',
      },
    ],
  },
  {
    title: MenuType.INFORMATION,
    menu: [
      {
        url: '#' + SupportedBlockId.TEAM,
        name: 'Team',
      },
      {
        url: '#' + SupportedBlockId.ROADMAP,
        name: 'Roadmap',
      },
      {
        url: 'http://planetsandbox.gitbook.io/planetsandbox-game/terms-and-conditions',
        name: 'Term Condition',
        externalLink: true,
      },
    ],
  },
  {
    title: MenuType.INTRODUCE,
    menu: [
      {
        url: '/',
        name: 'About Us',
      },
      {
        url: '/',
        name: 'Policy',
      },
      {
        url: 'http://planetsandbox.gitbook.io/planetsandbox-game',
        name: 'Whitepaper',
        externalLink: true,
      },
    ],
  },
  {
    title: MenuType.JOIN,
    menu: [
      {
        icon: telegram,
        url: '//t.me/planetsandbox',
        name: 'Telegram',
        externalLink: true,
      },
      {
        icon: twitter,
        url: '//twitter.com/planetsandbox',
        name: 'Twitter',
        externalLink: true,
      },
      {
        icon: medium,
        url: '//planetsandbox.medium.com/',
        name: 'Medium',
        externalLink: true,
      },
    ],
    menu2: [
      {
        icon: discord,
        url: '//discord.gg/zwpC6EAatV',
        name: 'Discord',
        externalLink: true,
      },
      {
        icon: youtube,
        url: '//www.youtube.com/c/PlanetSandboxOfficial/featured',
        name: 'Youtube',
        externalLink: true,
      },
      {
        icon: facebook,
        url: '//www.facebook.com/planetsandbox',
        name: 'Facebook',
        externalLink: true,
      },
    ],
  },
]
