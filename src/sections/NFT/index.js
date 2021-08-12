import React, { useEffect } from 'react';
import BlockWrapper from './nft.style';
import { Container, Row, Col } from 'reusecore/Layout';
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Link from "next/link";
import blockImage from 'assets/images/block/block-image.jpg';
import Slider from 'react-slick';
import {NextArrow, PrevArrow} from 'sections/Custom/customArrows';
import data from 'assets/data/NFT';

const Block = () => {

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
        <BlockWrapper id="NFT">
            <Container>
                <Box className="NFT-heading">
                    <Heading>NFTs items</Heading>
                    <Box>
                        <Text>Each object will have its own categories and properties that define its characteristic.<br/>
                        Rarity is defined by NFT properties</Text>
                        <Button>Marketplace</Button>
                    </Box>
                </Box>
                <Box className="NFT-content">
                    <Slider {...settings}>
                    {data.NFT.map((item, index) =>
    
                        <Box key={index} className="NFT-item">
                            <Box className="item-info">
                                <Text className="info-title">{item.name}</Text>
                                <Text>{item.type}</Text>
                                <Box className="item-price">
                                    <Text>{item.price} ETH</Text>
                                </Box>
                            </Box>
                        </Box>
                        )} 
                    </Slider>
                </Box>
            </Container>
        </BlockWrapper>
    );
}

export default Block;