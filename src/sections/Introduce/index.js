import React, { Component, useEffect, useState } from 'react';
import Box from 'reusecore/Box';
import Text from 'reusecore/Text';
import Heading from 'reusecore/Heading';
import Image from 'reusecore/Image';
import IntroduceWrapper from './introduce.style';
import 'aos/dist/aos.css';
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'


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
        <IntroduceWrapper id="video">
            <Box className="introduce">
                <Box className="introduce-content">
                    <Heading>About</Heading>
                    <Text>Planet Sandbox is the ultimate physic sandbox game that allows players to unleash creativity on the sandbox worlds with unlimited built-in items. 
                    It is also a multiplayer TPS NFT game that let users engage in their original combat arena and make profits from the battle.
                    </Text>
                </Box>

                <Box className="introduce-video">
                   <Box className="video-wrapper">
                        <Box><Plyr source={videoSrc} /></Box>
                        <Text>Watch Trailer</Text>
                   </Box>
                </Box>
            </Box>
        </IntroduceWrapper>
    )
}


export default Introduce;