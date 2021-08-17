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
            imgVideo: buildmode,
            title: "Building mode​",
            content: "This is one of the core functions of the game. When the player first enters the game, they will be provided a Builder Tool to customize basically every object in their own inventory",
            introImage: buildmode_icon,
            linkVideo: "https://www.youtube.com/embed/ML1pWYdm1WE",
            playButton: play
        },
        {
            imgVideo: pvpmode,
            title: "Multiplayer mode​​",
            content: "",
            listContent: [
                "Players can join other's published Land to play game modes.",
                "Game modes are custom by Land owner using Rule Tool.",
                "There are some preset game modes from the publisher as following.",
                "Players is rewarded loot box, NFT object, and token."
            ],
            introImage: pvpmode_icon,
            linkVideo: "https://www.youtube.com/embed/ML1pWYdm1WE",
            playButton: play
        },
        {
            imgVideo: pvemode,
            title: "PvE Mode​",
            content: "Planet Sandbox provides some build-in PvE mode: ",
            listContent: [
                "Tower defense: protect your base from NPC like zombies, soldier",
                "Racing: finish the track first. Runnable NPC: cyborg, hour, hound..."
            ],
            introImage: pvemode_icon,
            linkVideo: "https://www.youtube.com/embed/ML1pWYdm1WE",
            playButton: play
        }
    ]
}