import PopupWrapper from './popup.style';
import Box from 'reusecore/Box';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Image from 'reusecore/Image';
import logo from 'assets/images/popup/logo.svg';
import background_logo from 'assets/images/popup/background-logo.png';
import lootbox from 'assets/images/popup/lootbox.png';
import {IoMdClose} from 'react-icons/io';
import { useEffect, useState } from 'react';

const Popup = () =>{
    const [hide, setHide] = useState(false);
    useEffect(() =>{
        const countDownDate = new Date("Sep 27, 2021 07:30:00").getTime();
        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if(document.querySelector(".days"))
            document.querySelector(".days").innerHTML = days;
            if(document.querySelector(".hours"))
            document.querySelector(".hours").innerHTML = hours;
            if(document.querySelector(".minutes"))
            document.querySelector(".minutes").innerHTML = minutes;
            if(document.querySelector(".seconds"))
            document.querySelector(".seconds").innerHTML = seconds;
              
            if (distance < 0) {
              clearInterval(x);
            }
          }, 1000);
          
    }, [])

    const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

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

                <Text className="notification">From September {new Date().getDate()}th To {monthNames[new Date().getMonth()]} 27th at 07:30pm UTC </Text>
                <Box className="popup-info">
                    {/* <Text>PlanetSandbox Will IDO </Text> */}
                        <Box>
                            <Text className="countdown" as="span">
                                <Text className="days">0</Text>
                                <Text>Days</Text>
                            </Text>
                            <Text className="countdown" as="span">
                                <Text className="hours">0</Text>
                                <Text>Hours</Text>
                            </Text>
                            <Text className="countdown" as="span">
                                <Text className="minutes">0</Text>
                                <Text>Minutes</Text>
                            </Text>
                            <Text className="countdown" as="span">
                                <Text className="seconds">0</Text>
                                <Text>Seconds</Text>
                            </Text>
                        </Box>
                    <Button>Cooming Soon</Button>
                </Box>

                <Button onClick={() => setHide(true)} className="btn-close"><IoMdClose/></Button>
            </Box>
        </PopupWrapper>
    );
}

export default Popup;