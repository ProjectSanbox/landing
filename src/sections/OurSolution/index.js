import React, { useEffect } from 'react';
import OursolutionWrapper from './oursolution.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Image from 'reusecore/Image';
import Link from "next/link";
import { Container, Row, Col } from 'reusecore/Layout';
import oursolution1 from 'assets/images/oursolution/oursolution1.svg';
import oursolution2 from 'assets/images/oursolution/oursolution2.svg';
import oursolution3 from 'assets/images/oursolution/oursolution3.svg';
import game from 'assets/images/oursolution/game.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Oursolution = () => {

    useEffect(() => {
        AOS.init({
            duration: 500
        })
    }, [])

    return (
        <OursolutionWrapper id="oursolution">
        <Container>
            <Box className="oursolution-background">&nbsp;</Box>
            <Box className="oursolution-heading">
                <Heading>Products</Heading>
                <Box>
                    <Text>Polrare is controlled via the DAO, which owns the most important smart contracts and assets of Polrare. Via the DAO, you decide and vote on how the world works.</Text>
                </Box>
            </Box>

            <Box className="oursolution-content">
                <Row>
                    <Col style={{ overflowX: 'hidden' }} className="lg-4 col-4 md-12 sm-12 xs-12">
                        <Box data-aos="fade-right">
                            <Box className="oursolution-content-heading">
                                <Text>#1</Text>
                            </Box>
                            <Heading>Museum</Heading>
                            <Text>
                                Polrare Museum is a digital museum where artists and collectors can earn passive income by loaning their NFTs via smart contracts.
                            </Text>
                            <Text>Polrare Museum gives curator freedom to easily create exhibitions
                                in Virtual Reality</Text>
                            <Box className="oursolution-content-btn">
                                <Button className="btn-tranperant-dark">
                                    <Link href="http://app.polrare.co">
                                        <a target="_blank">Lauch Demo</a>
                                    </Link>
                                </Button>
                            </Box>
                        </Box>
                    </Col>
                    <Col className="lg-8 col-8 md-12 sm-12 xs-12">
                        <Box data-aos="fade-left" className="oursolution-content-img">
                            <Image src={oursolution2} />
                        </Box>
                    </Col>
                </Row>
            </Box>

            <Box className="oursolution-content">
                <Row className="changecol">
                    <Col style={{ overflow: 'hidden' }} className="lg-4 col-4 md-12 sm-12 xs-12">
                        <Box data-aos="fade-left">
                            <Box className="oursolution-content-heading">
                                <Text>#2</Text>
                            </Box>
                            <Heading>Builder</Heading>
                            <Text>
                            With the simple and convenient Polrare Builder tool, users can easily create scenes, artworks, short videos and more. The only limit is your creativity, and users can take part in events to win prizes. For more experienced creators, the Polrare builder provides the tools to fill the world with social games and applications
                            </Text>
                            
                            <Box className="oursolution-content-btn">
                                <Link href="https://builder.polrare.co">
                                    <a className="dark-link" target="_blank"><Button className="btn-dark">Lauch demo</Button></a>
                                </Link>
                            </Box>
                        </Box>
                    </Col>
                    <Col className="lg-8 col-8 md-12 sm-12 xs-12">
                        <Box data-aos="fade-right" className="oursolution-content-img">
                            <Image src={oursolution1} />
                        </Box>
                    </Col>
                </Row>
            </Box>

            
            <Box className="oursolution-content">
                <Row>
                    <Col style={{ overflow: 'hidden' }} className="lg-4 col-4 md-12 sm-12 xs-12">
                        <Box data-aos="fade-right">
                            <Box className="oursolution-content-heading">
                                <Text>#3</Text>
                            </Box>
                            <Heading>Market</Heading>
                            <Text>
                            Polrare marketplace enables you to discover, buy and sell NFTs based on smart contracts - an unique feature that ensures the platform is safe, autonomous and reliable. Polrare marketplace provides the sellers with an opportunity to advertise and display their products; as well as gives the customers an wide access to the world of NFTs.
                           
                            </Text>

                            <Box className="oursolution-content-btn">
                                <Button className="btn-tranperant-dark">
                                    <Link href="http://app.polrare.co">
                                        <a target="_blank">Lauch Demo</a>
                                    </Link>
                                </Button>
                            </Box>
                        </Box>
                    </Col>
                    <Col className="lg-8 col-8 md-12 sm-12 xs-12">
                        <Box data-aos="fade-left" className="oursolution-content-img">
                            <Image src={oursolution3} />
                        </Box>
                    </Col>
                </Row>
            </Box>
            
            <Box className="oursolution-content">
                <Row className="changecol">
                    <Col style={{ overflow: 'hidden' }} className="lg-4 col-4 md-12 sm-12 xs-12">
                        <Box data-aos="fade-left">
                            <Box className="oursolution-content-heading">
                                <Text>#4</Text>
                            </Box>
                            <Heading>NFT Game</Heading>
                            <Text>
                            NFT Game is a virtual world where players can play, build, own, and monetize their virtual experiences. We empower artists, creators, and players to build the platform they always envisioned, providing the means to unleash your creativity.
                            </Text>

                            <Box className="oursolution-content-btn">
                                <Button className="btn-tranperant-dark">
                                    <Link href="http://app.polrare.co">
                                        <a target="_blank">Comming soon</a>
                                    </Link>
                                </Button>
                            </Box>
                        </Box>
                    </Col>
                    <Col className="lg-8 col-8 md-12 sm-12 xs-12">
                        <Box data-aos="fade-right" className="oursolution-content-img">
                            <Image src={game} />
                        </Box>
                    </Col>
                </Row>
            </Box>
        
        </Container>
    </OursolutionWrapper>
    );
}

export default Oursolution;