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


const Introduce = () => {

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
        <AboutWrapper id="video">
          <Container>
            <Box className="about">
                  <Box className="about-content">
                      <Heading>About</Heading>
                      <Text className="hide">Planet Sandbox is the biggest physic sandbox game that allows players to build and custom<br/>
                        creative sandbox world with the limitless build-in item.​ And it is also a multiplayer TPS <br/>
                          NFT GAME that lets users engaging in the combat arena and profit from battles
                      </Text>
                      <Text className="screen">Planet Sandbox is the biggest physic sandbox game that allows players to build and custom
                        creative sandbox world with the limitless build-in item.​ And it is also a multiplayer TPS
                          NFT GAME that lets users engaging in the combat arena and profit from battles
                      </Text>
                  </Box>

                <Box className="about-video">
                   <Box className="video-wrapper">
                        <Box><Plyr source={videoSrc} /></Box>
                        <Text>Watch Trailer</Text>
                   </Box>
                </Box>
            </Box>
            </Container>
            <Box className="about-background">&nbsp;</Box>
        </AboutWrapper>
    )
}


export default Introduce;