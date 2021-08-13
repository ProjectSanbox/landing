import React, {useEffect} from "react";
import HeadingWrapper from './heading.style';
import Image from 'reusecore/Image';
import Heading from 'reusecore/Heading';
import Button from 'reusecore/Button';
import Text from 'reusecore/Text';
import Box from 'reusecore/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderText from 'assets/images/headerText.png';


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
        <HeadingWrapper>
            <div className="heading">
                <Box className="headingBackground">
                    <Box className="heading-content">
                        <Image src={HeaderText} />
                        <Text>The biggest third-person sandbox game on blockchain</Text>
                        <Button>
                            Pre-Register
                        </Button>
                    </Box>
                </Box>
            </div>
        </HeadingWrapper>
    );
};

export default HeadingBanner;
