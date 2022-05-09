export enum SupportedPayment {
  PULV = 'PULV',
  BNB = 'BNB',
  PSB = 'PSB',
}

export const SupportedPaymentAddress = {
  [SupportedPayment.PULV]: '0x871428ED63ee188eF8B7fac3fdf7244Bbe702A5B',
  [SupportedPayment.BNB]: '0x0000000000000000000000000000000000000000',
  [SupportedPayment.PSB]: '0xFfcb5EBf615F543d5C023FE45878ED86F389271a',
}
