import React, {useEffect} from "react";
import ExhibitionWrapper from './exhibition.style';
import Image from 'reusecore/Image';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Box from 'reusecore/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Exhibition = () => {

    useEffect(() => {
        AOS.init({
            duration : 500
        })
    }, [])

    return (
        <ExhibitionWrapper>
            <div className="exhibition" style={{width:'100%', height:550,marginTop:'81px'}}>
                <Box className="headingBackground">
                   <Box className="headingContent">
                        <Box data-aos="fade-right">
                            <Heading>SANDBOX PLANET</Heading>
                            <Text>The biggest Third-Person Shooter game on blockchain</Text>
                            <Text>Play, Create, Own, and Govern a virtual world made by players</Text>
                        </Box>
                   </Box>
                </Box>
            </div>
        </ExhibitionWrapper>
    );
};

export default Exhibition;
