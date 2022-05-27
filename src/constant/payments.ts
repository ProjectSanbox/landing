export enum SupportedPayment {
  PULV = 'PULV',
  BNB = 'BNB',
  PSB = 'PSB',
}

export enum SupportedPaymentAddress {
  PULV = '0xd59896c6f17f62bb584bbdaaab8d0e09fddf691e',
  BNB = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  PSB = '0x36bfbb1d5b3c9b336f3d64976599b6020ca805f1',
}

interface PriceType {
  usd: number
  usd_24h_change: number
}

export interface PriceExchangeType {
  [SupportedPayment.BNB]?: PriceType
  [SupportedPayment.PSB]?: PriceType
  [SupportedPayment.PULV]?: PriceType
}

export interface PriceExchangeResponseType {
  [SupportedPaymentAddress.BNB]?: PriceType
  [SupportedPaymentAddress.PSB]?: PriceType
  [SupportedPaymentAddress.PULV]?: PriceType
}

export const PANCAKE_LINK = 'https://pancakeswap.finance/info/pair/0xcb9abf27b2e7b8706f0daf30855b80421b41e9a9'
export const GATEIO_LINK = 'https://www.gate.io/trade/PSB_USDT'
