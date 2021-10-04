import React, { useEffect } from "react";
import BackedByWrapper from "./backedby.style";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import data from "assets/data/backedby";
import { Container } from "reusecore/Layout";
import Link from "next/link";
import { List, ListItem } from "reusecore/List";
import AOS from "aos";

const BackedBy = () => {
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
    <BackedByWrapper id="backedby">
      <Container>
        <Box className="backedby-heading">
          <Heading>Backed By</Heading>
        </Box>
        <Box data-aos="fade-down" className="backedby-content">
          {data.backedby.map((backedby, index) => (
            <Link key={index} href={backedby.src}>
              <a target="_blank">
                <Box className="item-border">
                  <Box className="backedby-item">
                    <Box className="box">
                      <Image id={backedby.id} src={backedby.imageSrc} />
                    </Box>
                  </Box>
                </Box>
              </a>
            </Link>
          ))}
        </Box>
      </Container>
    </BackedByWrapper>
  );
};

export default BackedBy;
