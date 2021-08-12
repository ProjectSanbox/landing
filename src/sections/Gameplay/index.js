import React, { useEffect, useState } from 'react';
import GamePlayWrapper from './gameplay.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Image from 'reusecore/Image';
import {List, ListItem} from 'reusecore/List';
import { Container, Row, Col } from 'reusecore/Layout';
import {GrClose} from 'react-icons/gr';
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow className="nextButton" />,
        prevArrow: <PrevArrow className="preButton" />
      };
      


    return (
    <GamePlayWrapper id="gameplay">
       <Container>
        <Box className="gameplay-heading">
            <Heading>Gameplay</Heading>
            <Text>Planet Sandbox is a virtual world where players can play, build, own, and monetize their virtual experiences. 
            We empower artists, creators, and players to build the platform they always envisioned, providing the means to unleash your creativity.</Text>
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
                                <Image src={gameplay.introImage} />
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