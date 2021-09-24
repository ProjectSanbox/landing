import buildmode from 'assets/images/gameplay/build-mode.jpg';
import build_icon from 'assets/images/gameplay/build-icon.png';
import multi_mode from 'assets/images/gameplay/multi-mode.jpg';
import multi_icon from 'assets/images/gameplay/multi-icon.png';
import pvemode from 'assets/images/gameplay/pve-mode.jpg';
import pve_icon from 'assets/images/gameplay/pve-icon.png'

export default {
    gameplay:[
        {
            poster: buildmode,
            title: "Building mode​",
            content: "This is one of the core functions of the game. When the player first enters the game, they will be provided a Builder Tool to customize every object in their inventory.",
            icon: build_icon,
        },
        {
            poster: multi_mode,
            title: "Multiplayer mode​​",
            content: "",
            listContent: [
                "Players can join other's published Land to play game modes.",
                "Game modes are customized by the Landowner using Rule Tool.",
                "There are some preset game modes from the publisher as following.",
                "Players are rewarded with loot boxes, NFT objects, and tokens."
            ],
            icon: multi_icon,
        },
        {
            poster: pvemode,
            title: "PvE Mode​",
            content: "Planet Sandbox provides some build-in PvE mode: ",
            listContent: [
                "Tower defense: protect your base from NPC like zombies, soldiers",
                "Racing: finish the track first.Runnable NPC: cyborg, house, hound..."
            ],
            icon: pve_icon,
        }
    ]
}