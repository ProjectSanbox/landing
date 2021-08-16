import { FaTwitter, FaMediumM, FaTelegramPlane } from "react-icons/fa";


export default {
  products:[
    {
      productName: "Home",
      productLink: "#home",
    },
    {
      productName: "Gameplay",
      productLink: "#gameplay",
    },
    {
      productName: "NFTS Items",
      productLink: "#nft",
    },
    {
      productName: "PSB",
      productLink: "#psb",
    },
  ],
  information:[
    {
      infoName: "Team",
      infoLink: "#ourteam"
    },
    {
      infoName: "Roadmap",
      infoLink: "#roadmap"
    },
    {
      infoName: "Document",
      infoLink: "#"
    },
  ],
  documentation:[
    {
      documentName: "ABOUT US",
      documentLink: "/comming"
    },
    {
      documentName: "POLICY",
      documentLink: "/comming"
    },
    {
      documentName: "WHITEPAPER",
      documentLink: "/comming"
    },
  ],
  links: [
    {
      icon: <FaTwitter />,
      url: "//twitter.com/planetsandbox",
      name: "Twitter",
    },

    {
      icon: <FaMediumM />,
      url: "//theminders.medium.com/",
      name: "Medium"
    },
    
    {
      icon: <FaTelegramPlane />,
      url: "//t.me/planetsandbox",
      name: "Telegram"
    },
  ],
};
