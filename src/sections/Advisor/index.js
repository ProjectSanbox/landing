import React from 'react';
import AdvisorWrapper from './advisor.style';
import {Container, Row, Col} from 'reusecore/Layout';
import Heading from 'reusecore/Heading'
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Text from 'reusecore/Text';
import data from 'assets/data/advisor';

const Adivisor = () =>{
   return (
    <AdvisorWrapper>
        <Container>
                <Box className="adivisor-heading">
                    <Heading>Advisors</Heading>
                </Box>
                <Box className="adivisor-content">
                    {data.advisor.map((advisor, index) =>
                        <Box key={index} className="adivisor-item">
                            <Box className="adivisor-avatar">
                                <Image src={advisor.avatar} />
                            </Box>
                            <Box className="adivisor-intro">
                                <Text className="adivisor-name">{advisor.name}</Text>                            
                                <Text className="adivisor-info">{advisor.desc}</Text>
                            </Box>
                        </Box>  
                    )}
                </Box>
            </Container>
            <Box className="backgorund">&nbsp;</Box>
    </AdvisorWrapper>
   );
}

export default Adivisor;
