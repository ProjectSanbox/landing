import gameplay1 from 'assets/images/gameplay/gameplay1.png';
import intro1 from 'assets/images/gameplay/intro1.png';
import gameplay2 from 'assets/images/gameplay/gameplay2.png';
import intro2 from 'assets/images/gameplay/intro2.png';
import gameplay3 from 'assets/images/gameplay/gameplay3.png';
import intro3 from 'assets/images/gameplay/intro3.png';
import play from 'assets/images/gameplay/play.png'

export default {
    gameplay:[
        {
            imgVideo: gameplay1,
            title: "Building mode​",
            content: "This is one of the core functions of the game. When the player first enters the game, they will be provided a Builder Tool to customize basically every object in their own inventory",
            introImage: intro1,
            linkVideo: "https://www.youtube.com/embed/ML1pWYdm1WE",
            playButton: play
        },
        {
            imgVideo: gameplay2,
            title: "Multiplayer mode​​",
            content: "",
            listContent: [
                "Players can join other's published Land to play game modes.",
                "Game modes are custom by Land owner using Rule Tool.",
                "There are some preset game modes from the publisher as following.",
                "Players is rewarded loot box, NFT object, and token."
            ],
            introImage: intro2,
            linkVideo: "https://www.youtube.com/embed/ML1pWYdm1WE",
            playButton: play
        },
        {
            imgVideo: gameplay3,
            title: "Building mode​",
            content: "Planet Sandbox provides some build-in PvE mode: ",
            listContent: [
                "Tower defense: protect your base from NPC like zombies, soldier",
                "Racing: finish the track first. Runnable NPC: cyborg, house, hound..."
            ],
            introImage: intro3,
            linkVideo: "https://www.youtube.com/embed/ML1pWYdm1WE",
            playButton: play
        }
    ]
}