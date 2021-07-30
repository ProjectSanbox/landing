import React, { useEffect } from 'react';
import NavWrapper from './nav.style';
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import {Container} from 'reusecore/Layout';
import logo from 'assets/images/MineSandboxLogo.png';
import {List, ListItem} from 'reusecore/List';
import Link from "next/link";
import { useRouter } from "next/router";
import {AiOutlineBars, AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';


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
            const value = url.split("#")[1];
            setToggle({...toggle, active: value})
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
                        {/* <ListItem>
                            <Link href="#lauch"><a onClick={()=>handleToggleMenu(false)}>Lauch</a></Link>
                        </ListItem> */}
                        <ListItem>
                            <Link href="#about"><a onClick={()=>handleToggleMenu(false)}>About</a></Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#features"><a onClick={()=>handleToggleMenu(false)}>Features</a></Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#ourteam"><a onClick={()=>handleToggleMenu(false)}>Teams</a></Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://docs.google.com/spreadsheets/d/1fvY97IAXIP3NklDm9cDKswKUp7HiH_16IrNjJ16pkvM/edit#gid=0"><a onClick={()=>handleToggleMenu(false)}>Token Economic</a></Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#backedby"><a onClick={()=>handleToggleMenu(false)}>Partners</a></Link>
                        </ListItem>
                    </List>
            </Box>
            <Container>
                <Box className="nav">
                    <Box className="navbar-menu"><AiOutlineBars onClick={()=>handleToggleMenu(true)} className="navbar-menu-icon" /></Box>
                    <Image src={logo} />
                    <List className="hide">
                        {/* <ListItem className={toggle.active === 'lauch' ? "active" : ''}>
                            <Link href="#lauch"><a onClick={()=> setToggle({...toggle, active: "lauch"})}>Lauch</a></Link>
                        </ListItem> */}
                        <ListItem className={toggle.active === 'about' ? "active" : ''}>
                            <Link href="#about"><a onClick={()=> setToggle({...toggle, active: "about"})}>About</a></Link>
                        </ListItem>
                        <ListItem className={toggle.active === 'features' ? "active" : ''}>
                            <Link href="#features"><a onClick={ ()=> setToggle({...toggle, active: "features"})}>Features</a></Link>
                        </ListItem>
                        <ListItem className={toggle.active === 'ourteam' ? "active" : ''}>
                            <Link href="#ourteam"><a onClick={()=> setToggle({...toggle, active: "ourteam"})}>Teams</a></Link>
                        </ListItem>
                        <ListItem className={toggle.active === 'token' ? "active" : ''}>
                            <Link href="https://docs.google.com/spreadsheets/d/1fvY97IAXIP3NklDm9cDKswKUp7HiH_16IrNjJ16pkvM/edit#gid=0"><a onClick={()=> setToggle({...toggle, active: "token"})}>Token Economics</a></Link>
                        </ListItem>
                        <ListItem className={toggle.active === 'backedby' ? "active" : ''}>
                            <Link href="#backedby"><a onClick={()=> setToggle({...toggle, active: "backedby"})}>Partners</a></Link>
                        </ListItem>
                        
                    </List>
                </Box>
            </Container>
        </NavWrapper>
    );
}

export default Nav;