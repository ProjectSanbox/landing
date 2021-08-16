import React, { useEffect } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {List, ListItem} from 'reusecore/List';
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Text from "reusecore/Text";
import data from "assets/data/footer";
import Image from "reusecore/Image"
import FooterWrapper from "./footer.style";
import logo from "assets/images/logo.png";
import { useState } from "react";


const Footer = () => {

  const validateEmail = (email) => 
  {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
  }
    
  const [email, setEmail] = useState('');
  const HandlerEmail = (event) =>{
    const email = event.target.value;
    if(validateEmail(email)){
      setEmail(`mailto:${email}`);
    }
  }

  return (
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        <Container>
          <Row>
            <Col className="xl-4 lg-4 md-12 sm-12 xs-12">
              <Box className="footer-heading">
                <Box className="footer-heading-content">
                  <Image src={logo} />
                  <Text>© Planet Sandbox | All right rserved 2021</Text>
                </Box>
              </Box>
            </Col>
            <Col className="xl-8 lg-8 md-12 sm-12 xs-12">
               <Box className="footer-list">
                <Row>
                  <Col className="xl-3 lg-3 md-6 sm-6 xs-6">
                  <Text className="footer-title">Products</Text>
                    <List>
                      {data.products.map((product, index) =>
                        <ListItem key={index}><Link href={product.productLink}><a>{product.productName}</a></Link></ListItem>
                      )}
                    </List>
                  </Col>
                  <Col className="xl-3 lg-3 md-6 sm-6 xs-6">
                  <Text className="footer-title">Information</Text>
                    <List>
                      {data.information.map((info, index) =>
                        <ListItem key={index}><Link href={info.infoLink}><a>{info.infoName}</a></Link></ListItem>
                      )}
                    </List>
                  </Col>
                  <Col className="xl-3 lg-3 md-6 sm-6 xs-6">
                  <Text className="footer-title">Introduce</Text>
                    <List>
                      {data.documentation.map((document, index)=>
                         <ListItem key={index}><a href={document.documentLink}>{document.documentName}</a></ListItem>
                      )}
                    </List> 
                  </Col>
                  <Col className="xl-3 lg-3 md-6 sm-6 xs-6">
                    <Text className="footer-title">join our community</Text>
                    <List className="footer-link">
                      {data.links.map((link, index) =>
                        <ListItem key={index}><Link href={link.url}><a target="_blank">{link.icon} {link.name}</a></Link></ListItem>
                      )}
                    </List> 
                  </Col>
                </Row>
               </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
