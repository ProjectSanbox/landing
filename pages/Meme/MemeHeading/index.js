import HeadingWrapper from './heading.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Link from 'next/link';

const MemeHeading = () =>{
  return(
    <HeadingWrapper>
      <Box className="heading-content">
          <Box className="card">
            <Box className="box">
              <Box className="content">
                <Heading className="card-heading">Meme Contest</Heading>
                <Text className="special">Community Fest</Text>
                <Text className="box-text">GiveAway</Text>
                <Text>Top 10 meme creators will share</Text>
                <Text className="prize-money">1,000 USD</Text>
                <Link href="#form"><a>Join!</a></Link>
              </Box>
            </Box>
        </Box>
      </Box>
    </HeadingWrapper>
  );
}

export default MemeHeading;