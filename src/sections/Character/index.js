import React, { useEffect } from 'react'
import AOS from "aos"
import CharWrapper from './char.style'
import { Container } from "reusecore/Layout"
import Box from 'reusecore/Box'
import Heading from "reusecore/Heading"
import Image from "reusecore/Image"
import Char00 from 'assets/images/character/Char00.png'
import DetailFrame from 'assets/images/character/DetailFrame.png'


export default function Character() {

  useEffect(() => {
    AOS.init({
      throttleDelay: 99,
      debounceDelay: 50,
      disable: false,
      duration: 500,
      once: false,
      mirror: true,
    });
  }, [])

  return (
    <CharWrapper id='character'>
      <Container>
        <Box className='char-heading'>
          <Heading className='heading-lg'>
            planetsandbox
          </Heading>
          <Box className='char-subtitle'>
            <Heading className='heading-md'>character</Heading>
            <hr />
          </Box>
        </Box>
      </Container>
      <Box className='char-content'>
        <Image data-aos="fade-right" data-aos-delay="300" src={Char00} />
        <Box className='char-info'>

        </Box>
      </Box>
    </CharWrapper>
  )
}
