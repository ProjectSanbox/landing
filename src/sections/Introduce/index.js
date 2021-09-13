import React, { Component, useEffect, useState } from 'react';
import Box from 'reusecore/Box';
import Text from 'reusecore/Text';
import Heading from 'reusecore/Heading';
import Image from 'reusecore/Image';
import IntroduceWrapper from './introduce.style';
import 'aos/dist/aos.css';
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import { Container } from 'reusecore/Layout';


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
              <Container>
                <Box className="introduce-content">
                  <Heading>About</Heading>
                  <Text>Planet Sandbox is the ultimate physics-powered sandbox shooting game. Build and own arenas to fight other players in different game modes using your own NFT weapons and accessories. 
                        Powered by the $PSB and $PULV token, Planet Sandbox is the next evolution in the Play to Earn movement!
                  </Text>
                  </Box>
              </Container>

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