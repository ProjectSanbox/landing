(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/0+H":function(e,n,t){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=o(t("q1tI")),r=t("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,o=e.hybrid,a=void 0!==o&&o,r=e.hasQuery;return t||a&&(void 0!==r&&r)}n.isInAmpMode=i,n.useAmp=function(){return i(a.default.useContext(r.AmpStateContext))}},"18QX":function(e,n,t){"use strict";t.r(n);var o=t("vOnD").d.div.withConfig({displayName:"servicestyle__ServiceWarpper",componentId:"sc-1fr6mmq-0"})(["margin-top:80px;padding:50px 0px;.service-heading{text-align:center;h1{font-size:48px;font-weight:400;}}.service-content{a{color:#42B9FF;}p.content-heading{font-size:24px;font-weight:700;margin:40px 0px;}}"]);n.default=o},"48fX":function(e,n,t){var o=t("qhzo");e.exports=function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&o(e,n)}},"5fIB":function(e,n){e.exports=function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}},"8Kt/":function(e,n,t){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=o(t("q1tI")),r=o(t("Xuae")),i=t("lwAK"),s=t("FYa8"),l=t("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[a.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function u(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===a.default.Fragment?e.concat(a.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}n.defaultHead=c;var d=["name","httpEquiv","charSet","itemProp"];function h(e,n){return e.reduce((function(e,n){var t=a.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(u,[]).reverse().concat(c(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,o={};return function(a){var r=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(a.type){case"title":case"base":n.has(a.type)?r=!1:n.add(a.type);break;case"meta":for(var s=0,l=d.length;s<l;s++){var c=d[s];if(a.props.hasOwnProperty(c))if("charSet"===c)t.has(c)?r=!1:t.add(c);else{var u=a.props[c],h=o[c]||new Set;h.has(u)?r=!1:(h.add(u),o[c]=h)}}}return r}}()).reverse().map((function(e,n){var t=e.key||n;return a.default.cloneElement(e,{key:t})}))}var f=r.default();function p(e){var n=e.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(s.HeadManagerContext.Consumer,null,(function(t){return a.default.createElement(f,{reduceComponentsToState:h,handleStateChange:t,inAmpMode:l.isInAmpMode(e)},n)}))}))}p.rewind=f.rewind,n.default=p},BtgI:function(e,n,t){"use strict";n.a={black:"#333333",white:"#ffffff",primaryColor:"#FFD700",primaryHoverColor:"#cce5ff",secondaryColor:"#383d41",headingColor:"#FFFFFF",bodyColor:"#ffffff",linkColor:"#1F2AD5",NavBG:"transparent",NavBGSolid:"#290E59",menuHoverColor:"#1F2AD5"}},FYa8:function(e,n,t){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var a=o(t("q1tI"));n.HeadManagerContext=a.createContext(null)},T0f4:function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},VL7Y:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Term",function(){return t("p9Xp")}])},Xuae:function(e,n,t){"use strict";var o=t("/GRZ"),a=t("i2R6"),r=t("qXWd"),i=t("48fX"),s=t("tCBg"),l=t("T0f4"),c=t("mPvQ");function u(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=l(e);if(n){var a=l(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return s(this,t)}}Object.defineProperty(n,"__esModule",{value:!0});var d=t("q1tI"),h=!1;n.default=function(){var e,n=new Set;function t(t){e=t.props.reduceComponentsToState(c(n),t.props),t.props.handleStateChange&&t.props.handleStateChange(e)}return function(s){i(c,s);var l=u(c);function c(e){var a;return o(this,c),a=l.call(this,e),h&&(n.add(r(a)),t(r(a))),a}return a(c,[{key:"componentDidMount",value:function(){n.add(this),t(this)}},{key:"componentDidUpdate",value:function(){t(this)}},{key:"componentWillUnmount",value:function(){n.delete(this),t(this)}},{key:"render",value:function(){return null}}],[{key:"rewind",value:function(){var t=e;return e=void 0,n.clear(),t}}]),c}(d.Component)}},iSXs:function(e,n){e.exports="/_next/static/images/favicon-73d6e4ff455449bb4353917288d964ae.png"},kG2m:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,n,t){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var a=o(t("q1tI"));n.AmpStateContext=a.createContext({})},mPvQ:function(e,n,t){var o=t("5fIB"),a=t("rlHP"),r=t("kG2m");e.exports=function(e){return o(e)||a(e)||r()}},nAc5:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),r=t("18QX"),i=t("B550"),s=t("L+IS"),l=t("PF1p"),c=t("xFQ1"),u=t("YFqc"),d=t.n(u),h=a.a.createElement;n.default=function(){return h(r.default,{id:"service"},h(c.b,null,h(i.a,{className:"service"},h(i.a,{className:"service-heading"},h(s.a,null,"THE PLANETSANDBOX TERMS OF USE"),h(l.a,null,"Last Updated: [Sep 14, 2021]")),h(i.a,{className:"service-content"},h(l.a,null,'This end-user agreement (the "Agreement") should be read by you (the "User" or "you") in its entirety prior to your use of PlanetSandbox service or products. Be aware that this Agreement constitutes a legally binding agreement between you and PlanetSandbox (referred to herein as "PlanetSandbox", "us" or "we") which owns and operates the website on the Internet and the Service at ',h(d.a,{href:"https://black-cliff-048399d00.azurestaticapps.net/"},h("a",{target:"_bank"},"https://black-cliff-048399d00.azurestaticapps.net/")),' (the "Service"). By accessing or using the site or Planet Sandbox Services, you agree that you have read, understood, and agree to be bound by this agreement.'),h(l.a,{className:"content-heading"},"1. General Conditions of use"),h(l.a,null,"1.1 After registering an account through the website provided by Planetsandbox. If you do not agree to comply with any of the terms outlined in this agreement or any term that we have updated in the agreement, you may not access or use any of the PlanetSandbox Services. and must cancel your PlanetSandbox Account immediately."),h(l.a,null,"1.2. We may amend or modify this Agreement by posting such amended or modified Agreement (\u201cRevised Agreement\u201d) on the Planet Sandbox Platform or by notifying you about the changes via email. By continuing to access or use the Planet Sandbox Services once the Revised Agreement is effective, you agree to be bound by its terms."),h(l.a,null,'1.3  PlanetSandbox disclaims any and all warranties, expressed or implied, in connection with the service which is provided to you "as is" and we provide you with no warranty or representation whatsoever regarding its quality, fitness for purpose, completeness, or accuracy.'),h(l.a,null,'1.4 The term "Planet Sandbox", its domain names and any other trademarks, or service marks used by Planet Sandbox as part of the Service (the "Trademarks"), are solely owned by Planet Sandbox. In addition, all content on the website, including, but not limited to, the images, pictures, graphics, photographs, animations, videos, music, audio, and text (the "Site Content") belongs to Planet Sandbox and is protected by copyright and/or other intellectual property or other rights. You hereby acknowledge that by using the Service, you obtain no rights in the Site Content and/or the Trademarks, or any part thereof. Under no circumstances may you use the Site Content and/or the Trade Marks without Wanaka Farm\u2019s prior written consent. Additionally, you agree not to do anything that will harm or potentially harm the rights, including the intellectual property rights of Planet Sandbox.'),h(l.a,{className:"content-heading"},"2. Authority/Terms of Service"),h(l.a,null,"You agree to the rules of the Service provided and described on the ",h(d.a,{href:"https://black-cliff-048399d00.azurestaticapps.net/"},h("a",{target:"_blank"},"https://black-cliff-048399d00.azurestaticapps.net/"))," website. Planet Sandbox retains all authority over the issuing, maintenance, and closing of the Service. The decision of Planet Sandbox management, concerning any use of the Service, or dispute resolution, is final and shall not be open to review or appeal."),h(l.a,{className:"content-heading"},"3. SALE OF ASSETS GAMES AND PAYMENT"),h(l.a,null,"3.1. All in-game assets are purchased on the marketplace and you have to pay a fee to be able to own the item"),h(l.a,null,"3.2. We always has the right, in its sole discretion, to accept or reject any Assets and/or Games."),h(l.a,null,"3.3. If you elect to purchase Assets Games on PlanetSandbox, any financial transactions that you engage in will be conducted solely through the Ethereum network via MetaMask (or other Ethereum-compatible wallets and browsers). We has no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions. With that in mind, we will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage in on Planet Sandbox."),h(l.a,null,"3.4. Each sales transaction that occurs in The Sandbox will be subject to a fee payable by the purchaser to us. Such fee will be automatically applied as part of the sales transaction."),h(l.a,null,"3.4. You are solely responsible for any applicable taxes which may be payable on cryptocurrency traded or transacted by you through your using the Service;"),h(l.a,null,"3.5. Any cryptographic tokens, blockchain technology, or distributed ledger technology-related projects are new and relatively untested, and outside of both our and our Clients\u2019 exclusive control. Any adverse changes in market forces, technology, and regulatory environment impacting our performance under this Agreement shall absolve us from responsibility in this regard, including but not limited to hacking attacks, possible theft, unfavorable regulatory action, or unclear legal/tax status of cryptographic tokens."),h(l.a,{className:"content-heading"},"4. Prohibited Uses & Termination"),h(l.a,null,"4.1. We reserve the right to (a) modify or discontinue any portion of the Planet Sandbox Services, and (b) suspend or terminate your access to the Planet Sandbox Services, at any time, and from time to time, without notice to you in certain, limited circumstances described herein. You agree that we shall not be liable to you or any third party for any modification or termination of the Planet Sandbox Services, or suspension or termination of your access to the Planet Sandbox Services, except to the extent otherwise expressly set forth herein."),h(l.a,null,"4.1.2 We reserve the right (but have no obligation) to review any User Content, and to investigate and/or take appropriate action against you in our sole discretion if you violate the Acceptable Use Policy or any other provision of these Terms or otherwise create liability for us or any other person. Such action may include removing or modifying your User Content, terminating your Account in accordance with Section Error! Reference source not found., and/or reporting you to law enforcement authorities."),h(l.a,null,"4.1.3 If you provide Company with any feedback or suggestions regarding the Site (\u201cFeedback\u201d), you hereby assign to Company all rights in such Feedback and agree that Company shall have the right to use and fully exploit such Feedback and related information in any manner it deems appropriate. Company will treat any Feedback you provide to Company as non-confidential and non-proprietary. You agree that you will not submit to Company any information or ideas that you consider to be confidential or proprietary."),h(l.a,{className:"content-heading"},"5. Breach"),h(l.a,null,"5.1. Without prejudice to any other rights, if a User breaches in whole or in part any provision contained herein, Planet Sandbox reserves the right to take such action as it sees fit, including terminating this Agreement or any other agreement in place with the User and/or taking legal action against such User."),h(l.a,null,"5.2. You agree to indemnify and hold harmless Planet Sandbox, its affiliates, subsidiaries, licensors, and their respective directors, officers, members, managers, employees, and agents from and against any and all claims and expenses arising out of your use of the Services, a breach of any provision of these Terms by you or any person using the Services on your behalf, a breach by you of any applicable laws, or any third-party claim to the extent arising from or connected with an allegation that your use of the Services in accordance with these Terms infringes any rights of a third party.")))))}},p9Xp:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),r=t("vOnD"),i=t("BtgI"),s=t("sDmO"),l=t("8Kt/"),c=t.n(l),u=t("iSXs"),d=t.n(u),h=t("notH"),f=t("nAc5"),p=t("pPah"),y=a.a.createElement;n.default=function(){return y(r.a,{theme:i.a},y(c.a,null,y("title",null,"PlanetSandbox"),y("meta",{name:"Description",content:"Planet Sandbox is also a multiplayer TPS NFT GAME that lets user engaging in the combat arena and profit from battle"}),y("meta",{httpEquiv:"Content-Security-Policy",content:"upgrade-insecure-requests"}),y("meta",{name:"theme-color",content:"#280D57"}),y("link",{rel:"shortcut icon",type:"image/x-icon",href:d.a}),y("link",{href:"http://fonts.cdnfonts.com/css/eurostile",rel:"stylesheet"}),y("link",{href:"http://fonts.cdnfonts.com/css/product-sans",rel:"stylesheet"})),y(s.a,null),y(h.default,null),y(f.default,null),y(p.default,null))}},qXWd:function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,n){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},sDmO:function(e,n,t){"use strict";var o,a,r,i=t("vOnD"),s=(t("6Cl6"),Object(i.b)(o||(a=['\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #bdc3c7;\nbackground: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); \nbackground: linear-gradient(to right, #2c3e50, #bdc3c7);\n\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  background: #000000;\n}\n\n::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  *:focus {\n    outline: none;\n  }\n\nhtml{\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n    scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: "SFUEurostile";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632470681564vlNGTuVGcM.TTF");\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: "SFUEurostileBold";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472400888ysqRyQc8dg.TTF");\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: "SFUEurostileNormal";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472419173Aj5Sh8Fx2d.TTF");\n  font-style: normal;\n  font-display: swap;\n}\n\nbody,html {\n    margin: 0px;\n}\nbody {\n  font-size: 16px;\n  line-height: 28px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: \'Poppins\', sans-serif;\n  color: ',";\n  overflow-x: hidden !important;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  background: #000000;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n\n#__next{\n  overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: 'SFUEurostileBold', sans-serif;\n    font-size: 48px;\n    line-height: 60px;\n    text-transform: uppercase;\n    font-weight: 700;\n    color: ",";\n}\n\np{\n    font-family: 'SFUEurostile', sans-serif;\n    margin: 0 0 15px 0;\n    color: #ffffff;\n    font-weight: 400;\n    font-size: 20px;\n}\n\nspan{\n  font-family: 'SFUEurostile', sans-serif;\n}\n\na{\n    text-decoration: none;\n    color: ",";\n    font-family: 'SFUEurostile', sans-serif;\n  }\n  img{\n    max-width: 100%;\n  }\n\n\nsection{\n    position: relative;\n}\n\n.text-center{\n  text-align: center;\n}\n\nbutton, .btn{\n  display: inline-block;\n  width: 170px;\n  height: 60px;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  outline: none;\n}\n\n#container.visible{\n  display: none!important;\n  box-shadow: none;\n}\n\n@media only screen and (max-width: 576px){\n  h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-size: 35px;\n    line-height: 35px;\n}\n}\n"],r||(r=a.slice(0)),o=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(r)}}))),(function(e){return e.theme.bodyColor?e.theme.bodyColor:"#BEABDF"}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.headingColor})));n.a=s},tCBg:function(e,n,t){var o=t("C+bE"),a=t("qXWd");e.exports=function(e,n){return!n||"object"!==o(n)&&"function"!==typeof n?a(e):n}}},[["VL7Y",1,2,9,12,8,11,0,4,6,7,13,3]]]);