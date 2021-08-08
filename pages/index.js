import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Nav from "sections/Nav";
import HeadingBanner from "sections/HeadingBanner";
import Roadmap from "sections/Roadmap";
import Production from "sections/Production";
import Features from "sections/Features";
import Advisor from "sections/Advisor";
import BackedBy from "sections/BackedBy";
import Block from "sections/Block";
import BottomBanner from 'sections/BottomBanner';
import Footer from "sections/Footer";
import FavIcon from "assets/images/MineSandboxLogo.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";
import OurTeam from "sections/OurTeam";


const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
        Minesandbox.io
        </title>
        <meta
          name="Description"
          content="Sandbox Planet is also a multiplayer TPS NFT GAME that lets user engaging in the combat arena and profit from battle"
        />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet"/>
      </Head>
      <GlobalStyle />
      <Nav />
      {/* <NavBanner /> */}
      <HeadingBanner />
      {/* <Slogan /> */}
      <Production />
      <Features/>
      <Block />
      <Roadmap />
      <OurTeam />
      <Advisor />
      <BackedBy />
   
      <BottomBanner />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
