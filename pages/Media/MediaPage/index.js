import MediaWrapper from './media.style';
import Box from 'reusecore/Box';
import Text from 'reusecore/Text';
import Heading from 'reusecore/Heading';
import {List, ListItem} from 'reusecore/List';
import Image from 'reusecore/Image';
import logo from 'assets/images/logo.png';
import {Container} from 'reusecore/Layout';
import {FaTelegramPlane, FaFacebookF, FaTwitter} from 'react-icons/fa';
import backed from 'assets/images/media/backed.jpg';
import assets from 'assets/images/media/assets.png';
import token from 'assets/images/media/token.jpg';

const Media = () =>{
    return(
        <MediaWrapper>
            <Container>
                <Box className="media-heading">
                    <Heading>Planet Sandbox Raises $1.5 Million For Play-To-Earn Sandbox Shooting Game</Heading>
                    <Text className="date-write">Tuesday ,September 28, 2021</Text>
                </Box>
                <Box className="media-content">
                    <Box className="media-icon">
                        <Box className="items">
                            <a href=""><FaFacebookF/></a>
                        </Box>
                        <Box className="items">
                            <a href=""><FaTwitter/></a>
                        </Box>
                        <Box className="items">
                            <a href=""><FaTelegramPlane/></a>
                        </Box>
                    </Box>

                    <Box className="content-main">
                        <Box className="logo">
                            <Image src={logo} />
                        </Box>
                        <Box className="intro">
                            <Text className="heading">What is the Planet Sanbox Project?</Text>
                            <Text><b>Planet Sandbox</b> is the largest series of physics sandbox games
                            that allows players to build and customize creative sandbox worlds with 
                            infinite built-in items. At the same time, it is also a multiplayer TPS NFT game that allows
                            users to participate in the battle arena and profit from the battles.</Text>
                        </Box>

                        <Box>
                            <Image src={backed} />
                        </Box>
                            <Text>PlanetSandbox has announced a successful oversubscribed $1.5 million raise led by incubators 
                            Icetea Labs and ExNetwork Capital with participation from NGC Ventures, Illuvium,
                            Momentum6, Everse Capital, Basics Capital, x21 Digital, Magnus Capital, MoonWhale Ventures,
                            and others.</Text>

                            <Text>Planet Sandbox is a virtual world where players can play, build, own and monetize 
                            their virtual experiences. Aimed at empowering artists, creators, and players to build 
                            the platform they've always envisioned, providing the means for you to unleash your creativity.</Text>

                            <List>
                                <ListItem>
                                    <b>Building Models:</b> Players participating in the game will be provided with tools to design
                                    and modify objects in their inventory.
                                </ListItem>
                                <ListItem>
                            <b> Multiplayer model:</b> Players participate in new Land announcements to participate in a variety 
                                of game models. The game model will be adapted to the owner of the Land and the rule engine.
                                There will be pre-set game models. Players are rewarded with loot boxes, NFT objects, and tokens
                                </ListItem>
                                <ListItem>
                                <b>PVE model:</b> Defeat the tower, protect your land from NPC like Zoombie, soldier. Race, finish the
                                first race, race with NPCs like cyborgs, houses, horses.
                                </ListItem>
                            </List>

                            <Image  src={token}/>
                            <Text>Planet Sandbox is the ultimate physics-powered sandbox shooting game that allows players 
                            to build and own arenas to fight other players in different game modes using their own NFT weapons
                            and accessories. Powered by the $PSB and $PULV tokens, Planet Sandbox has created multiple play-to-earn opportunities within their Metaverse.
                            Refer to PSB Planet Sandbox: <a href="https://cryptorank.io/ico/planet-sandbox">https://cryptorank.io/ico/planet-sandbox</a>
                            </Text>

                            <Text>Each object will have its categories and properties that define its characteristics. Rarity is determined by the NFT attribute and here are some of the weapon assets we provide in the game: </Text>
                            <Image src={assets} />
                            <Text>
                            In addition to weapons Sandbox owners can customize their land with limitless building items
                            and design game modes for others to join and play. The land will become a business where 
                            players can sell or earn passive income through the marketplace. The land system provides
                            creators with various possibilities to build on diverse sceneries and landscapes such as Grass,
                            Desert, Mountains, Toxic Wastelands, Arctic, etc. Eventually, the game will include other planetary environments like the Moon and Mars.
                            </Text>
                            <Text>Aside from the builder tool, there are Multiplayer game modes that allow players to choose their favorite sandbox and compete with others in intense fighting games (such as deathmatch and hunting prop) to earn prizes. The beta version of this game is expected to be released this November</Text>
                            <Text>
                            Thi Truong, Founder of Icetea Labs, explains, “Planet Sandbox combines an incredible game premise with real in-game avenues to allow players to earn money. The nature of the game in itself will encourage friendly competition and leverage the game’s robust incentives design to create a fun play-to-earn experience.”
                            </Text>
                            <Text>
                            Planet Sandbox will be conducting an IDO on October 2 on Redkite and GameFi, two popular launchpads. During the IDO, 2,000,000 PSB tokens will be sold at a price of $0.0125, for a total $250,000 public sale raise. More details about the upcoming IDO can be found on the company’s official Telegram channel along with <a href="https://twitter.com/planetsandbox">Twitter</a> (NYSE: <a href="https://finance.yahoo.com/quote/TWTR?ltr=1">TWTR</a>), <a href="https://planetsandbox.medium.com/">Medium</a>, and <a href="https://discord.com/invite/zwpC6EAatV">Discord</a>.
                            </Text>
                        </Box>

                    <Box className="block">
                        
                    </Box>
                </Box>
            </Container>
        </MediaWrapper>
    );
}

export default Media;