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
                            <Heading>FPS Sample</Heading>
                            <Text>A multiplayer First-Person Shooter game project</Text>
                            <Text>Use it to learn about the latest features in Unity, extract and use the parts
                            you need or use the full project as a starting point for your own games.</Text>
                        </Box>
                   </Box>
                </Box>
            </div>
        </ExhibitionWrapper>
    );
};

export default Exhibition;
