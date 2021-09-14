import HeadingWrapper from './heading.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';
import Button from 'reusecore/Button';
import Link from 'next/link';
import { useEffect } from 'react';
import decorate_left from 'assets/images/meme/decorate-left.png';
import decorate_right from 'assets/images/meme/decorate-right.png';

const MemeHeading = () =>{

  useEffect(() =>{
    const meme = document.querySelector('#memeHeading');
    const width = window.innerWidth;
    const height = width * 36.71875 / 100;
    meme.style.height = height + "px";
    window.addEventListener('resize', () =>{
      const width = window.innerWidth;
      const height = width * 36.71875 / 100;
      meme.style.height = height + "px";
    })
  })

  return(
    <HeadingWrapper id="memeHeading">
      <Box className="heading-content">
          <Heading>Meme CONTEST</Heading>
          <Text className="content-text">Community fest</Text>
          <Text className="giveaway">giveaway</Text>
          <Text>Top 10 <Text as="span">meme creators will share</Text></Text>
          <Box className="bonus">
            <Image src={decorate_left} />
            <Text>1,000 USD</Text>
            <Image src={decorate_right} />
          </Box>
      </Box>
    </HeadingWrapper>
  );
}

export default MemeHeading;