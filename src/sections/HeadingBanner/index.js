import React, {useEffect} from "react";
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


const HeadingBanner = () => {

    useEffect(() => {
        AOS.init({
            duration : 500
        })
    }, [])

    useEffect(() =>{
        window.addEventListener('resize', () =>{
            const width = window.innerWidth;
            const height = width / 1.77777777778;
            const heding = document.querySelector('.heading');
            heding.style.height = height + "px";
        })

        const width = window.innerWidth;
        const height = width / 1.77777777778;
        const heding = document.querySelector('.heading');
        heding.style.height = height + "px";
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
                            <Button><Image src={decorate} />Resgiter Comming Soon</Button>
                        </Box>
                    </Box>
                </Box>
            </div>
        </HeadingWrapper>
    );
};

export default HeadingBanner;
