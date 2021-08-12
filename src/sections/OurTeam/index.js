import React from 'react';
import OurTeamWrapper from './ourteam.style';
import {Container, Row, Col} from 'reusecore/Layout';
import Heading from 'reusecore/Heading'
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Text from 'reusecore/Text';
import data from 'assets/data/ourteam';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {NextArrow, PrevArrow} from 'sections/Custom/customArrows';

const OurTeam = () =>{
    const settings = {
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
        <div className="ft-slick__dots--custom">
        </div>
        ),
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow className="nextButton" />,
        prevArrow: <PrevArrow className="preButton" />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return(
        <OurTeamWrapper id="ourteam">
            <Box className="ourteam-background">&nbsp;</Box>
            <Container>
                <Box className="ourteam-heading">
                    <Heading>Core Team</Heading>
                </Box>
                <Box className="ourteam-content">
                   <Slider {...settings}>
                        {data.ourteam.map((team, index) =>
                        <Box data-aos={team.animation} key={index} className="ourteam-item">
                             <Box className="ourteam-img">
                                <Image src={team.avatar} />
                             </Box>
                           <Box className="ourteam-info">
                            <Text className="ourteam-name">{team.name}</Text>
                            <Text className="ourteam-role">{team.job}</Text>
                           </Box>
                        </Box>
                        )}
                   </Slider>
                   <Box className="content-backgound"></Box>
                </Box>
            </Container>
        </OurTeamWrapper>
    );
}

export default OurTeam;