import React, { useEffect, useState } from 'react';
import GamePlayWrapper from './gameplay.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Image from 'reusecore/Image';
import {List, ListItem} from 'reusecore/List';
import { Container, Row, Col } from 'reusecore/Layout';

import Slider from 'react-slick';
import {NextArrow, PrevArrow} from 'sections/Custom/customArrows';
import data from 'assets/data/gameplay';

const GamePlay = () => {
    const settings = {
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
        <div className="ft-slick__dots--custom">
        </div>
        ),
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow className="nextButton" />,
        prevArrow: <PrevArrow className="preButton" />,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      


    return (
    <GamePlayWrapper id="gameplay">
       <Container>
        <Box className="gameplay-heading">
            <Heading>Gameplay</Heading>
            <Text>Planet Sandbox is the total package for the unbound hidden vision that lies deep inside each player. Like a superior being with almighty powers, players can build the parts, innovate their world, play their own game rules, share with their friends and monetize from their creation. 

</Text>
        </Box>
       </Container>
       <Box className="gameplay-content">
        <Slider {...settings}>
            {data.gameplay.map((gameplay, index) =>
                <Box key={index}>
                    <Box className="gameplay-video">
                            <Box>
                                <Image className="video" src={gameplay.imgVideo}/>
                            </Box>
                            <Box className="gameplay-intro">
                            <Box>
                                <Image src={gameplay.introImage} />

                                <Text className="intro-heading">{gameplay.title}</Text>
                                <Text>{gameplay.content}</Text>
                                {gameplay.listContent &&
                                <List>
                                    {
                                        gameplay.listContent.map((content, index) =>
                                            <ListItem key={index}>
                                                {content}
                                            </ListItem>
                                        )
                                    }
                                </List>
                                }
                            </Box>
                            </Box>
                    </Box>
               </Box>
            )}
        </Slider>
       </Box>
    </GamePlayWrapper>
    );
}

export default GamePlay;