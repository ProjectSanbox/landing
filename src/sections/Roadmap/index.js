import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import {List, ListItem} from 'reusecore/List';
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Image from "reusecore/Image";
import Text from "reusecore/Text";
import UserMapWrapper from "./userMap.style";
import roadmapimgae from 'assets/images/roadmap/roadmap.png';


const RoadMap = () => {
  return (
    <UserMapWrapper id="roadmap">
      <Box className="usermap-wrapper">
        <Container className="fluid">
          <Box className="roadmap-heading">
            <Heading>Roadmap</Heading>
          </Box>
          <Image src={roadmapimgae} />
        </Container>
      </Box>
    </UserMapWrapper>
  );
};

export default RoadMap;
