import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {List, ListItem} from 'reusecore/List';
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import data from "assets/data/footer";
import Image from "reusecore/Image"
import FooterWrapper from "./footer.style";
import logo from "assets/images/NewLogo.svg";
import {GrFormNextLink} from 'react-icons/gr';
import Input from "reusecore/Form/Input";
import Button from "reusecore/Button";
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
          <Box className="footer-heading">
            <Box className="footer-heading-content">
              <Image src={logo} />
              <Text>Polrare</Text>
            </Box>
          </Box>
          <Box className="footer-main-content">
              <Row>
                <Col className="lg-3 col-4 md-4 sm-6 xs-12">
                  <Heading>Contact us</Heading>
                  <List>
                      <ListItem>
                        <Link href="tel:+84.963.580.812"><a>T: +84.963.580.812</a></Link>
                      </ListItem>
                      <ListItem>
                        <Link href="mailto:contact@polrare.io"><a>M: contact@polrare.io</a></Link>
                      </ListItem>
                  </List>
                </Col>
                <Col className="lg-3 col-4 md-4 sm-6 xs-12">
                  <Heading>Documentation</Heading>
                  <List>
                     {data.documentation.map((document, index) => 
                        <ListItem key={index}>
                         <Link href={document.documentLink}><a target="_blank" className="upper">{document.documentName}</a></Link>                      
                       </ListItem>
                     )}
                  </List>
                </Col>
                <Col className="lg-3 col-4 md-4 sm-6 xs-12">
                  <Heading>Find us on</Heading>
                  <List>
                      {data.links.map((link, index) =>
                        <ListItem key={index}>
                          <Link href={link.url}><a target="_blank" className="upper">{link.icon} {link.name}</a></Link>                                          
                        </ListItem>
                      )}
                  </List>
                </Col>
                <Col className="lg-3 col-4 md-4 sm-6 xs-12">
                  <Heading>Join Newsletter</Heading>
                  <ListItem>
                  Be the first to hear about upcoming event
                  </ListItem>
                  <ListItem>
                      <form action={email} method="post" encType="text/plain">
                        <Box className="footer-input">
                          <Input type="email" onChange={HandlerEmail} placeholder="Enter your email"/>
                          {email === '' ? 
                          <Button type="button">
                            <GrFormNextLink/>
                          </Button> : 

                          <Button type="submit">
                            <GrFormNextLink/>
                          </Button>
                          }
                        </Box>
                      </form>
                  </ListItem>
                </Col>
              </Row>
            </Box>
            <Box className="footer-introduce">
              <Text>© Polare | All right rserved 2021</Text>
              {/* <Box className="footer-introduce-service">
                <Text>We use cookies for better service.</Text>
              </Box> */}
            </Box>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
