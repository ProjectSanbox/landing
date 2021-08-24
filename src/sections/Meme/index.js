import MemeWrapper from './meme.style';;
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';
import Heading from 'reusecore/Heading';
import Box from 'reusecore/Box';
import Button from 'reusecore/Button';
import { Container } from 'reusecore/Layout';
import Link from 'next/link';
import character from 'assets/images/meme/character.png'

const Meme = () =>{
    return (
    <MemeWrapper id="meme">
        <Box className="meme-group">
            <Box className="meme-img">
                <Image src={character} />
            </Box>
            <Box className="meme-content">
                <Text className="meme-text">Meme Contest</Text>
                <Text className="meme-text small">Comunity Fest</Text>
                <Link href="/Meme"><a><Button className="meme-btn">Join Event</Button></a></Link>
            </Box>
        </Box>
        
    </MemeWrapper>
    );
}

export default Meme;