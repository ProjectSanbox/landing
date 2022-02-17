import ContractWrapper from "./contract.style";
import { Container } from "reusecore/Layout";
import Box from "reusecore/Box";
import Text from "reusecore/Text";
import Button from "reusecore/Button";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import axios from "axios";

const Contract = () => {
  const [show, setShow] = useState(true);
  const [price, setPrice] = useState({
    usd: 0,
    percent: 0
  })

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=0x36bfbb1d5b3c9b336f3d64976599b6020ca805f1&vs_currencies=usd&include_24hr_change=true',
    })
      .then(function (response) {
        setPrice({
          usd: response?.data['0x36bfbb1d5b3c9b336f3d64976599b6020ca805f1'].usd,
          percent: response?.data['0x36bfbb1d5b3c9b336f3d64976599b6020ca805f1'].usd_24h_change
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {show && (
        <ContractWrapper>
          <Container>
            <Box className="contract">
              <Box className="priceExchange">
                <Box className="price">
                  <Text className="price-headinng">
                    PSB ${price.usd} 
                    <span style={price?.percent > 0 ? {color: 'rgb(94, 219, 74)'} : {color: 'red'}} className="percent">
                      {price.percent > 0 ? <FiArrowUpRight/> : <FiArrowDownRight />}
                      {Number.parseFloat(price.percent).toFixed(2)}%
                    </span>
                  </Text>
                </Box>
              </Box>
              <Text>
                PSB Contract&nbsp;
                <a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x36bfBb1d5B3C9b336f3D64976599B6020cA805F1" target="_blank">
                  0x36bfBb1d5B3C9b336f3D64976599B6020cA805F1
                </a>
              </Text>
              <Text>
                PULV Contract&nbsp;
                <a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0xD59896C6F17F62BB584BBdaAAb8d0E09fDDf691e" target="_blank">
                  0xD59896C6F17F62BB584BBdaAAb8d0E09fDDf691e
                </a>
              </Text>
              <Text>
                Official telegram:{" "}
                <a target="_blank" href="//t.me/planetsandbox">
                  @planetsandbox
                </a>
                , Twitter:{" "}
                <a target="_blank" href="//twitter.com/planetsandbox">
                  @planetsandbox
                </a><br/>
                <strong>
                  Be aware of fake contract addresses and fake social
                  groups/accounts!
                </strong>
              </Text>
              {/* <Button onClick={() => setShow(false)}>
                <CgClose />
              </Button> */}
            </Box>
          </Container>
        </ContractWrapper>
      )}
    </>
  );
};

export default Contract;
