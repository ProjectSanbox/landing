import ContractWrapper from "./contract.style";
import { Container } from "reusecore/Layout";
import Box from "reusecore/Box";
import Text from "reusecore/Text";
import Button from "reusecore/Button";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";

const Contract = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <ContractWrapper>
          <Container>
            <Box className="contract">
              <Text>
                Smart contract address:
                0x36bfBb1d5B3C9b336f3D64976599B6020cA805F1
              </Text>
              <Text>PULV: 0xD59896C6F17F62BB584BBdaAAb8d0E09fDDf691e</Text>
              <Text>
                Official telegram:{" "}
                <a target="_blank" href="//t.me/planetsandbox">
                  @planetsandbox
                </a>
                , Twitter:{" "}
                <a target="_blank" href="//twitter.com/planetsandbox">
                  @planetsandbox
                </a>
                . Be aware of fake contract addresses and fake social
                groups/accounts!
              </Text>
              <Button onClick={() => setShow(false)}>
                <CgClose />
              </Button>
            </Box>
          </Container>
        </ContractWrapper>
      )}
    </>
  );
};

export default Contract;
