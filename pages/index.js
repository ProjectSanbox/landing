import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import loadable from '@loadable/component'
import FavIcon from "assets/images/favicon.svg";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Popup = loadable(() => import("sections/Popup"));
const Nav = loadable(() => import("sections/Nav"));
const Banner = loadable(() => import("sections/Banner"));
const Roadmap = loadable(() => import("sections/Roadmap"));
const About = loadable(() => import("sections/About"));
const GamePlay = loadable(() => import("sections/GamePlay"));
const Advisor = loadable(() => import("sections/Advisor"));
const BackedBy = loadable(() => import("sections/BackedBy"));
const GameAssets = loadable(() => import("sections/GameAssets"));
const OurTeam = loadable(() => import("sections/OurTeam"));
const Partner = loadable(() => import("sections/Partner"));
const Audits = loadable(() => import("sections/Audits"));
const Media = loadable(() => import("sections/Media"));
const FAQ = loadable(() => import("sections/FAQ"));
const ScrollTop = loadable(() => import("sections/ScrollTop"));
const Contract = loadable(() => import("sections/Contract"));
const Footer = loadable(() => import("sections/Footer"));

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Planet Sandbox is a physics TPS NFT sandbox shooting game that allows players to build and own arenas to fight other players in different game modes using their own NFT weapons and accessories.</title>
        <meta
          name="Description"
          content="Planet Sandbox is a physics TPS NFT sandbox shooting game that allows players to build and own arenas to fight other players in different game modes using their own NFT weapons and accessories."
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta name="theme-color" content="#280D57" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          sizes="64x64"
          href={FavIcon}
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
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
      <Partner />
      <Audits />
      <Media />
      <FAQ />
      <Footer />
      <ScrollTop />
      <Contract/>
    </ThemeProvider>
  );
};

export default Home;
