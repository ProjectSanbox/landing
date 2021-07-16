import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Nav from "sections/Nav";
import NavBanner from "sections/NavBanner";
import Exhibition from "sections/Exhibition";
import Slogan from "sections/Slogan";
import Roadmap from "sections/Roadmap";
import Production from "sections/Production";
import OurSolution from "sections/OurSolution";
import Advisor from "sections/Advisor";
import BackedBy from "sections/BackedBy";

import Footer from "sections/Footer";
import FavIcon from "assets/images/favicon.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";
import OurTeam from "../src/sections/OurTeam";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          Sandbox Project
        </title>
        <meta
          name="Description"
          content="polrare.co"
        />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
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
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet"/>
      </Head>
      <GlobalStyle />
      <Nav />
      {/* <NavBanner /> */}
      <Exhibition />
      {/* <Slogan /> */}
      <Production />
      <OurSolution/>
      <Roadmap />
      <OurTeam />
      <Advisor />
      <BackedBy />
     
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
