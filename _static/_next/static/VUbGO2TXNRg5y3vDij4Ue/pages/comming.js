(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+T6m":function(n,e,t){"use strict";var r=t("wx14"),o=t("Ff2n"),i=t("q1tI"),a=t.n(i),c=t("vOnD"),s=c.d.button.withConfig({displayName:"buttonstyle__ButtonWrapper",componentId:"sc-1l0bfk6-0"})([""," ",""],(function(n){return n.btnColor?Object(c.c)(["color:",";"],n.btnColor):Object(c.c)(["color:inherit;"])}),(function(n){return n.btnBg?Object(c.c)(["background-color:",";"],n.btnBg):Object(c.c)(["background-color:#ddd;"])})),u=a.a.createElement;e.a=function(n){var e=n.children,t=n.type,i=n.onClick,a=Object(o.a)(n,["children","type","onClick"]),c=["btn"];return a.className&&c.push(a.className),u(s,Object(r.a)({onClick:i,type:t},a,{className:c.join(" ")}),e)}},"/0+H":function(n,e,t){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(t("q1tI")),i=t("lwAK");function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.ampFirst,t=void 0!==e&&e,r=n.hybrid,o=void 0!==r&&r,i=n.hasQuery;return t||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},"48fX":function(n,e,t){var r=t("qhzo");n.exports=function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}},"5fIB":function(n,e){n.exports=function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}},"8Kt/":function(n,e,t){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(t("q1tI")),i=r(t("Xuae")),a=t("lwAK"),c=t("FYa8"),s=t("/0+H");function u(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return n||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(n,e){return"string"===typeof e||"number"===typeof e?n:e.type===o.default.Fragment?n.concat(o.default.Children.toArray(e.props.children).reduce((function(n,e){return"string"===typeof e||"number"===typeof e?n:n.concat(e)}),[])):n.concat(e)}e.defaultHead=u;var f=["name","httpEquiv","charSet","itemProp"];function p(n,e){return n.reduce((function(n,e){var t=o.default.Children.toArray(e.props.children);return n.concat(t)}),[]).reduce(l,[]).reverse().concat(u(e.inAmpMode)).filter(function(){var n=new Set,e=new Set,t=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);n.has(a)?i=!1:n.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var c=0,s=f.length;c<s;c++){var u=f[c];if(o.props.hasOwnProperty(u))if("charSet"===u)t.has(u)?i=!1:t.add(u);else{var l=o.props[u],p=r[u]||new Set;p.has(l)?i=!1:(p.add(l),r[u]=p)}}}return i}}()).reverse().map((function(n,e){var t=n.key||e;return o.default.cloneElement(n,{key:t})}))}var d=i.default();function h(n){var e=n.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(n){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(t){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:t,inAmpMode:s.isInAmpMode(n)},e)}))}))}h.rewind=d.rewind,e.default=h},AME3:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),o=t.n(r),i=t("vOnD"),a=t("L+IS"),c=t("+T6m"),s=(t("UMGi"),t("YFqc"),t("sDmO")),u=t("BtgI"),l=t("8Kt/"),f=t.n(l),p=t("iSXs"),d=t.n(p),h=o.a.createElement,m=i.d.div.withConfig({displayName:"comming__CommingSoonWrapper",componentId:"cz54ij-0"})(["height:100vh;background:linear-gradient(133.84deg,#333333 -16.04%,#1A1A1A 7.99%,#393939 35.36%,#1A1A1A 62.06%,#262626 87.42%,#4E4E4E 112.12%);text-align:center;position:relative;h1{line-height:100vh;margin:0;font-weight:bold;}button{position:absolute;top:20px;left:20px;background:#42B9FF;width:auto;height:auto;padding:10px 25px;display:flex;align-items:center;clip-path:polygon(11% 0,100% 0%,88% 100%,0% 100%);img{width:10px;margin-right:5px;transform:rotate(180deg);}a{}}"]);e.default=function(){return h(i.a,{theme:u.a},h(f.a,null,h("title",null,"PlanetSandbox"),h("meta",{name:"Description",content:"Planet Sandbox is also a multiplayer TPS NFT GAME that lets user engaging in the combat arena and profit from battle"}),h("meta",{name:"theme-color",content:"#280D57"}),h("link",{rel:"shortcut icon",type:"image/x-icon",href:d.a})),h(s.a,null),h(m,null,h(a.a,null,"Comming Soon"),h(c.a,null,h("a",{rel:"preload",href:"/"},"Back"))))}},BtgI:function(n,e,t){"use strict";e.a={black:"#333333",white:"#ffffff",primaryColor:"#FFD700",primaryHoverColor:"#cce5ff",secondaryColor:"#383d41",headingColor:"#FFFFFF",bodyColor:"#ffffff",linkColor:"#1F2AD5",NavBG:"transparent",NavBGSolid:"#290E59",menuHoverColor:"#1F2AD5"}},FYa8:function(n,e,t){"use strict";var r=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(t("q1tI"));e.HeadManagerContext=o.createContext(null)},Ff2n:function(n,e,t){"use strict";function r(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}t.d(e,"a",(function(){return r}))},GpbO:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comming",function(){return t("AME3")}])},"L+IS":function(n,e,t){"use strict";var r=t("wx14"),o=t("Ff2n"),i=t("q1tI"),a=t.n(i),c=t("vOnD"),s=a.a.createElement,u=c.d.h1.withConfig({displayName:"Heading__HeadingWrap",componentId:"frlqsk-0"})([""," ",""],(function(n){return n.UpperCase&&Object(c.c)({textTransform:"uppercase"})}),(function(n){return n.HeadingColor&&Object(c.c)({color:n.HeadingColor})}));e.a=function(n){var e=n.children,t=Object(o.a)(n,["children"]),i=["heading"];return t.className&&i.push(t.className),s(u,Object(r.a)({},t,{className:i.join(" ")}),e)}},T0f4:function(n,e){function t(e){return n.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},t(e)}n.exports=t},UMGi:function(n,e,t){"use strict";var r=t("wx14"),o=t("Ff2n"),i=t("q1tI"),a=t.n(i),c=t("vOnD"),s=a.a.createElement,u=c.d.img.withConfig({displayName:"Image__ImageWrapper",componentId:"sc-1u2koxj-0"})(["width:100%;height:auto;display:block;"]);e.a=function(n){var e=n.src,t=n.alt,i=Object(o.a)(n,["src","alt"]),a=["image"];return i.className&&a.push(i.className),s(u,Object(r.a)({src:e,alt:t},i,{className:a.join(" ")}))}},Xuae:function(n,e,t){"use strict";var r=t("/GRZ"),o=t("i2R6"),i=t("qXWd"),a=t("48fX"),c=t("tCBg"),s=t("T0f4"),u=t("mPvQ");function l(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=s(n);if(e){var o=s(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c(this,t)}}Object.defineProperty(e,"__esModule",{value:!0});var f=t("q1tI"),p=!1;e.default=function(){var n,e=new Set;function t(t){n=t.props.reduceComponentsToState(u(e),t.props),t.props.handleStateChange&&t.props.handleStateChange(n)}return function(c){a(u,c);var s=l(u);function u(n){var o;return r(this,u),o=s.call(this,n),p&&(e.add(i(o)),t(i(o))),o}return o(u,[{key:"componentDidMount",value:function(){e.add(this),t(this)}},{key:"componentDidUpdate",value:function(){t(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),t(this)}},{key:"render",value:function(){return null}}],[{key:"rewind",value:function(){var t=n;return n=void 0,e.clear(),t}}]),u}(f.Component)}},YFqc:function(n,e,t){n.exports=t("cTJO")},cTJO:function(n,e,t){"use strict";var r=t("/GRZ"),o=t("i2R6"),i=t("48fX"),a=t("tCBg"),c=t("T0f4");function s(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=c(n);if(e){var o=c(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return a(this,t)}}var u=t("AroE"),l=t("7KCV");e.__esModule=!0,e.default=void 0;var f,p=l(t("q1tI")),d=t("QmWs"),h=t("g/15"),m=u(t("nOHt"));function v(n){return n&&"object"===typeof n?(0,h.formatWithValidation)(n):n}var g=new Map,b=window.IntersectionObserver,y={};function w(){return f||(b?f=new b((function(n){n.forEach((function(n){if(g.has(n.target)){var e=g.get(n.target);(n.isIntersecting||n.intersectionRatio>0)&&(f.unobserve(n.target),g.delete(n.target),e())}}))}),{rootMargin:"200px"}):void 0)}var x=function(n){i(t,n);var e=s(t);function t(n){var o;return r(this,t),(o=e.call(this,n)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(n){var e=null,t=null,r=null;return function(o,i){if(r&&o===e&&i===t)return r;var a=n(o,i);return e=o,t=i,r=a,a}}((function(n,e){return{href:v(n),as:e?v(e):e}})),o.linkClicked=function(n){var e=n.currentTarget,t=e.nodeName,r=e.target;if("A"!==t||!(r&&"_self"!==r||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,c=i.as;if(function(n){var e=(0,d.parse)(n,!1,!0),t=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===t.protocol&&e.host===t.host}(a)){var s=window.location.pathname;a=(0,d.resolve)(s,a),c=c?(0,d.resolve)(s,c):a,n.preventDefault();var u=o.props.scroll;null==u&&(u=c.indexOf("#")<0),m.default[o.props.replace?"replace":"push"](a,c,{shallow:o.props.shallow}).then((function(n){n&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==n.prefetch,o}return o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var n=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),t=e.href,r=e.as,o=(0,d.resolve)(n,t);return[o,r?(0,d.resolve)(n,r):o]}},{key:"handleRef",value:function(n){var e=this;this.p&&b&&n&&n.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(n,e){var t=w();return t?(t.observe(n),g.set(n,e),function(){try{t.unobserve(n)}catch(e){console.error(e)}g.delete(n)}):function(){}}(n,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(n){if(this.p){var e=this.getPaths();m.default.prefetch(e[0],e[1],n).catch((function(n){0})),y[e.join("%")]=!0}}},{key:"render",value:function(){var n=this,e=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,o=t.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),a={ref:function(e){n.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),n.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||n.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),t}(p.Component);e.default=x},iSXs:function(n,e){n.exports="/_next/static/images/favicon-73d6e4ff455449bb4353917288d964ae.png"},kG2m:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(n,e,t){"use strict";var r=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(t("q1tI"));e.AmpStateContext=o.createContext({})},mPvQ:function(n,e,t){var r=t("5fIB"),o=t("rlHP"),i=t("kG2m");n.exports=function(n){return r(n)||o(n)||i()}},qXWd:function(n,e){n.exports=function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},rlHP:function(n,e){n.exports=function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}},sDmO:function(n,e,t){"use strict";var r,o,i,a=t("vOnD"),c=Object(a.b)(r||(o=['\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #bdc3c7;\nbackground: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); \nbackground: linear-gradient(to right, #2c3e50, #bdc3c7);\n\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  background: #000000;\n}\n\n::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  *:focus {\n    outline: none;\n  }\n\nhtml{\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n    scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: "SFUEurostile";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632470681564vlNGTuVGcM.TTF");\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: "SFUEurostileBold";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472400888ysqRyQc8dg.TTF");\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: "SFUEurostileNormal";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472419173Aj5Sh8Fx2d.TTF");\n  font-style: normal;\n  font-display: swap;\n}\n\nbody,html {\n    margin: 0px;\n}\nbody {\n  font-size: 16px;\n  line-height: 28px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: \'Poppins\', sans-serif;\n  color: ',";\n  overflow-x: hidden !important;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  background: #000000;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n\n#__next{\n  overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: 'SFUEurostileBold', sans-serif;\n    font-size: 48px;\n    line-height: 60px;\n    text-transform: uppercase;\n    font-weight: 700;\n    color: ",";\n}\n\np{\n    font-family: 'SFUEurostile', sans-serif;\n    margin: 0 0 15px 0;\n    color: #ffffff;\n    font-weight: 400;\n    font-size: 20px;\n}\n\na{\n    text-decoration: none;\n    color: ",";\n    font-family: 'SFUEurostile', sans-serif;\n  }\n  img{\n    max-width: 100%;\n  }\n\n\nsection{\n    position: relative;\n}\n\n.text-center{\n  text-align: center;\n}\n\nbutton, .btn{\n  display: inline-block;\n  width: 170px;\n  height: 60px;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  outline: none;\n}\n\n#container.visible{\n  display: none!important;\n  box-shadow: none;\n}\n"],i||(i=o.slice(0)),r=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(i)}}))),(function(n){return n.theme.bodyColor?n.theme.bodyColor:"#BEABDF"}),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.headingColor}));e.a=c},tCBg:function(n,e,t){var r=t("C+bE"),o=t("qXWd");n.exports=function(n,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(n):e}},wx14:function(n,e,t){"use strict";function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return r}))}},[["GpbO",0,1,2,3]]]);