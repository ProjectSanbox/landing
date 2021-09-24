import React, { useEffect, useState } from 'react';
import GamePlayWrapper from './gameplay.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import {SlickSlider, SliderItem} from 'reusecore/SlickSlider';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';
import {List, ListItem} from 'reusecore/List';
import { Container, Row, Col } from 'reusecore/Layout';
import {NextArrow, PrevArrow} from 'sections/Custom/customArrows';
import data from 'assets/data/gameplay';

const GamePlay = () => {
    const settings = {
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
        <div className="ft-slick__dots--custom">
        </div>
        ),
        dots: true,
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
            <Text className="hide">Planet Sandbox is a virtual world where players can play, build, own, and<br/>
                 monetize their virtual experiences. We empower artists, creators, and players<br/>
                 to build the platform they always envisioned, providing the means to unleash<br/>
                 your creativity. </Text>
            <Text className="screen">Planet Sandbox is a virtual world where players can play, build, own, and
                 monetize their virtual experiences. We empower artists, creators, and players
                 to build the platform they always envisioned, providing the means to unleash
                 your creativity. </Text>
        </Box>
       </Container>
       <Box className="gameplay-content">
            <SlickSlider {...settings}>
                {data.gameplay.map((gameplay, i) =>
                <SliderItem key={i}>
                    <Box className="gameplay-item">
                        <Box className="gameplay-image">
                            <Image src={gameplay.poster} />
                        </Box>
                        <Box className="gameplay-intro">
                            <Image src={gameplay.icon} />
                            <Heading>{gameplay.title}</Heading>
                            <Text>{gameplay.content}</Text>
                            {gameplay.listContent && 
                                <List>
                                   {gameplay.listContent.map((list, i) =>
                                    <ListItem key={i}>{list}</ListItem>
                                   )}
                                </List>
                            }
                        </Box>
                    </Box>
                </SliderItem>
                )}
                
            </SlickSlider>
       </Box>
    </GamePlayWrapper>
    );
}

export default GamePlay;