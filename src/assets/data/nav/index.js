import pancake from "assets/images/nav/pancake.svg";

export default {
  nav: [
    // {
    //   link: "//staking.planetsandbox.io/",
    //   linkActive: "staking",
    //   target: "_blank",
    //   content: "Staking",
    //   class: "Staking",
    // },
   
    {
      link: "javascript:0",
      linkActive: "exchange",
      target: "javascript:0",
      content: "Exchange",
      class: "exchange",
      list: [
        {
          link: "javascript:0",
          content: "Buy PSB",
          completed: false,
          listChild: [
            {
              icon: pancake,
              content: "PancakeSwap",
              link: "//pancakeswap.finance/info/pair/0xcb9abf27b2e7b8706f0daf30855b80421b41e9a9",
            },
          ],
        },
        {
          link: "javascript:0",
          content: "Land",
          completed: true,
        },
      ],
    },
   
    {
      link: "//drive.google.com/file/d/1231HjfdpF0Ep1niBj8KNagWzkMR7txHS/view",
      linkActive:
        "//drive.google.com/file/d/1231HjfdpF0Ep1niBj8KNagWzkMR7txHS/view",
      target: "_blank",
      content: "Token",
    },
    {
      link: "/#roadmap",
      linkActive: "roadmap",
      target: "_self",
      content: "Roadmap",
      class: "roadmap",
    },
    {
      link: "/#ourteam",
      linkActive: "ourteam",
      target: "_self",
      content: "Team",
      class: "ourteam",
    },
    {
      link: "/#FAQs",
      linkActive: "FAQs",
      target: "_self",
      content: "FAQs",
      class: "FAQs",
    },
    {
      link: "//docsend.com/view/wm76umky6wbzqwmx",
      linkActive: "#",
      target: "_self",
      content: "Pitching",
      class: "pitching",
    },
  
  ],
  navMobie: [
    // {
    //   link: "//staking.planetsandbox.io/",
    //   target: "_blank",
    //   content: "Staking",
    //   class: "staking"
    // },
    
    {
      link: "javascript:0",
      target: "_blank",
      content: "Exchange",
      class: "exchange",
      list: [
        {
          link: "javascript:0",
          content: "Buy PSB",
          completed: false,
          id: "exchange",
          listChild: [
            {
              icon: pancake,
              content: "PancakeSwap",
              link: "https://pancakeswap.finance/",
            },
          ],
        },
        {
          link: "javascript:0",
          content: "Land (Coming soon)",
          completed: true,
          id: "land",
        },
      ],
    },
    
    {
      link: "//drive.google.com/file/d/1231HjfdpF0Ep1niBj8KNagWzkMR7txHS/view",
      target: "_blank",
      content: "Token",
      class: "token"
    },
    {
      link: "/#roadmap",
      target: "_self",
      content: "Roadmap",
      class: "roadmap"
    },
    {
      link: "/#ourteam",
      target: "_self",
      content: "Team",
      class: "team"
    },
    {
      link: "//docsend.com/view/wm76umky6wbzqwmx",
      linkActive: "#",
      target: "_blank",
      content: "Pitching",
      class: "pitching"
    },
    // {
    //     link: "//app.polrare.co/",
    //     target: "_self",
    //     content: "MarketPlace"
    // },
  ],
};
