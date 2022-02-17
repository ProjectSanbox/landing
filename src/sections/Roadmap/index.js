import React from "react";
import { Container, Row, Col } from "reusecore/Layout";
import { List, ListItem } from "reusecore/List";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Image from "reusecore/Image";
import Text from "reusecore/Text";
import UserMapWrapper from "./userMap.style";
import roadmap from "assets/images/roadmap/roadmap.png";
import character from "assets/images/roadmap/character.png";

const RoadMap = () => {
  return (
    <UserMapWrapper className="section" id="roadmap">
      <Box className="usermap-wrapper">
        <Container className="fluid">
          <Box className="roadmap-heading">
            <Heading>Roadmap</Heading>
          </Box>
        </Container>
        <Box className="roadmap-content">
          <Image className="roadmap" src={roadmap} />
          <Image className="character" src={character} />
        </Box>
      </Box>
    </UserMapWrapper>
  );
};

export default RoadMap;
