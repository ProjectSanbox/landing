import React, { Component, useEffect, useState } from 'react';


import Box from 'reusecore/Box';

import Text from 'reusecore/Text';
import Image from 'reusecore/Image';

import logo from 'assets/images/favicon.png';
import IntroduceWrapper from './introduce.style';

import 'aos/dist/aos.css';
import gun1 from 'assets/images/introduce/gun1.png';
import gun2 from 'assets/images/introduce/gun2.png';
import gun3 from 'assets/images/introduce/gun3.png';
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
                    <Image src={logo} />
                    <Text>Planet Sandbox is biggest physic sandbox game allow players
                         build and custom creative sandbox world with limitless build-in item.​ 
                         And it is also a multiplayer TPS NFT GAME that lets user engaging in the combat 
                         arena and profit from battles​
                    </Text>
                    <Box className="introduce-weapon">
                        <Image src={gun1}/>
                        <Image src={gun2}/>
                        <Image src={gun3}/>
                    </Box>
                </Box>

                <Box className="introduce-video">
                   <Box className="video-wrapper">
                        <Box><Plyr source={videoSrc} /></Box>
                        <Text>Trailer</Text>
                   </Box>
                </Box>
            </Box>
        </IntroduceWrapper>
    )
}


export default Introduce;