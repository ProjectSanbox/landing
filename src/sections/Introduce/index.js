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
                    <Text>Planet Sandbox is the biggest physic sandbox game that allows players to build and custom creative sandbox world with the limitless build-in item.​ And it is also a multiplayer TPS NFT GAME that lets users engaging in the combat arena and profit from battles
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