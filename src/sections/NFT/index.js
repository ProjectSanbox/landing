import React, { useEffect } from 'react';
import BlockWrapper from './nft.style';
import { Container, Row, Col } from 'reusecore/Layout';
import {SlickSlider, SliderItem} from 'reusecore/SlickSlider';
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import {NextArrow, PrevArrow} from 'sections/Custom/customArrows';
import data from 'assets/data/nft';


const Block = () => {

    const settings = {
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
        <div className="ft-slick__dots--custom">
        </div>
        ),
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
                    <Heading>NFT items</Heading>
                    <Box>
                        <Text>Each item will have its unique categories and properties which define its unique characteristics. The originality comes from those NFT properties, thus creating the utmost rarity of the item. </Text>
                    </Box>
                </Box>
                <Box className="NFT-content">
                  <SlickSlider {...settings}>
                    {data.items.map((item, index) =>
                      <SliderItem key={index}>
                       <Box className="NFT-item">
                         <Image src={item.weapon} />
                         <Box className="intro">
                           <Text className="heading">{item.name}</Text>
                           <Text>{item.info}</Text>
                         </Box>
                       </Box>
                     </SliderItem>
                    )}
                  </SlickSlider>
                </Box>
            </Container>
        </BlockWrapper>
    );
}

export default Block;