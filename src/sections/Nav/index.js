import React, { useEffect } from 'react';
import NavWrapper from './nav.style';
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import {Container} from 'reusecore/Layout';
import logo from 'assets/images/logo.png';
import {List, ListItem} from 'reusecore/List';
import Link from "next/link";
import {AiOutlineBars, AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';
import data from 'assets/data/nav';


const Nav = () =>{

    let count = 0;
    const [toggle, setToggle] = useState({
        status: false,
        active: ""
    });
    const handleToggleMenu = (value) =>{
       setToggle({...toggle, status:value});
       if(value === true){
            document.querySelector('body').style.overflowY = 'hidden';
        }else{
            document.querySelector('body').style.overflowY = 'unset';
        }
    } 

    useEffect(() =>{
            const url = window.location.href;
            let value = url.split("#")[1];
            if(value){
                setToggle({...toggle, active: value})
            }else{
                value = "home"
                setToggle({...toggle, active: value})
            }
            
    }, []);

    return(
        <NavWrapper>
            <Box className={toggle.status ? "nav-mobile open" : "nav-mobile"}>
                <Box className="overlay">&nbsp;</Box>
                <List className="list-mobile">
                        <ListItem className="list-heading">
                           <Box className="menu-icon">
                               {/* <Image src={logo} /> */}
                           </Box>
                           <Box className="menu-close">
                                <AiOutlineClose onClick={()=>handleToggleMenu(false)} />
                           </Box>
                        </ListItem>
                        {data.navMobie.map((nav, index) =>
                        <ListItem key={index}>
                            <Link href={nav.link}><a href={nav.link} onClick={()=>handleToggleMenu(false)}>{nav.content}</a></Link>
                        </ListItem>
                        )}
                    </List>
            </Box>
            <Container>
                <Box className="nav">
                    <Box className="navbar-menu"><AiOutlineBars onClick={()=>handleToggleMenu(true)} className="navbar-menu-icon" /></Box>
                    <a href="/"><Image src={logo} /></a>
                    <List className="hide">
                        {data.nav.map((nav, index) =>
                        <ListItem key={index} className={toggle.active === nav.linkActive ? "active" : ''}>
                            <Link href={nav.link}><a href={nav.link} target={nav.target ? '_blank' : '_self'} onClick={()=> setToggle({...toggle, active: nav.linkActive})}>{nav.content}</a></Link>
                        </ListItem>
                        )}
                    </List>
                </Box>
            </Container>
        </NavWrapper>
    );
}

export default Nav;