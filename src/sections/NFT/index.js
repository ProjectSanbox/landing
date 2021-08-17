import React, { useEffect } from 'react';
import BlockWrapper from './nft.style';
import { Container, Row, Col } from 'reusecore/Layout';
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';

import Slider from 'react-slick';
import {NextArrow, PrevArrow} from 'sections/Custom/customArrows';
import data from 'assets/data/resource';
import coin from 'assets/images/resource/coin.png'

const Block = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerPadding: 30,
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

    return (
        <BlockWrapper id="nft">
            <Container>
                <Box className="NFT-heading">
                    <Heading>NFTs items</Heading>
                    <Box>
                        <Text>Each object will have its own categories and properties that define its characteristic.<br/>
                        Rarity is defined by NFT properties</Text>
                    </Box>
                </Box>
                <Box className="NFT-content">
                    <Slider {...settings}>
                    {data.NFT.map((item, index) =>
    
                        <Box key={index} className="NFT-item">
                            <Text className="item-weapon">{item.type}</Text>
                            <Text className="item-name">{item.name}</Text>
                            <Image className="item-image" src={item.image}/>
                            <Box className="item-price">{item.price} $PSB</Box>
                        </Box>
                        )} 
                    </Slider>
                </Box>
            </Container>
        </BlockWrapper>
    );
}

export default Block;