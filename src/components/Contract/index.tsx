import Container from 'components/Container'
import { SupportedPayment } from 'constant/payments'
import React, { FC, memo, useMemo } from 'react'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import { selectPriceExchange } from 'state/global/global.slice'
import { useAppSelector } from 'state/hooks'
import { ContractContent, ContractWrapper, PricePercent, PriceWrapper, Text } from './styled'

type ContractProps = {}

const Contract: FC<ContractProps> = () => {
  const priceExchange = useAppSelector(selectPriceExchange)
  const price = priceExchange[SupportedPayment.PSB]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const exchange = useMemo(() => price?.usd_24h_change || 0, [priceExchange])
  return (
    <ContractWrapper>
      <Container className="flex justify-content-center align-items-center">
        <ContractContent>
          <PriceWrapper className="flex justify-content-center align-items-start">
            <span>PSB ${price?.usd || 0}</span>
            <PricePercent exchange={exchange}>
              {exchange > 0 ? <FiArrowUpRight /> : <FiArrowDownRight />}
              {exchange.toFixed(2)}%
            </PricePercent>
          </PriceWrapper>
          <Text>
            PSB Contract&nbsp;
            <a
              href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x36bfBb1d5B3C9b336f3D64976599B6020cA805F1"
              target="_blank"
              rel="noreferrer"
            >
              0x36bfBb1d5B3C9b336f3D64976599B6020cA805F1
            </a>
          </Text>
          <Text>
            PULV Contract&nbsp;
            <a
              href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0xD59896C6F17F62BB584BBdaAAb8d0E09fDDf691e"
              target="_blank"
              rel="noreferrer"
            >
              0xD59896C6F17F62BB584BBdaAAb8d0E09fDDf691e
            </a>
          </Text>
          <Text>
            Official telegram:{' '}
            <a target="_blank" href="//t.me/planetsandbox" rel="noreferrer">
              @planetsandbox
            </a>
            , Twitter:{' '}
            <a target="_blank" href="//twitter.com/planetsandbox" rel="noreferrer">
              @planetsandbox
            </a>
            <br />
            <strong>Be aware of fake contract addresses and fake social groups/accounts!</strong>
          </Text>
        </ContractContent>
      </Container>
    </ContractWrapper>
  )
}

export default memo(Contract)
