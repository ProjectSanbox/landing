import React, {useEffect, useState} from "react";
import HeadingWrapper from './heading.style';
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


const HeadingBanner = () => {
    useEffect(() =>{
        const animate2 = anime.timeline({
            loop: true,
            duration: 500
        })
        .add({
            targets: '.register div img',
            opacity: [1, 0],
            easing: 'easeOutExpo',
            duration: 800,
            delay: anime.stagger(100)
        })

        const banner = document.querySelector('div.heading');
        let width = window.innerWidth;
        let height = width * 56.25 / 100;
        window.addEventListener('resize', () =>{
            width = window.innerWidth;
            height = width * 56.25 / 100;
            banner.style.height = height + "px";
        })
        banner.style.height = height + "px";
        
    }, [])


    return (
        <HeadingWrapper id="home">
            <Box className="heading">
                <Box className="headingBackground">
                    <Container>
                        <Box className="heading-content">
                            <Image src={logo} />
                            <Heading>Welcome to the ultimate battleverse!</Heading>
                            <Heading>Choose your NFT gear and jump into this crypto powered real time shooter unlike any other!</Heading>
                            <Box className="register">
                                <Box>
                                    <Image src={arrow} />
                                    <Image src={arrow} />
                                    <Image src={arrow} />
                                    <Image src={arrow} />
                                    <Image src={arrow} />
                                </Box>
                                <Button className="banner-btn"><Image src={decorate} /><Text as="span">Registration Soon</Text></Button>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </HeadingWrapper>
    );
};

export default HeadingBanner;
