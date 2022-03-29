import pancake from "assets/images/nav/pancake.svg";
import gate from "assets/images/nav/gate.png";

export default {
  nav: [
    {
      link: "/#roadmap",
      linkActive: "roadmap",
      target: "_self",
      content: "Roadmap",
      class: "roadmap",
    },
    {
      link: "/#event",
      linkActive: "event",
      target: "_self",
      content: "Event",
      class: "event",
    },
    {
      link: "//drive.google.com/file/d/1231HjfdpF0Ep1niBj8KNagWzkMR7txHS/view",
      linkActive:
        "//drive.google.com/file/d/1231HjfdpF0Ep1niBj8KNagWzkMR7txHS/view",
      target: "_blank",
      content: "Token",
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
    // {
    //   link: "//staking.planetsandbox.io/",
    //   linkActive: "staking",
    //   target: "_blank",
    //   content: "Staking",
    //   class: "Staking",
    // },
   
    // {
    //   link: "javascript:void(0)",
    //   linkActive: "exchange",
    //   target: "",
    //   content: "Exchange",
    //   class: "exchange",
    //   list: [
    //     {
    //       link: "javascript:void(0)",
    //       content: "Buy PSB",
    //       completed: false,
    //       listChild: [
    //         {
    //           icon: pancake,
    //           content: "PancakeSwap",
    //           link: "//pancakeswap.finance/info/pair/0xcb9abf27b2e7b8706f0daf30855b80421b41e9a9",
    //         },
    //         {
    //           icon: gate,
    //           content: "Gate.io",
    //           link: "//www.gate.io/vn/trade/PSB_USDT",
    //         },
    //       ],
    //     },
    //     {
    //       link: "javascript:void(0)",
    //       content: "Land (Coming soon)",
    //       completed: true,
    //     },
    //   ],
    // },
    // {
    //   link: "//docsend.com/view/wm76umky6wbzqwmx",
    //   linkActive: "#",
    //   target: "_self",
    //   content: "Pitching",
    //   class: "pitching",
    // },
  ],
  navMobie: [
    {
      link: "//staking.planetsandbox.io/",
      target: "_blank",
      content: "Staking",
      class: "staking"
    },
    
    {
      link: "javascript:void(0)",
      target: "_blank",
      content: "Exchange",
      class: "exchange",
      list: [
        {
          link: "javascript:void(0)",
          content: "Buy PSB",
          completed: false,
          id: "exchange",
          listChild: [
            {
              icon: pancake,
              content: "PancakeSwap",
              link: "//pancakeswap.finance/info/pair/0xcb9abf27b2e7b8706f0daf30855b80421b41e9a9",
            },
            {
              icon: gate,
              content: "Gate.io",
              link: "//www.gate.io/trade/PSB_USDT",
            },
          ],
        },
        {
          link: "javascript:void(0)",
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
    }
  ],
};
