import React, { Component, useEffect } from 'react';

import { Container, Row, Col } from 'reusecore/Layout';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';


import AboutSectionWrapper from './production.style';

import lottie from 'lottie-web';
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Production = () => {
    const production = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: production.current, // the dom element
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./data.json'), // the animation data
        });

        AOS.init({
            duration : 500
        })
    }, [])

    return (
        <AboutSectionWrapper id="production">
            <Container>
                <Row>
                    <Col style={{ overflow: 'hidden' }} className="lg-5 col-5 md-5 sm-12 xs-12">
                        <Box data-aos="fade-right" className="production-info">
                            <Heading>Multi-chain system</Heading>
                            <Text>
                            Polrare leverages the standard of the layer 2 network  to offer NFTs financial solutions and built exhibitions shown entirely in virtual reality.
                            </Text>
                            <Text>
                                The launch phase release will be Ethereum and Binance Smart Chain.
                                The second release will allow support Polkadot,Solana.
                                Then will allow support Cardano, Cosmos and Tron.
                            </Text>
                            
                        </Box>
                    </Col>
                    <Col className="lg-7 col-7 md-7 sm-12 xs-12">
                        <Box className="production-img">
                          
                            <div ref={production}></div>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </AboutSectionWrapper>
    )
}


export default Production;