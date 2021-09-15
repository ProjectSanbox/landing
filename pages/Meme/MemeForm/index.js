import FormWrapper from './form.style';
import Input from 'reusecore/Form/Input';
import Label from 'reusecore/Form/Label';
import Text from 'reusecore/Text';
import Heading from 'reusecore/Heading';
import Box from 'reusecore/Box';
import Button from 'reusecore/Button';
import { Container } from 'reusecore/Layout';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

const MemeForm = () =>{

    const [info, setInfo] = useState({
        reTweet: "",
        memeTweet: "",
        email: "",
        telegram: ""
    });

    const handlerTyping = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setInfo({
            ...info,
            [name]: value
        })
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const validateForm = (reTweet, memeTweet, email, telegram) =>{
        if(reTweet.trim() == '' || memeTweet.trim() == '' || email.trim() == '' || telegram.trim() == '')
            return false;
        if(!validateEmail(email))
            return false
        return true;
    }

    const handlerSubmit = (e) =>{
        e.preventDefault();
        const {reTweet, memeTweet, email, telegram} = info;
        if(validateForm(reTweet, memeTweet, email, telegram)){
            axios({
                method: 'POST',
                url: "https://meme.planetsandbox.io/api/contest",
                data: {
                    reTweet,
                    memeTweet,
                    email,
                    telegram
                }
            })
            .then((response) =>{
                if(response.status == 200 || 201){
                    const notification = document.querySelector('.message_container');
                    notification.style.display = 'block';
                    setTimeout(() =>{   
                        notification.style.display = 'none';
                    }, 3000)
                    console.log(response);
                }
                else
                console.log(response.status);
            })
        }
    } 

    return (
        <FormWrapper id="form">
            <Container>
                <Box className="meme_heading">
                    <Heading>Meme Contest</Heading>
                </Box>
                <form onSubmit={handlerSubmit}>
                    <Text>1.Retweet this <Link href="//twitter.com/planetsandbox"><a target="_blank">Tweet</a></Link> and tag 3 friends in the comments&nbsp;
                        <Link href="://twitter.com/planetsandbox"><a target="_blank"> https://twitter.com/planetsandbox</a></Link>
                    </Text>
                    <Box className="form-group">
                        <Label>Enter a link of your retweet <Text as="span">*</Text></Label>
                        <Input className="input" onChange={handlerTyping} type="text" value={info.reTweet} name="reTweet" placeholder="https://twitter.com/planetsandbox" />
                    </Box>
                    <Text>2. Tweet your meme and tag @DeRaceNFT</Text>
                    <Box className="form-group">
                        <Label>Enter a link to your meme Tweet <Text as="span">*</Text></Label>
                        <Input className="input" onChange={handlerTyping} name="memeTweet" value={info.memeTweet} placeholder="https://twitter.com/planetsandbox" type="text" />
                    </Box>
                    <Text>3. Follow our&nbsp; 
                        <Link href="//twitter.com/planetsandbox"><a target="_blank">TWITTER</a></Link> account&nbsp;
                        <Link href="//twitter.com/planetsandbox"><a target="_blank">https://twitter.com/planetsandbox</a></Link>
                    </Text>
                    <Text>4. Join our&nbsp; 
                        <Link href="//t.me/planetsandbox"><a target="_blank">Telegram</a></Link> group&nbsp; 
                        <Link href="//t.me/planetsandbox"><a target="_blank">https://t.me/planetsandbox</a></Link>
                    </Text>
                    <Text>5. Join our&nbsp;
                        <Link href="/"><a target="_blank">Announcements</a></Link> group&nbsp;
                        <Link href="/"><a target="_blank">https://t.me/planetsandbox</a></Link>
                    </Text>
                    <Text className="form-heading">We’ll contact the winners by email</Text>
                    <Box className="form-group">
                        <Label>Enter your email&nbsp;<Text as="span">*</Text></Label>
                        <Input className="input" onChange={handlerTyping} name="email" value={info.email} placeholder="@planetsandboxmeme" type="text" />
                    </Box>
                    <Box className="form-group">
                        <Label>Your Telegram username <Text as="span">*</Text></Label>
                        <Input className="input" onChange={handlerTyping} name="telegram" value={info.telegram} type="text" placeholder="@Sandbox_plane" />
                    </Box>
                    <Button type="submit">Lets GOO!</Button>
                </form>
            </Container>
            {/* Notification */}
            <Box className="message_container">
                <Box className="message" augmented-ui="exe tl-clip br-clip">
                    <Box className="title" augmented-ui="exe tl-clip br-clip">Submitted successfully</Box>
                    <Text>
                        Thank you for participating in the contest. We have received your meme, we will respond soon and announce the contest results.
                    </Text>
                </Box>
            </Box>
        </FormWrapper>
    );
}

export default MemeForm;