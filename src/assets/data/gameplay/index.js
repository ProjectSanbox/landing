import buildmode from 'assets/images/gameplay/build-mode.png';
import buildmode_icon from 'assets/images/gameplay/build-icon.png';
import pvpmode from 'assets/images/gameplay/pvp-mode.png';
import pvpmode_icon from 'assets/images/gameplay/pvp-icon.png';
import pvemode from 'assets/images/gameplay/pve-mode.png';
import pvemode_icon from 'assets/images/gameplay/pve-icon.png';
import play from 'assets/images/gameplay/play.png'

export default {
    gameplay:[
        {
            imgVideo: pvpmode,
            title: "Building mode​",
            content: "This is one of the core functions of the game. When the player first enters the game, they will be provided a Builder Tool to customize every object in their inventory.",
            introImage: buildmode_icon,
            linkVideo: "https://www.youtube.com/embed/ML1pWYdm1WE",
            playButton: play
        },
        {
            imgVideo: buildmode,
            title: "Multiplayer mode​​",
            content: "",
            listContent: [
                "Players can join other's published Land to play game modes.",
                "Game modes are customized by the Landowner using Rule Tool.",
                "There are some preset game modes from the publisher as following.",
                "Players are rewarded with loot boxes, NFT objects, and tokens."
            ],
            introImage: pvemode_icon,
            linkVideo: "https://www.youtube.com/embed/ML1pWYdm1WE",
            playButton: play
        },
        {
            imgVideo: pvemode,
            title: "PvE Mode​",
            content: "Planet Sandbox provides some build-in PvE mode: ",
            listContent: [
                "Tower defense: protect your base from NPC like zombies, soldiers",
                "Racing: finish the track first.Runnable NPC: cyborg, house, hound..."
            ],
            introImage: pvpmode_icon,
            linkVideo: "https://www.youtube.com/embed/ML1pWYdm1WE",
            playButton: play
        }
    ]
}