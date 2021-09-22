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
import { Button } from 'react-scroll';


const Nav = () =>{


    return(
        <NavWrapper>
            <Container>
                <Box className="header">
                    <Box className="logo">
                        <Image src={logo} />
                    </Box>
                    <Box className="nav">
                        <List>
                           {data.nav.map((nav, i) =>
                            <ListItem key={i}><a href={nav.link}>{nav.content}</a></ListItem>
                            )}
                        </List>
                    </Box>
                </Box>
            </Container>
        </NavWrapper>
    );
}

export default Nav;