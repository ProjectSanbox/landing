import telegram from 'assets/images/footer/telegram.png';
import twitter from 'assets/images/footer/twitter.png';
import medium from 'assets/images/footer/medium.png';
import discord from 'assets/images/footer/discord.png';
import instagram from 'assets/images/footer/instagram.png';
import youtube from 'assets/images/footer/youtube.png';


export default {
  products:[
    {
      productName: "Home",
      productLink: "/#home",
    },
    {
      productName: "Gameplay",
      productLink: "/#gameplay",
    },
    {
      productName: "NFT Items",
      productLink: "/#nft",
    },
    // {
    //   productName: "PSB",
    //   productLink: "#psb",
    // },
  ],
  information:[
    {
      infoName: "Team",
      infoLink: "/#ourteam",
      target: "_self"
    },
    {
      infoName: "Roadmap",
      infoLink: "/#roadmap",
      target: "_self"
    },
    {
      infoName: "Term condition",
      infoLink: "//planetsandbox.gitbook.io/planetsandbox-game/terms-and-conditions",
      target: "_blank"
    },
  ],
  documentation:[
    {
      documentName: "About us",
      documentLink: "/comming"
    },
    {
      documentName: "Policy",
      documentLink: "/comming"
    },
    {
      documentName: "Whitepaper",
      documentLink: "//planetsandbox.gitbook.io/planetsandbox-game"
    },
  ],
  links1: [
    {
      icon: telegram,
      url: "//t.me/planetsandbox",
      name: "Telegram",
    },
    {
      icon: twitter,
      url: "//twitter.com/planetsandbox",
      name: "Twitter"
    },
    {
      icon: medium,
      url: "//planetsandbox.medium.com/",
      name: "Medium"
    },
    
  ],
  links2: [
    {
      icon: discord,
      url: "//discord.gg/zwpC6EAatV",
      name: "Discord",
    },
    {
      icon: youtube,
      url: "//www.youtube.com/c/PlanetSandboxOfficial/featured",
      name: "Youtube"
    },
  ],
};
