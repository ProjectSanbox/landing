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

export interface PriceExchangeType {
  [SupportedPayment.BNB]?: number
  [SupportedPayment.PSB]?: number
  [SupportedPayment.PULV]?: number
}

export interface PriceExchangeResponseType {
  [SupportedPaymentAddress.BNB]?: { usd: number }
  [SupportedPaymentAddress.PSB]?: { usd: number }
  [SupportedPaymentAddress.PULV]?: { usd: number }
}
