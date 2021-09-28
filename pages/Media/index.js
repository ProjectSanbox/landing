import { ThemeProvider } from "styled-components";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";
import Head from "next/head";
import FavIcon from "assets/images/favicon.png";
import Nav from "sections/Nav";
import MediaPage from './MediaPage';
import Footer from "sections/Footer";

const Media = () =>{
    return(
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
            <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
            <link href="http://fonts.cdnfonts.com/css/eurostile" rel="stylesheet"></link>
            <link href="http://fonts.cdnfonts.com/css/product-sans" rel="stylesheet" />
        </Head>  
        <GlobalStyle />
        <Nav />
        <MediaPage />
        <Footer />
    </ThemeProvider>
    );
}

export default Media;