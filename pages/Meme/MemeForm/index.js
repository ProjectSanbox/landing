import FormWrapper from './form.style';
import Input from 'reusecore/Form/Input';
import Label from 'reusecore/Form/Label';
import Text from 'reusecore/Text';
import Heading from 'reusecore/Heading';
import Box from 'reusecore/Box';
import Button from 'reusecore/Button';
import { Container } from 'reusecore/Layout';
import Link from 'next/link';

const MemeForm = () =>{
    return (
        <FormWrapper id="form">
            <Container>
                <Box className="meme_heading">
                    <Heading>Meme Contest</Heading>
                </Box>
                <form>
                    <Text>1.Retweet this <Link href="https://twitter.com/planetsandbox"><a target="_blank">Tweet</a></Link> and tag 3 friends in the comments&nbsp;
                        <Link href="https://twitter.com/planetsandbox"><a target="_blank"> https://twitter.com/planetsandbox</a></Link>
                    </Text>
                    <Box className="form-group">
                        <Label>Enter a link of your retweet <Text as="span">*</Text></Label>
                        <Input type="text" placeholder="https://twitter.com/planetsandbox" />
                    </Box>
                    <Text>2. Tweet your meme and tag @DeRaceNFT</Text>
                    <Box className="form-group">
                        <Label>Enter a link to your meme Tweet <Text as="span">*</Text></Label>
                        <Input placeholder="https://twitter.com/planetsandbox" type="text" />
                    </Box>
                    <Text>3. Follow our&nbsp; 
                        <Link href="https://twitter.com/planetsandbox"><a target="_blank">TWITTER</a></Link> account&nbsp;
                        <Link href="https://twitter.com/planetsandbox"><a target="_blank">https://twitter.com/planetsandbox</a></Link>
                    </Text>
                    <Text>4. Join our&nbsp; 
                        <Link href="https://t.me/planetsandbox"><a target="_blank">Telegram</a></Link> group&nbsp; 
                        <Link href="https://t.me/planetsandbox"><a target="_blank">https://t.me/planetsandbox</a></Link>
                    </Text>
                    <Text>5. Join our&nbsp;
                        <Link href="/"><a target="_blank">Announcements</a></Link> group&nbsp;
                        <Link href="/"><a target="_blank">https://t.me/planetsandbox</a></Link>
                    </Text>
                    <Text className="form-heading">We’ll contact the winners by email</Text>
                    <Box className="form-group">
                        <Label>Your Email address <Text as="span">*</Text></Label>
                        <Input placeholder="sandbox-place@derace.io" type="text" />
                    </Box>
                    <Box className="form-group">
                        <Label>Your Telegram username <Text as="span">*</Text></Label>
                        <Input type="text" placeholder="@Sandbox_plane" />
                    </Box>
                    <Button type="submit">Lets GOO!</Button>
                </form>
            </Container>
        </FormWrapper>
    );
}

export default MemeForm;