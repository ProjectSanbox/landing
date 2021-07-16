import React from 'react';
import OurTeamWrapper from './ourteam.style';
import {Container, Row, Col} from 'reusecore/Layout';
import Heading from 'reusecore/Heading'
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Text from 'reusecore/Text';
import data from 'assets/data/ourteam';
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurTeam = () =>{
    return(
        <OurTeamWrapper id="ourteam">
            <Box className="ourteam-background">&nbsp;</Box>
            <Container>
                <Box className="ourteam-heading">
                    <Heading>Core Team</Heading>
                </Box>
                <Box className="ourteam-content">
                    <Row>
                        {data.ourteam.map((ourteam, index) =>
                        <Col style={{overflow: 'hidden'}} key={index} className="lg-4 md-4 sm-6 xs-12 col-12">
                            <Box data-aos={ourteam.animation} className="ourteam-item">
                                <Box className="ourteam-item-heading">
                                    <Image src={ourteam.avatar} />
                                    <Text>{ourteam.name}</Text>
                                    <Text className="text-upper text-job">{ourteam.job}</Text>
                                </Box>
                                <Box className="ourteam-item-desc">
                                    <Text>{ourteam.desc}</Text>
                                </Box>
                            </Box>
                        </Col>
                        )}
                    </Row>
                </Box>
            </Container>
        </OurTeamWrapper>
    );
}

export default OurTeam;