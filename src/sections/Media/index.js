import MediaWrapper from './media.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import {Container} from 'reusecore/Layout';
import Image from 'reusecore/Image';
import data from 'assets/data/media'

const Media = () =>{
    return(
        <MediaWrapper>
            <Container>
                <Box className="media-heading">
                    <Heading>Media</Heading>
                </Box>
                <Box className="media-content">
                    {data.media.map((media, i) =>
                    <a target="_blank" className="meida-items" key={i} href={media.url}>
                        <Image src={media.img} />
                    </a>
                    )}
                </Box>
            </Container>
        </MediaWrapper>
    );
}

export default Media;