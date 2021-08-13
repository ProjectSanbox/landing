import React from 'react';
import SBPIWrapper from './sbpi.style';
import {Container, Row, Col} from 'reusecore/Layout';
import Heading from 'reusecore/Heading'
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Text from 'reusecore/Text';
import SBPIimage1 from 'assets/images/SBPI/SBPIimage1.png';
import SBPIimage2 from 'assets/images/SBPI/SBPIimage2.png';
import SBPIimage3 from 'assets/images/SBPI/SBPIimage3.png';
import SBPIimage4 from 'assets/images/SBPI/SBPIimage4.png';
import SBPIimage from 'assets/images/SBPI/SBPIimage.png'
import SBPIarrowright from 'assets/images/SBPI/SBPIarrowright.png';
import SBPIarrowleft from 'assets/images/SBPI/SBPIarrowleft.png';

const SBPI = () => {
    return(
        <SBPIWrapper id="SBPI">
            <Container>
                <Box className="SBPI-heading">
                    <Heading>WHAT'S SBPI</Heading>
                </Box>
                <Box className="SBPI-content">
                   <Box className="SBPI-content-left">
                    <Box className="SBPI-content-item">
                        <Image src={SBPIimage1} />
                        <Text>PLAY TO EARN</Text>
                    </Box>
                    <Box className="SBPI-content-item">
                        <Image src={SBPIimage2} />
                        <Text>MARKETN</Text>
                    </Box>
                   </Box>
                   <Box className="SBPI-arrow-left">
                        <Image src={SBPIarrowleft} />
                   </Box>
                   <Box className="SBPI-content-img">
                        <Image src={SBPIimage} />
                    </Box>
                    <Box className="SBPI-arrow-right">
                        <Image src={SBPIarrowright} />
                    </Box>
                    <Box className="SBPI-content-right">
                        <Box className="SBPI-content-item">
                            <Image src={SBPIimage3} />
                            <Text>PLAY TO EARN</Text>
                        </Box>
                        <Box className="SBPI-content-item">
                            <Image src={SBPIimage4} />
                            <Text>MARKETN</Text>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </SBPIWrapper>
    );
}

export default SBPI;