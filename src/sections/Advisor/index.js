import React from 'react';
import AdvisorWrapper from './advisor.style';
import {Container, Row, Col} from 'reusecore/Layout';
import Heading from 'reusecore/Heading'
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Text from 'reusecore/Text';

import data from 'assets/data/advisor';
import { useState } from 'react';

const Adivisor = () =>{
    const [modal, setModal] = useState(false);
    const toggalModal = (value) =>{
        setModal(value);
        if(value === true){
            document.querySelector('body').style.overflowY = 'hidden';
        }else{
            document.querySelector('body').style.overflowY = 'unset';
        }
    }
   return (
    <AdvisorWrapper>
        <Container>
                <Box className="adivisor-heading">
                    <Heading>Advisors</Heading>
                </Box>
                <Box className="adivisor-content">
                    <Row>
                        {data.advisor.map((adivisor, index) =>
                        <Col key={index} className="lg-6 md-6 sm-6 xs-12 col-12">
                            <Box className="adivisor-item">
                                <Box className="adivisor-item-heading">
                                    <Image src={adivisor.avatar} />
                                    <Text>{adivisor.name}</Text>
                                    <Text className="text-upper text-job">{adivisor.job}</Text>
                                </Box>
                                <Box className="adivisor-item-desc">
                                    <Text>{adivisor.desc}</Text>
                                </Box>
                                {/* <Button onClick={() => toggalModal(true)}>[See more]  /Button> */}

                                    {/* {modal ? <Box className="modal-info">
                                    <Box className="modal-info-box">
                                        <Box className="modal-info-avatar">
                                            <Image src={adivisor.avatar} />
                                        </Box>
                                        <Box className="modal-info-desc">
                                            <Text className="modal-info-name">{adivisor.name}</Text>
                                            <Text className="modal-info-job">{adivisor.job}</Text>
                                            <Text className="modal-info-introduce">{adivisor.desc}</Text>
                                        </Box>
                                    </Box>
                                    <Button>
                                        <IoMdClose onClick={() => toggalModal(false)} />
                                    </Button>
                                </Box> : ''} */}
                                {modal && <Box className="overlay"></Box>}
                            </Box>
                        </Col>
                        )}
                    </Row>
                </Box>
            </Container>
    </AdvisorWrapper>
   );
}

export default Adivisor;
