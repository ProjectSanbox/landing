import React, { useEffect } from 'react';
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
        arrow: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      useEffect(() =>{
        AOS.init({
          throttleDelay: 99, 
          debounceDelay: 50,
          disable: false,
          duration : 500
      })
      }, [])

    return(
        <OurTeamWrapper id="ourteam">
            <Box className="ourteam-background">&nbsp;</Box>
            <Container>
                <Box className="ourteam-heading">
                    <Heading>Core Team</Heading>
                    <Text className="hide">Behind a great game stand the passionate and talented people in the industry.
                      <br/>We want to bring the best experience to all the players.</Text>
                    <Text className="screen">Behind a great game stand the passionate and talented people in the industry.
                      We want to bring the best experience to all the players.</Text>
                </Box>
                <Box className="ourteam-content">
                   <Slider {...settings}>
                        {data.ourteam.map((team, index) =>
                        <Box data-aos={team.animation} key={index}  data-aos-duration={(index + 1) * 500} className="ourteam-item">
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
                </Box>
            </Container>
            <Box className="content-backgound">&nbsp;</Box>
        </OurTeamWrapper>
    );
}

export default OurTeam;