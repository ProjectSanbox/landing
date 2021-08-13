import React from 'react';
import SBPWrapper from './sbp.style';
import {Container, Row, Col} from 'reusecore/Layout';
import Heading from 'reusecore/Heading'
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Text from 'reusecore/Text';
import {List, ListItem} from 'reusecore/List';
import SBPImage from 'assets/images/SBP/sbpImage.png';
import SBPContentLeft from 'assets/images/SBP/SBPContentLeft.png';
import SBPRightImg1 from 'assets/images/SBP/SBPRightImg1.png';
import arrowRight from 'assets/images/SBP/SBParrowright.png';
import arrowLeft from 'assets/images/SBP/SBParrowleft.png';
import data from 'assets/data/SBP';


const SBP = () =>{ 
    return(
        <SBPWrapper id="SBP">
            <Container>
                <Box className="SBP-heading">
                    <Heading>WHAT'S SBP</Heading>
                </Box>
                <Box className="SBP-content">
                    <Row style={{alignItems: 'center'}}>
                        <Col className="lg-8 xl-4 md-12 sm-12 xs-12">
                            <Box className="SBP-content-left">
                                <Box>
                                    <Image src={SBPContentLeft} />
                                    <Text className="SBP-left-heading">PLAY TO EARN</Text>
                                    <Text>Only used Premium Hero</Text>
                                </Box>
                                <List>
                                   {data.SBPList.map((list, index) =>(
                                        <ListItem key={index}>{list.content}</ListItem>
                                   ))}
                                </List>
                            </Box>
                        </Col>
                        <Col className="lg-8 xl-4 md-12 sm-12 xs-12">
                            <Box className="SBP-content-img">
                                <Box className="SBP-arrow-left"><Image src={arrowLeft} /></Box>
                                <Box><Image className="SBP-main-img" src={SBPImage} /></Box>
                                <Box className="arrow-right-box"><Image className="SBP-arrow-right" src={arrowRight} /></Box>
                            </Box>
                        </Col>
                        <Col className="lg-8 xl-4 md-12 sm-12 xs-12">
                            <Box className="SBP-content-right">
                                {data.SBPContent.map((content, index) => 
                                <Box key={index} className="SBP-right-item">
                                    <Box> <Image src={content.img} /></Box>
                                    <Text>{content.title}</Text>
                                </Box>
                                ) }
                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Container>
        </SBPWrapper>
    );
}

export default SBP;