import React, { useEffect } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { List, ListItem } from "reusecore/List";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Text from "reusecore/Text";
import data from "assets/data/footer";
import Image from "reusecore/Image";
import FooterWrapper from "./footer.style";
import logo from "assets/images/logo.png";
import { useState } from "react";
import pancake from "assets/images/nav/pancake.svg";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import axios from "axios";

const Footer = () => {
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const [email, setEmail] = useState("");
  const [price, setPrice] = useState({
    usd: 0,
    percent: 0
  })
  const HandlerEmail = (event) => {
    const email = event.target.value;
    if (validateEmail(email)) {
      setEmail(`mailto:${email}`);
    }
  };

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
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        <Container>
          <Row>
            <Col className="xl-4 lg-12 md-12 sm-12 xs-12">
              <Box className="footer-heading">
                <Box className="footer-heading-content">
                  <Image src={logo} />
                  <a href="mailto: admin@planetsandbox.io">
                    admin@planetsandbox.io
                  </a>
                </Box>
              </Box>
            </Col>
            <Col className="xl-8 lg-12 md-12 sm-12 xs-12">
              <Box className="footer-list">
                <Row>
                  <Col className="xl-3 lg-3 md-6 sm-6 xs-6">
                    <Text className="footer-title">Products</Text>
                    <List>
                      {data.products.map((product, index) => (
                        <ListItem key={index}>
                          <Link href={product.productLink}>
                            <a>{product.productName}</a>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Col>
                  <Col className="xl-3 lg-3 md-6 sm-6 xs-6">
                    <Text className="footer-title">Information</Text>
                    <List>
                      {data.information.map((info, index) => (
                        <ListItem key={index}>
                          <Link href={info.infoLink}>
                            <a target={info.target}>{info.infoName}</a>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Col>
                  <Col className="xl-3 lg-3 md-6 sm-6 xs-4">
                    <Text className="footer-title">Introduce</Text>
                    <List>
                      {data.documentation.map((document, index) => (
                        <ListItem key={index}>
                          <a href={document.documentLink}>
                            {document.documentName}
                          </a>
                        </ListItem>
                      ))}
                    </List>
                  </Col>
                  <Col className="xl-3 lg-3 md-6 sm-6 xs-8">
                    <Text className="footer-title">join our community</Text>
                    <Box className="comnunity">
                      <List className="footer-link">
                        {data.links1.map((link, index) => (
                          <ListItem key={index}>
                            <Link href={link.url}>
                              <a target="_blank">
                                <Image src={link.icon} /> {link.name}
                              </a>
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                      <List className="footer-link">
                        {data.links2.map((link, index) => (
                          <ListItem key={index}>
                            <Link href={link.url}>
                              <a target="_blank">
                                <Image src={link.icon} /> {link.name}
                              </a>
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Col>
                </Row>
              </Box>
            </Col>
          </Row>
          <Box className="priceExchange">
            <Box className="price">
              <Text className="price-headinng">PSB price</Text>
              <Text>${price.usd}</Text>
              <Text style={price?.percent > 0 ? {color: 'rgb(94, 219, 74)'} : {color: 'red'}} className="percent">
                {price.percent > 0 ? <FiArrowUpRight/> : <FiArrowDownRight />}
                {Number.parseFloat(price.percent).toFixed(2)}%
              </Text>
            </Box>
            <Box className="available">
              <Text className="available-heading">Available on</Text>
              <Box>
                <a
                  target="_blank"
                  href="//pancakeswap.finance/info/pair/0xcb9abf27b2e7b8706f0daf30855b80421b41e9a9"
                >
                  {" "}
                  <Image src={pancake} />
                  <Text>PancakeSwap</Text>
                </a>
              </Box>
            </Box>
          </Box>
          <Text className="copyright">
            {" "}
            Copyright © 2021 PlanetSandbox. All rights reserved.
          </Text>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
