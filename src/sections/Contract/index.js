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
                0xf3147987a00d35eecc10c731269003ca093740ca
              </Text>
              <Text>
                Official telegram:{" "}
                <a href="//t.me/planetsandbox">@planetsandbox</a>, Twitter:{" "}
                <a href="//twitter.com/planetsandbox">@planetsandbox</a>. Be
                aware of fake contract addresses and fake social
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
