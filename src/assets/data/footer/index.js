import { FaTwitter, FaMediumM, FaTelegramPlane } from "react-icons/fa";


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
      infoName: "Document",
      infoLink: "/comming",
      target: "_self"
    },
    {
      infoName: "Term",
      infoLink: "//planetsandbox.gitbook.io/planetsandbox-game/terms-and-conditions",
      target: "_blank"
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
    {
      documentName: "MEDIA",
      documentLink: "/media"
    }
  ],
  links: [
    {
      icon: <FaTwitter />,
      url: "//twitter.com/planetsandbox",
      name: "Twitter",
    },

    {
      icon: <FaMediumM />,
      url: "//planetsandbox.medium.com/",
      name: "Medium"
    },
    
    {
      icon: <FaTelegramPlane />,
      url: "//t.me/planetsandbox",
      name: "Telegram"
    },
  ],
};
