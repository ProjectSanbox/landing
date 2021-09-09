import React, {useEffect, useState} from "react";
import HeadingWrapper from './heading.style';
import Image from 'reusecore/Image';
import Button from 'reusecore/Button';
import Heading from 'reusecore/Heading';
import Box from 'reusecore/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from 'assets/images/logo.png'
import arrow from 'assets/images/banner/arrow.png';
import decorate from 'assets/images/banner/decorate.png';
import anime from 'animejs/lib/anime';


const HeadingBanner = () => {

    const [state, setState] = useState(true);

    useEffect(() =>{
        const texts = document.querySelectorAll('.heading-content h1');
        texts.forEach((e) =>{
            e.innerHTML = e.textContent.replace(/\S/g, "<span>$&</span>");
        })

        setInterval(() => {
            setState(!state);
        }, 15000);

        anime.timeline({
            loop: false,
        })
        .add({
            targets: '.heading-content h1 span',
            translateY: [-1000, 0],
            opacity: [0, 1],
            scale: [10, 1],
            easing: "easeOutExpo",
            duration: 300,
            delay: anime.stagger(100)
            }) 
    })


    return (
        <HeadingWrapper id="home">
            <div className="heading">
                <Box className="headingBackground">
                    <Box className="heading-content">
                        <Image src={logo} />
                        <Heading>Join The biggest third-person</Heading>
                        <Heading>sandbox game on blockchain nOW!!!</Heading>
                        <Box className="register">
                            <Box><Image src={arrow} /></Box>
                            <Button><Image src={decorate} />Registration Soon</Button>
                        </Box>
                    </Box>
                </Box>
            </div>
        </HeadingWrapper>
    );
};

export default HeadingBanner;
