import styled from "styled-components";
import Heading from "reusecore/Heading";
import Button from "reusecore/Button";
import Image from "reusecore/Image";
import Link from "next/link"
import GlobalStyle from "assets/theme";
import { ThemeProvider } from "styled-components";
import theme from "assets/theme/theme";
import Head from "next/head";
import playArrow from 'assets/images/gameplay/playArrow.png'
import FavIcon from "assets/images/favicon.png";



const CommingSoonWrapper = styled.div`
    height: 100vh;
    background: linear-gradient(133.84deg, #333333 -16.04%, #1A1A1A 7.99%, #393939 35.36%, #1A1A1A 62.06%, #262626 87.42%, #4E4E4E 112.12%);
    text-align: center;
    position: relative;
    h1{
        line-height: 100vh;
        margin: 0;
        font-weight: bold;
    }

    button{
        position: absolute;
        top: 20px;
        left: 20px;
        background: #42B9FF;
        width: auto;
        height: auto;
        padding: 10px 25px;
        display: flex;
        align-items: center;
        clip-path: polygon(11% 0, 100% 0%, 88% 100%, 0% 100%);
        img{
            width: 10px;
            margin-right: 5px;
            transform: rotate(180deg);
        }
        a{

        }
    }
`;

const CommingSoon = () =>{ 
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
                <meta name="theme-color" content="#280D57" />
                <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
            </Head>
            <GlobalStyle />
            <CommingSoonWrapper>
                <Heading>Comming Soon</Heading>
                <Button>
                    <Image src={playArrow} />
                    <a rel="preload" href="/">Back</a>
                </Button>
            </CommingSoonWrapper>
        </ThemeProvider>
    );
}

export default CommingSoon;