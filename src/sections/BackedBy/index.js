import React from 'react';
import BackedByWrapper from './backedby.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';
import data from 'assets/data/backedby';
import { Container } from 'reusecore/Layout';
import Link from "next/link";

const BackedBy = () =>{
 return(
     <BackedByWrapper id="backedby">
        <Container>
            <Box className="backedby-heading">
                <Heading>Backed By</Heading>
            </Box>
            <Box className="backedby-content">
            {data.backedby.map((backedby, index) => 
                <Link key={index} href={backedby.src}>
                    <a target="_blank">
                        <Box className="item-border">
                            <Box className="backedby-item">
                                <Image src={backedby.imageSrc} />
                            </Box>
                        </Box>
                    </a>
                </Link>
            )}
            </Box>
        </Container>
     </BackedByWrapper>
 );
}

export default BackedBy;