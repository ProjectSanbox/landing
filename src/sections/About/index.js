import React, { Component, useEffect, useState } from 'react';
import Box from 'reusecore/Box';
import Text from 'reusecore/Text';
import Heading from 'reusecore/Heading';
import Image from 'reusecore/Image';
import AboutWrapper from './about.style';
import 'aos/dist/aos.css';
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import {Container} from 'reusecore/Layout';
import AOS from 'aos';


const Introduce = () => {

    useEffect(() =>{
      AOS.init({
        throttleDelay: 99, 
        debounceDelay: 50,
        disable: false,
        duration : 500,
        once: false,
        mirror: true,
      })
    }, [])

    const videoSrc = {
        type: "video",
        sources: [
          {
            src: "https://www.youtube.com/watch?v=ML1pWYdm1WE",
            provider: "youtube",
          }
        ],
      };

    return (
        <AboutWrapper className="section" id="about">
          <Container>
            <Box className="about">
                  <Box className="about-content">
                      <Heading>About</Heading>
                      <Text className="hide">Planet Sandbox is the ultimate physic sandbox game that allows players<br/>
                      to build and customize creative sandbox worlds with unlimited build-in items. It is also a<br/>
                      multiplayer TPS NFT GAME that let users engage in the combat arena and profit from battles
                      </Text>
                      <Text className="screen">Planet Sandbox is the ultimate physic sandbox game that allows players 
                      to build and customize creative sandbox worlds with unlimited build-in items. It is also a
                      multiplayer TPS NFT GAME that let users engage in the combat arena and profit from battles
                      </Text>
                  </Box>

                <Box className="about-video">
                   <Box  data-aos="zoom-out-right" className="video-wrapper">
                        <Box><Plyr source={videoSrc} /></Box>
                   </Box>
                </Box>
            </Box>
            </Container>
            <Box className="about-background">&nbsp;</Box>
        </AboutWrapper>
    )
}


export default Introduce;