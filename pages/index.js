import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Nav from "sections/Nav";
import HeadingBanner from "sections/HeadingBanner";
import Roadmap from "sections/Roadmap";
import Introduce from "sections/Introduce";
import GamePlay from "sections/Gameplay";
import Advisor from "sections/Advisor";
import BackedBy from "sections/BackedBy";
import Block from "sections/NFT";
import Footer from "sections/Footer";
import FavIcon from "assets/images/favicon.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";
import OurTeam from "sections/OurTeam";


const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          PlanetSandbox
        </title>
        <meta
          name="Description"
          content="Planet Sandbox is also a multiplayer TPS NFT GAME that lets user engaging in the combat arena and profit from battle"
        />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link href="http://fonts.cdnfonts.com/css/goma-block" rel="stylesheet" />
        <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Nav />
      <HeadingBanner />
      <Introduce />
      <GamePlay />
      <Block />
      <Roadmap />
      <OurTeam />
      <Advisor />
      <BackedBy />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
