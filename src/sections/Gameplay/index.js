import React, { useEffect } from 'react';
import GamePlayWrapper from './gameplay.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Image from 'reusecore/Image';
import Link from "next/link";
import { Container, Row, Col } from 'reusecore/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from 'assets/data/gameplay';


const GamePlay = () => {

    useEffect(() => {
        AOS.init({
            duration: 500
        })
    }, [])


    return (
    <GamePlayWrapper id="gameplay">
        <Container>
            <Box className="gameplay-background">&nbsp;</Box>
            <Box className="gameplay-heading">
                <Heading>Game Play</Heading>
                <Text>All the distinctive gaming gameplay revolving around our ecosystem</Text>
            </Box>
            <Box className="gameplay-content">
                <Row>
                    {
                        data.feuatures.map((feuature, index) =>{
                            return(
                                <Col key={index} className="lg-6 md-6 sm-12 xs-12">
                                <Box className="gameplay-item">
                                    <Image src={feuature.img} />
                                    <Text className="gameplay-item-heading">
                                        {feuature.heading}
                                    </Text>
                                    <Text>{feuature.content}</Text>
                                </Box>
                            </Col>
                            );
                        })
                    }
                </Row>
            </Box>
        </Container>
    </GamePlayWrapper>
    );
}

export default GamePlay;