import React, { Component, useEffect, useState } from 'react';

import { Container, Row, Col } from 'reusecore/Layout';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';
import Button from 'reusecore/Button';
import imageContent from 'assets/images/products/contentAbout.webp';
import AboutSectionWrapper from './production.style';
import {BiPlayCircle} from 'react-icons/bi'
import {GrClose} from 'react-icons/gr';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Production = () => {
    
    const [state, setState] = useState({
        openVideo: false
    })

    useEffect(() => {
        AOS.init({
            duration : 500
        })
    }, [])

    const toggleVideo = (status) =>{
        setState({...state, openVideo: status});
    }

    return (
        <AboutSectionWrapper id="about">
            <Container>
                <Row>
                    <Col style={{ overflow: 'hidden' }} className="lg-5 col-5 md-5 sm-12 xs-12">
                        <Box data-aos="fade-right" className="production-info">
                            <Heading>THE BIGGEST SANDBOX TPS GAME ON BLOCKCHAIN </Heading>
                            <Text>
                            Planet Sandbox is biggest physic sandbox game allow players build and custom creative sandbox world with limitless build-in item.
                            </Text>
                            <Text>
                            Planet Sandbox is operated on Supported Network including Binance Smart Chain.
                            </Text>
                            <Text>
                            Last but not least,  Planet Sandbox is also a multiplayer TPS NFT GAME that lets user engaging in the combat arena and profit from battles
                                </Text>
                            
                        </Box>
                    </Col>
                    <Col className="lg-7 col-7 md-7 sm-12 xs-12">
                        <Box className="production-img">
                          <Image style={{width: '90%', marginLeft: '10%'}} src={imageContent} />
                          <Button onClick={() => toggleVideo(true)}>
                            <a class="play-btn" href="javascript:0"></a>
                          </Button>
                        </Box>
                    </Col>
                </Row>
               {state.openVideo &&  <Box onClick={() => toggleVideo(false)} className="overlay">
                    <Button onClick={() => toggleVideo(false)}><GrClose/></Button>
                    <iframe width="85%" height="90%" src="https://www.youtube.com/embed/ML1pWYdm1WE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Box>}
            </Container>
        </AboutSectionWrapper>
    )
}


export default Production;