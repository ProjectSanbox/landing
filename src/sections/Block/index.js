import React, { useEffect } from 'react';
import BlockWrapper from './block.style';
import { Container, Row, Col } from 'reusecore/Layout';
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Link from "next/link";
import blockImage from 'assets/images/block/block-image.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Block = () => {

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'linear',
            offset: 1
        })
    })

    return (
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
                                <Text className="block-content-heading">NFT strategy </Text>
                                <Text>
                                    The NFT strategy for this game will center around weapons, buildings, and ownable land.
                                    can use this land to place workshops and resource mines.

                                    Players can also improve these buildings and the land parcels by upgrading them.
                                     However, land will be limited available. T
                                     his all depends on player numbers.
                                      You’ll be able to buy some NFTs from the NFT Makertplace (Polrare, OpenSea), while players can upgrade other items only through active gameplay and play-to-earn mechanics. Special unit upgrades will only be available as NFT purchases
                                </Text>
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