(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/0+H":function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n("q1tI")),r=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,a=void 0!==o&&o,r=e.hasQuery;return n||a&&(void 0!==r&&r)}t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(r.AmpStateContext))}},"18QX":function(e,t,n){"use strict";n.r(t);var o=n("vOnD").d.div.withConfig({displayName:"servicestyle__ServiceWarpper",componentId:"sc-1fr6mmq-0"})(["margin-top:80px;padding:50px 0px;.service-heading{text-align:center;h1{font-size:48px;font-weight:400;}}.service-content{a{color:#42B9FF;}p.content-heading{font-size:24px;font-weight:700;margin:40px 0px;}}"]);t.default=o},"48fX":function(e,t,n){var o=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"8Kt/":function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n("q1tI")),r=o(n("Xuae")),i=n("lwAK"),s=n("FYa8"),l=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(a){var r=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(var s=0,l=d.length;s<l;s++){var c=d[s];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?r=!1:n.add(c);else{var u=a.props[c],h=o[c]||new Set;h.has(u)?r=!1:(h.add(u),o[c]=h)}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var f=r.default();function p(e){var t=e.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(f,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}p.rewind=f.rewind,t.default=p},BtgI:function(e,t,n){"use strict";t.a={black:"#333333",white:"#ffffff",primaryColor:"#FFD700",primaryHoverColor:"#cce5ff",secondaryColor:"#383d41",headingColor:"#FFFFFF",bodyColor:"#ffffff",linkColor:"#1F2AD5",NavBG:"transparent",NavBGSolid:"#290E59",menuHoverColor:"#1F2AD5"}},FYa8:function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n("q1tI"));t.HeadManagerContext=a.createContext(null)},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},VL7Y:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Term",function(){return n("p9Xp")}])},Xuae:function(e,t,n){"use strict";var o=n("/GRZ"),a=n("i2R6"),r=n("qXWd"),i=n("48fX"),s=n("tCBg"),l=n("T0f4"),c=n("mPvQ");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return s(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),h=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(s){i(c,s);var l=u(c);function c(e){var a;return o(this,c),a=l.call(this,e),h&&(t.add(r(a)),n(r(a))),a}return a(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}],[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),c}(d.Component)}},iSXs:function(e,t){e.exports="/_next/static/images/favicon-73d6e4ff455449bb4353917288d964ae.png"},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n("q1tI"));t.AmpStateContext=a.createContext({})},mPvQ:function(e,t,n){var o=n("5fIB"),a=n("rlHP"),r=n("kG2m");e.exports=function(e){return o(e)||a(e)||r()}},nAc5:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("18QX"),i=n("B550"),s=n("L+IS"),l=n("PF1p"),c=n("xFQ1"),u=n("YFqc"),d=n.n(u),h=a.a.createElement;t.default=function(){return h(r.default,{id:"service"},h(c.b,null,h(i.a,{className:"service"},h(i.a,{className:"service-heading"},h(s.a,null,"THE PLANETSANDBOX TERMS OF USE"),h(l.a,null,"Last Updated: [Sep 14, 2021]")),h(i.a,{className:"service-content"},h(l.a,null,'This end-user agreement (the "Agreement") should be read by you (the "User" or "you") in its entirety prior to your use of PlanetSandbox service or products. Be aware that this Agreement constitutes a legally binding agreement between you and PlanetSandbox (referred to herein as "PlanetSandbox", "us" or "we") which owns and operates the website on the Internet and the Service at ',h(d.a,{href:"https://black-cliff-048399d00.azurestaticapps.net/"},h("a",{target:"_bank"},"https://black-cliff-048399d00.azurestaticapps.net/")),' (the "Service"). By accessing or using the site or Planet Sandbox Services, you agree that you have read, understood, and agree to be bound by this agreement.'),h(l.a,{className:"content-heading"},"1. General Conditions of use"),h(l.a,null,"1.1 After registering an account through the website provided by Planetsandbox. If you do not agree to comply with any of the terms outlined in this agreement or any term that we have updated in the agreement, you may not access or use any of the PlanetSandbox Services. and must cancel your PlanetSandbox Account immediately."),h(l.a,null,"1.2. We may amend or modify this Agreement by posting such amended or modified Agreement (\u201cRevised Agreement\u201d) on the Planet Sandbox Platform or by notifying you about the changes via email. By continuing to access or use the Planet Sandbox Services once the Revised Agreement is effective, you agree to be bound by its terms."),h(l.a,null,'1.3  PlanetSandbox disclaims any and all warranties, expressed or implied, in connection with the service which is provided to you "as is" and we provide you with no warranty or representation whatsoever regarding its quality, fitness for purpose, completeness, or accuracy.'),h(l.a,null,'1.4 The term "Planet Sandbox", its domain names and any other trademarks, or service marks used by Planet Sandbox as part of the Service (the "Trademarks"), are solely owned by Planet Sandbox. In addition, all content on the website, including, but not limited to, the images, pictures, graphics, photographs, animations, videos, music, audio, and text (the "Site Content") belongs to Planet Sandbox and is protected by copyright and/or other intellectual property or other rights. You hereby acknowledge that by using the Service, you obtain no rights in the Site Content and/or the Trademarks, or any part thereof. Under no circumstances may you use the Site Content and/or the Trade Marks without Wanaka Farm\u2019s prior written consent. Additionally, you agree not to do anything that will harm or potentially harm the rights, including the intellectual property rights of Planet Sandbox.'),h(l.a,{className:"content-heading"},"2. Authority/Terms of Service"),h(l.a,null,"You agree to the rules of the Service provided and described on the ",h(d.a,{href:"https://black-cliff-048399d00.azurestaticapps.net/"},h("a",{target:"_blank"},"https://black-cliff-048399d00.azurestaticapps.net/"))," website. Planet Sandbox retains all authority over the issuing, maintenance, and closing of the Service. The decision of Planet Sandbox management, concerning any use of the Service, or dispute resolution, is final and shall not be open to review or appeal."),h(l.a,{className:"content-heading"},"3. SALE OF ASSETS GAMES AND PAYMENT"),h(l.a,null,"3.1. All in-game assets are purchased on the marketplace and you have to pay a fee to be able to own the item"),h(l.a,null,"3.2. We always has the right, in its sole discretion, to accept or reject any Assets and/or Games."),h(l.a,null,"3.3. If you elect to purchase Assets Games on PlanetSandbox, any financial transactions that you engage in will be conducted solely through the Ethereum network via MetaMask (or other Ethereum-compatible wallets and browsers). We has no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions. With that in mind, we will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage in on Planet Sandbox."),h(l.a,null,"3.4. Each sales transaction that occurs in The Sandbox will be subject to a fee payable by the purchaser to us. Such fee will be automatically applied as part of the sales transaction."),h(l.a,null,"3.4. You are solely responsible for any applicable taxes which may be payable on cryptocurrency traded or transacted by you through your using the Service;"),h(l.a,null,"3.5. Any cryptographic tokens, blockchain technology, or distributed ledger technology-related projects are new and relatively untested, and outside of both our and our Clients\u2019 exclusive control. Any adverse changes in market forces, technology, and regulatory environment impacting our performance under this Agreement shall absolve us from responsibility in this regard, including but not limited to hacking attacks, possible theft, unfavorable regulatory action, or unclear legal/tax status of cryptographic tokens."),h(l.a,{className:"content-heading"},"4. Prohibited Uses & Termination"),h(l.a,null,"4.1. We reserve the right to (a) modify or discontinue any portion of the Planet Sandbox Services, and (b) suspend or terminate your access to the Planet Sandbox Services, at any time, and from time to time, without notice to you in certain, limited circumstances described herein. You agree that we shall not be liable to you or any third party for any modification or termination of the Planet Sandbox Services, or suspension or termination of your access to the Planet Sandbox Services, except to the extent otherwise expressly set forth herein."),h(l.a,null,"4.1.2 We reserve the right (but have no obligation) to review any User Content, and to investigate and/or take appropriate action against you in our sole discretion if you violate the Acceptable Use Policy or any other provision of these Terms or otherwise create liability for us or any other person. Such action may include removing or modifying your User Content, terminating your Account in accordance with Section Error! Reference source not found., and/or reporting you to law enforcement authorities."),h(l.a,null,"4.1.3 If you provide Company with any feedback or suggestions regarding the Site (\u201cFeedback\u201d), you hereby assign to Company all rights in such Feedback and agree that Company shall have the right to use and fully exploit such Feedback and related information in any manner it deems appropriate. Company will treat any Feedback you provide to Company as non-confidential and non-proprietary. You agree that you will not submit to Company any information or ideas that you consider to be confidential or proprietary."),h(l.a,{className:"content-heading"},"5. Breach"),h(l.a,null,"5.1. Without prejudice to any other rights, if a User breaches in whole or in part any provision contained herein, Planet Sandbox reserves the right to take such action as it sees fit, including terminating this Agreement or any other agreement in place with the User and/or taking legal action against such User."),h(l.a,null,"5.2. You agree to indemnify and hold harmless Planet Sandbox, its affiliates, subsidiaries, licensors, and their respective directors, officers, members, managers, employees, and agents from and against any and all claims and expenses arising out of your use of the Services, a breach of any provision of these Terms by you or any person using the Services on your behalf, a breach by you of any applicable laws, or any third-party claim to the extent arising from or connected with an allegation that your use of the Services in accordance with these Terms infringes any rights of a third party.")))))}},p9Xp:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("vOnD"),i=n("BtgI"),s=n("sDmO"),l=n("8Kt/"),c=n.n(l),u=n("iSXs"),d=n.n(u),h=n("notH"),f=n("nAc5"),p=n("pPah"),y=a.a.createElement;t.default=function(){return y(r.a,{theme:i.a},y(c.a,null,y("title",null,"PlanetSandbox"),y("meta",{name:"Description",content:"Planet Sandbox is also a multiplayer TPS NFT GAME that lets user engaging in the combat arena and profit from battle"}),y("meta",{httpEquiv:"Content-Security-Policy",content:"upgrade-insecure-requests"}),y("meta",{name:"theme-color",content:"#280D57"}),y("link",{rel:"shortcut icon",type:"image/x-icon",href:d.a}),y("link",{href:"http://fonts.cdnfonts.com/css/eurostile",rel:"stylesheet"}),y("link",{href:"http://fonts.cdnfonts.com/css/product-sans",rel:"stylesheet"})),y(s.a,null),y(h.default,null),y(f.default,null),y(p.default,null))}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},sDmO:function(e,t,n){"use strict";var o=n("vOnD"),a=(n("6Cl6"),Object(o.b)(['::-webkit-scrollbar{width:10px;}::-webkit-scrollbar-thumb{background:#bdc3c7;background:-webkit-linear-gradient(to right,#2c3e50,#bdc3c7);background:linear-gradient(to right,#2c3e50,#bdc3c7);border-radius:10px;}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px grey;background:#000000;}::selection{background:#333333;color:#ffffff;}*,*::before,*::after{box-sizing:inherit;}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}*:focus{outline:none;}html{box-sizing:border-box;-ms-overflow-style:scrollbar;scroll-behavior:smooth;}@font-face{font-family:"SFUEurostile";src:url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632470681564vlNGTuVGcM.TTF");font-style:normal;font-weight:400;font-display:swap;}@font-face{font-family:"SFUEurostileBold";src:url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472400888ysqRyQc8dg.TTF");font-style:normal;font-display:swap;}@font-face{font-family:"SFUEurostileNormal";src:url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472419173Aj5Sh8Fx2d.TTF");font-style:normal;font-display:swap;}body,html{margin:0px;}body{font-size:16px;line-height:28px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:\'Poppins\',sans-serif;color:',";overflow-x:hidden !important;font-weight:400;margin:0;padding:0;background:#000000;background-repeat:no-repeat;background-size:cover;background-position:center center;}#__next{overflow-x:hidden;}h1,h2,h3,h4,h5,h6{font-family:'SFUEurostileBold',sans-serif;font-size:48px;line-height:60px;text-transform:uppercase;font-weight:700;color:",";}p{font-family:'SFUEurostile',sans-serif;margin:0 0 15px 0;color:#ffffff;font-weight:400;font-size:20px;}span{font-family:'SFUEurostile',sans-serif;}a{text-decoration:none;color:",";font-family:'SFUEurostile',sans-serif;}img{max-width:100%;}section{position:relative;}.text-center{text-align:center;}button,.btn{display:inline-block;width:170px;height:60px;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;outline:none;}#container.visible{display:none!important;box-shadow:none;}@media only screen and (max-width:576px){h1,h2,h3,h4,h5,h6{font-size:35px;line-height:35px;}}"],(function(e){return e.theme.bodyColor?e.theme.bodyColor:"#BEABDF"}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.headingColor})));t.a=a},tCBg:function(e,t,n){var o=n("C+bE"),a=n("qXWd");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?a(e):t}}},[["VL7Y",1,2,9,13,8,12,0,4,7,6,10,3]]]);