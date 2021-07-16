import React from 'react';
import SloganWrapper from './slogan.style';
import Image from 'reusecore/Image';
import Box from 'reusecore/Box';
import Text from 'reusecore/Text';
import logo from 'assets/images/NewLogo.svg'
import { Container } from '@material-ui/core';
import Heading from 'reusecore/Heading';
const Slogan = () =>{
   return(
    <SloganWrapper>
        <Container>
            <Box className="slogan">
                <Heading>What is Polrare</Heading>
                {/* <Image src={logo} /> */}
                <Text>Polrare is a platform which provides all the necessary features and services to create, explore and monetize NFTs in the virtual world.</Text>
            </Box>
        </Container>
    </SloganWrapper>
   );
}

export default Slogan;