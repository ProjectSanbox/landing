import React, { useEffect } from 'react';
import NavWrapper from './nav.style';
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Button from 'reusecore/Button';
import {Container} from 'reusecore/Layout';
import logo from 'assets/images/logo.png';
import {List, ListItem} from 'reusecore/List';
import Link from "next/link";
import { useState } from 'react';
import data from 'assets/data/nav';
import NavMobie from './Navmobie';
import {GoThreeBars} from 'react-icons/go';
import {AiOutlineClose} from 'react-icons/ai';


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
        const header = document.getElementById("header");

        if(window.pageYOffset > 0 || document.documentElement.scrollTop > 0){
            header.style.background = '#17181C';
            header.style.transition = '0.5s';
            header.style.marginTop = '0';
        }
        else{
            header.style.background = 'transparent';
            header.style.marginTop = '44px';
        }

        // scroll
        window.addEventListener('scroll', () =>{
            if(window.pageYOffset > 0 || document.documentElement.scrollTop > 0){
                header.style.background = '#17181C';
                header.style.transition = '0.5s';
                header.style.marginTop = '0';
            }
            else{
                header.style.background = 'transparent';
                header.style.marginTop = '44px';
            }
        }) 
    
        const url = window.location.href;
        let value = url.split("#")[1];
        if(value){
            setToggle({...toggle, active: value})
        }else{
            value = "home"
            setToggle({...toggle, active: value})
        }
                
    }, [])

    return(
      <>
          <NavWrapper id="header">
              {/* nav mobie */}
          <Box className={toggle.status ? "nav-mobile open" : "nav-mobile"}>
                <Box className="overlay">&nbsp;</Box>
                <List className="list-mobile">
                    <Button className="menu-close">
                        <AiOutlineClose onClick={()=>handleToggleMenu(false)} />
                    </Button>
                        {data.navMobie.map((nav, index) =>
                        <ListItem key={index}>
                          <a target={nav.target} href={nav.link}>{nav.content}</a>
                        </ListItem>
                        )}
                    </List>
            </Box>
            
            {/* Nav - PC */}
            <Container>
                <Box className="header">
                    <Box className="logo">
                        <a href="/"><Image src={logo} /></a>
                    </Box>
                    <Box className="nav hide">
                        <List>
                           {data.nav.map((nav, i) =>
                            <ListItem className={toggle.active === nav.linkActive ? "active" : ''} key={i}>
                                <a  
                                onClick={()=> setToggle({...toggle, active: nav.linkActive})} target={nav.target} 
                                href={nav.link}>{nav.content}</a>
                            </ListItem>
                            )}
                        </List>
                    </Box>
                    <Box className="toggle">
                           <Button onClick={()=>handleToggleMenu(true)}><GoThreeBars/></Button>
                    </Box>
                </Box>
            </Container>
        </NavWrapper>
        {/* <NavMobie /> */}
      </>
    );
}

export default Nav;