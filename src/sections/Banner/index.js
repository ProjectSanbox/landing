import React, { useEffect, useState } from "react";
import BannerWrapper from "./banner.style";
import Image from "reusecore/Image";
import Button from "reusecore/Button";
import { Container } from "reusecore/Layout";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Box from "reusecore/Box";
import AOS from "aos";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      throttleDelay: 99,
      debounceDelay: 50,
      disable: false,
      duration: 500,
      once: false,
      mirror: true,
    });
  });
  return (
    <BannerWrapper id="home">
      <Box className="heading">
        <Box className="headingBackground">
          <Container>
            <Box className="heading-content">
              <Heading data-aos="fade-up" className="heading-sm">
                Welcome to the ultimate battleverse!
              </Heading>
              <Heading data-aos="fade-up" data-aos-delay="500">
                Choose your NFT gear and jump into this crypto powered real time
                shooter unlike any other!
              </Heading>
              <Box className="register">
                <Button className="banner-btn">
                  <Text as="span"><a href="https://drive.google.com/file/d/122-s6QkUhDxvr_lREFdERxvjBJbr5w5c/view?usp=sharing/">Window</a></Text>
                </Button>
                <Button className="banner-btn">
                  <Text as="span"><a href="https://event.planetsandbox.io/">Lucky Event</a></Text>
                </Button>
                {/* <Button className="banner-btn">
                  <Text as="span"><a href="#">Mac (Coming soon) </a></Text>
                </Button>
                */}
              </Box>
              <Box className="register">
               
                <Button className="banner-btn">
                  <Text as="span"><a href="#">iOS (Coming soon)</a></Text>
                </Button>
                <Button className="banner-btn">
                  <Text as="span"><a href="#">Android (Coming soon)</a></Text>
                </Button>
              </Box>
            </Box>
          </Container>
          <Box className="overlay">&nbsp;</Box>
        </Box>
      </Box>
    </BannerWrapper>
  );
};

export default Banner;
