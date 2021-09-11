import React, {useEffect, useState} from "react";
import HeadingWrapper from './heading.style';
import Image from 'reusecore/Image';
import Button from 'reusecore/Button';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Box from 'reusecore/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from 'assets/images/logo.png'
import arrow from 'assets/images/banner/arrow.svg';
import decorate from 'assets/images/banner/decorate.png';
import anime from 'animejs/lib/anime';


const HeadingBanner = () => {

    const [state, setState] = useState(true);

    useEffect(() =>{

        setInterval(() => {
            setState(!state);
        }, 10000);

        const aniamate1 = anime.timeline({
            loop: false,
        })
        .add({
            targets: '.heading-content h1',
            translateX: [-1000, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 800,
            delay: anime.stagger(500)
        })

        const animate2 = anime.timeline({
            loop: true,
            duration: 500
        })
        .add({
            targets: '.register div img',
            opacity: [1, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            delay: anime.stagger(120)
        })
        
    }, [])


    return (
        <HeadingWrapper id="home">
            <div className="heading">
                <Box className="headingBackground">
                    <Box className="heading-content">
                        <Image src={logo} />
                        <Heading>Join The biggest third-person</Heading>
                        <Heading>sandbox game on blockchain nOW!!!</Heading>
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
                </Box>
            </div>
        </HeadingWrapper>
    );
};

export default HeadingBanner;
