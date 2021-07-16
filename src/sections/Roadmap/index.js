import React from "react";

import { Container, Row, Col } from "reusecore/Layout";


import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import UserMapWrapper from "./userMap.style";
import roadmapimgae from 'assets/images/roadmap/roadmap.svg';

const RoadMap = () => {
  return (
    <UserMapWrapper id="roadmap">
      <Box className="usermap-wrapper">
        <Container className="fluid">
          <Box className="roadmap-background">&nbsp;</Box>
          <Row>
            <Col className="sm-12 xs-12 md-10 offset-md-1">
              <Box className="roadmap-heading">
              <Heading>Roadmap</Heading>
              </Box>
            </Col>
          </Row>
          <Box className="roadmap-item">
            <Image src={roadmapimgae} />
          </Box>
        </Container>
      </Box>
    </UserMapWrapper>
  );
};

export default RoadMap;
