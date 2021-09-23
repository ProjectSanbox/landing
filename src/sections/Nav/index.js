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


const Nav = () =>{

    useEffect(() =>{
        const header = document.getElementById("header");

        if(window.pageYOffset > 0 || document.documentElement.scrollTop > 0){
            header.style.background = '#59585A';
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
                header.style.background = '#59585A';
                header.style.transition = '0.5s';
                header.style.marginTop = '0';
            }
            else{
                header.style.background = 'transparent';
                header.style.marginTop = '44px';
            }
        })
    }, [])
    return(
      <>
          <NavWrapper id="header">
            <Container>
                <Box className="header">
                    <Box className="logo">
                        <Image src={logo} />
                    </Box>
                    <Box className="nav hide">
                        <List>
                           {data.nav.map((nav, i) =>
                            <ListItem key={i}><a href={nav.link}>{nav.content}</a></ListItem>
                            )}
                        </List>
                    </Box>
                    <Box className="toggle">
                           <Button><GoThreeBars/></Button>
                    </Box>
                </Box>
            </Container>
        </NavWrapper>
        {/* <NavMobie /> */}
      </>
    );
}

export default Nav;