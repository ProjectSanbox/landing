import React, {useEffect, useState} from "react";
import BannerWrapper from './banner.style';
import Image from 'reusecore/Image';
import Button from 'reusecore/Button';
import { Container } from "reusecore/Layout";
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Box from 'reusecore/Box';
import logo from 'assets/images/logo.png'
import arrow from 'assets/images/banner/arrow.svg';
import decorate from 'assets/images/banner/decorate.png';
import anime from 'animejs/lib/anime';


const Banner = () => {
    return (
        <BannerWrapper id="home">
            <Box className="heading">
                <Box className="headingBackground">
                    <Container>
                        <Box className="heading-content">
                            <Heading className="heading-sm">Welcome to the ultimate battleverse!</Heading>
                            <Heading>Choose your NFT gear and jump into this crypto powered real time shooter unlike any other!</Heading>
                            <Box className="register">
                                <Button className="banner-btn"><Text as="span">Registration Soon</Text></Button>
                            </Box>
                        </Box>
                    </Container>
                    <Box className="overlay"></Box>
                </Box>
            </Box>
        </BannerWrapper>
    );
};

export default Banner;
