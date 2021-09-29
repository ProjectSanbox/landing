import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Popup from 'sections/Popup';
import Nav from "sections/Nav";
import Banner from "sections/Banner";
import Roadmap from "sections/Roadmap";
import About from "sections/About";
import GamePlay from "sections/Gameplay";
import Advisor from "sections/Advisor";
import BackedBy from "sections/BackedBy";
import GameAssets from "sections/GameAssets";
import Footer from "sections/Footer";
import FavIcon from "assets/images/favicon.svg";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";
import OurTeam from "sections/OurTeam";
import Partner from "sections/Partner";
import Media from "sections/Media";
import FAQ from "sections/FAQ"
// import Meme from "sections/Meme";


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
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" sizes="64x64" href={FavIcon} />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link
            rel="preload"
            href="../src/assets/font/SFUEurostileCondensed.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>
      <GlobalStyle />
      {/* <Popup /> */}
      <Nav />
      <Banner />
      <About />
      <GamePlay />
      <GameAssets />
      <Roadmap />
      <OurTeam />
      <Advisor />
      <BackedBy />
      {/* <Meme /> */}
      <Partner />
      <Media />
      <FAQ/>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
