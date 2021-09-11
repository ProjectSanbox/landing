import PopupWrapper from './popup.style';
import Box from 'reusecore/Box';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Image from 'reusecore/Image';
import logo from 'assets/images/popup/logo.svg';
import background_logo from 'assets/images/popup/background-logo.png';
import lootbox from 'assets/images/popup/lootbox.png';
import {AiFillCloseCircle} from 'react-icons/ai';
import { useEffect, useState } from 'react';

const Popup = () =>{
    const [hide, setHide] = useState(false);
    useEffect(() =>{
        const countDownDate = new Date("Sep 27, 2021 07:30:00").getTime();
        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            // const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            // const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.querySelector(".countdown").innerHTML = days + " day"
              
            if (distance < 0) {
              clearInterval(x);
            }
          }, 1000);
    })
    return(
        <PopupWrapper className={hide && "hide"}>
            <Box className="popup">
                <Box className="popup-logo">
                    <Box>
                        <Image src={background_logo} />
                        <Image className="popup-img" src={logo} />
                    </Box>
                </Box>
                <Box className="loot-box">
                    <Image src={lootbox} />
                </Box>

                <Box className="popup-info">
                    {/* <Text>PlanetSandbox Will IDO </Text> */}
                    <Text>From September 9th To September 27th at 07:30pm UTC </Text>
                    <Text>Available in: <Text className="countdown" as="span">0 Day</Text></Text>
                    <Button>Cooming Soon</Button>
                </Box>

                <Button onClick={() => setHide(true)} className="btn-close"><AiFillCloseCircle/></Button>
            </Box>
        </PopupWrapper>
    );
}

export default Popup;