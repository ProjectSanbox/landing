import PopupWrapper from './popup.style';
import Box from 'reusecore/Box';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Image from 'reusecore/Image';
import logo from 'assets/images/popup/logo.png';
import lootbox from 'assets/images/popup/lootbox.png';
import {AiFillCloseCircle} from 'react-icons/ai';
import { useEffect, useState } from 'react';

const Popup = () =>{
    const [hide, setHide] = useState(false);
    return(
        <PopupWrapper className={hide && "hide"}>
            <Box className="popup">
                <Box className="popup-logo">
                    <Image src={logo} />
                </Box>
                <Box className="loot-box">
                    <Image src={lootbox} />
                </Box>

                <Box className="popup-info">
                    <Text>Sever will openning soon</Text>
                    <Button>Cooming Soon</Button>
                </Box>

                <Button onClick={() => setHide(true)} className="btn-close"><AiFillCloseCircle/></Button>
            </Box>
        </PopupWrapper>
    );
}

export default Popup;