import React, { useEffect } from 'react';
import FeaturesWrapper from './features.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Image from 'reusecore/Image';
import Link from "next/link";
import { Container, Row, Col } from 'reusecore/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from 'assets/data/features';


const Features = () => {

    useEffect(() => {
        AOS.init({
            duration: 500
        })
    }, [])


    return (
    <FeaturesWrapper id="features">
        <Container>
            <Box className="features-background">&nbsp;</Box>
            <Box className="features-heading">
                <Heading>Features</Heading>
                <Text>All the distinctive gaming features revolving around our ecosystem</Text>
            </Box>
            <Box className="features-content">
                <Row>
                    {
                        data.feuatures.map((feuature, index) =>{
                            return(
                                <Col key={index} className="lg-4 md-4 sm-6 xs-12">
                                <Box className="features-item">
                                    <Image src={feuature.img} />
                                    <Text className="features-item-heading">
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
    </FeaturesWrapper>
    );
}

export default Features;