import React, { useEffect } from 'react';
import BlockWrapper from './block.style';
import { Container, Row, Col } from 'reusecore/Layout';
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Link from "next/link";
import blockImage from 'assets/images/block/block-image.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Block = () =>{

    useEffect(() =>{
        AOS.init({
            duration : 500,
            easing: 'linear',
            offset: 1
        })
    })

    return(
        <BlockWrapper>
            <Container>
                <Row>
                    <Col className="lg-7 md-7 sm-12 xs-12">
                        <Box className="block-image">
                            <Image src={blockImage} />
                        </Box>
                    </Col>
                    <Col className="lg-5 md-5 sm-12 xs-12">
                        <Box className="block-content">
                            <Box data-aos="fade-down">
                                <Text className="block-content-heading">NFT</Text>
                                <Text>Non-Fungible Tokens (NFTs) are virtual tokens minted on the blockchain for digital scarcity, security, and authenticity. They are unique, indivisible, and non-interchangeable - allowing true digital ownership of in-game assets.</Text>
                            </Box>
                            <Button data-aos="fade-up">
                                <Link href="//marketplace.nmb.com.vn/#/">
                                    <a target="_blank">Buy Assets</a>
                                </Link>
                            </Button>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </BlockWrapper>
    );
}

export default Block;