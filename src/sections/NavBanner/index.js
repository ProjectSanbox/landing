import React, { useEffect, useState } from 'react';;
import NavBannerWrapper from './navbanner.style';
import Text from 'reusecore/Text';
import Box from 'reusecore/Box';
import Button from 'reusecore/Button';
import Link from "next/link";
import {RiFileCopyLine} from 'react-icons/ri';
import {AiOutlineClose, AiOutlineCheck} from 'react-icons/ai'


const NavBanner = () =>{

    const [copys, setCopys] = useState({
        copied: false
    })

    const copyLink = () =>{
        var linkelement = document.getElementById('link');
        linkelement.select();
        linkelement.setSelectionRange(0, 99999);
        document.execCommand("copy");
        setCopys({copied: true});
        setTimeout(() =>{
        setCopys({copied: false});
        }, 2000)
    }

    const closeNavBanner = () =>{
        document.getElementById('navbanner').style.display = 'none';
    }

    return(
        <NavBannerWrapper id="navbanner">
            <Box className="navbanner-box">
                <Text className="navbanner-content">Polrare (PARE) ERC-Contact:
                    &ensp;
                    <Text className="navbar-link" as="span">
                        <Link href="//etherscan.io/address/0x94e5149ac7b8b1249069f6d9dfcbb2590d641ddc">
                            <a target="_blank">0x94e5149ac7b8b1249069f6d9dfcbb2590d641ddc
                                <input className="link" id="link" type="text" value="//etherscan.io/address/0x94e5149ac7b8b1249069f6d9dfcbb2590d641ddc" />
                            </a>
                        </Link>
                    </Text>
                </Text>
                <Box className="tooltip">
                    <Button onClick={copyLink} className="copy-link">{copys.copied && <AiOutlineCheck className="copied"/> || <RiFileCopyLine />}
                        <Text as="span" className="tooltiptext" id="myTooltip">{copys.copied && "Copied" || "Copy to adress"}</Text>
                    </Button>
                </Box>  
                <Button onClick={closeNavBanner} className="navbanner-close"><AiOutlineClose/></Button>
            </Box>
        </NavBannerWrapper>
    );
}

export default NavBanner;