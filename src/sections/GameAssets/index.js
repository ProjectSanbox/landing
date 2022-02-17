import React, { useEffect } from "react";
import GameAssetsWrapper from "./gameassets.style";
import { Container, Row, Col } from "reusecore/Layout";
import { SlickSlider, SliderItem } from "reusecore/SlickSlider";
import Box from "reusecore/Box";
import Image from "reusecore/Image";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import { NextArrow, PrevArrow } from "sections/Custom/customArrows";
import data from "assets/data/nft";
import AOS from "aos";

const Block = () => {
  const settings = {
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom"></div>,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow className="nextButton" />,
    prevArrow: <PrevArrow className="preButton" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      throttleDelay: 99,
      debounceDelay: 50,
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <GameAssetsWrapper className="section" id="nft">
      <Container>
        <Box className="NFT-heading">
          <Heading>Game Assets</Heading>
          <Box>
            <Text>
              Each object will have its own categories and properties that
              define its characteristic. Rarity is defined by NFT properties{" "}
            </Text>
          </Box>
        </Box>
        <Box className="NFT-content">
          <SlickSlider {...settings}>
            {data.items.map((item, index) => (
              <SliderItem key={index}>
                <Box
                  data-aos="fade-down"
                  data-aos-delay={index * 200}
                  className="NFT-item"
                >
                  <Box className="NFT-weapon">
                    <Image id={item.id} src={item.asset} />
                  </Box>
                  <Box className="intro">
                    <Text className="heading">{item.name}</Text>
                    <Text>{item.info}</Text>
                  </Box>
                </Box>
              </SliderItem>
            ))}
          </SlickSlider>
        </Box>
      </Container>
    </GameAssetsWrapper>
  );
};

export default Block;
