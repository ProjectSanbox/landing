import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import {List, ListItem} from 'reusecore/List';
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import UserMapWrapper from "./userMap.style";
import roadmapimgae from 'assets/images/roadmap/roadmap.svg';
import data from "assets/data/roadmap";

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
          <Box className="roadmap-content">
            {data.roadmap.map((roadmap, index) =>{
              return(
                <Box key={index} className={!roadmap.right && "roadmap-item" || "roadmap-item right"}>
                  <Box className={!roadmap.right && "item" || "item right"}>
                    <Text>{roadmap.time}</Text>
                    <List>
                      {roadmap.work.map((work, index) =>{
                        return(
                          <ListItem key={index}>{work.name}</ListItem>
                        );
                      })}
                    </List>
                  </Box>
                  <Box className="roadmap-line">&nbsp;</Box>
                  <Box style={{width: '50%'}} className="hide">&nbsp;</Box>
              </Box>
              );
            })}
            
          </Box>
        </Container>
      </Box>
    </UserMapWrapper>
  );
};

export default RoadMap;
