import React, { useEffect } from "react";
import PartnerWrapper from "./partner.style";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import data from "assets/data/partner";
import { Container } from "reusecore/Layout";
import Link from "next/link";
import { List, ListItem } from "reusecore/List";
import AOS from "aos";

const Partner = () => {
  useEffect(() => {
    AOS.init({
      throttleDelay: 99,
      debounceDelay: 50,
      disable: false,
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <PartnerWrapper id="partner">
      <Container>
        <Box className="partner-heading">
          <Heading>Partner</Heading>
        </Box>
        <Box data-aos="fade-down" className="partner-content">
          {data.partner.map((partner, index) => (
            <Link key={index} href={partner.src}>
              <a target={partner.target}>
                <Box className="item-border">
                  <Box className="partner-item">
                    <Box className="box">
                      <Image id={partner.id} src={partner.img} />
                    </Box>
                  </Box>
                </Box>
              </a>
            </Link>
          ))}
        </Box>
      </Container>
    </PartnerWrapper>
  );
};

export default Partner;
