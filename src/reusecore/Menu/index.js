import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import logo_menu from "../../assets/images/logo_menu.png";
import FooterWrapper from "./Menu.style";
import FooterContainer from "./Menu.style";
import MenuWrapper from "./Menu.style";

const Menu = () => {
  return (
    <MenuWrapper>
     <div className='logo'>
        <img src={logo_menu}/>
        <Heading>Polrare</Heading>
      </div>
      
      <div className='menu'>
        <div className='list'>
          Backed
        </div>

        <div className='list'>
          Teams
        </div>

        <div className='list'>
          Roadmap
        </div>

        <div className='list'>
          Product
        </div>

        <div className='list'>
          Launch
        </div>
      </div>
    </MenuWrapper>
  );
};

export default Menu;
