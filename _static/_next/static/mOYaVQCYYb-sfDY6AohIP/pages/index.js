(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/0+H":function(n,e,t){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(t("q1tI")),a=t("lwAK");function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.ampFirst,t=void 0!==e&&e,r=n.hybrid,o=void 0!==r&&r,a=n.hasQuery;return t||o&&(void 0!==a&&a)}e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},"48fX":function(n,e,t){var r=t("qhzo");n.exports=function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}},"5fIB":function(n,e){n.exports=function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}},"8Kt/":function(n,e,t){"use strict";var r=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(t("q1tI")),a=r(t("Xuae")),i=t("lwAK"),l=t("FYa8"),u=t("/0+H");function c(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return n||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(n,e){return"string"===typeof e||"number"===typeof e?n:e.type===o.default.Fragment?n.concat(o.default.Children.toArray(e.props.children).reduce((function(n,e){return"string"===typeof e||"number"===typeof e?n:n.concat(e)}),[])):n.concat(e)}e.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function d(n,e){return n.reduce((function(n,e){var t=o.default.Children.toArray(e.props.children);return n.concat(t)}),[]).reduce(s,[]).reverse().concat(c(e.inAmpMode)).filter(function(){var n=new Set,e=new Set,t=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);n.has(i)?a=!1:n.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var l=0,u=f.length;l<u;l++){var c=f[l];if(o.props.hasOwnProperty(c))if("charSet"===c)t.has(c)?a=!1:t.add(c);else{var s=o.props[c],d=r[c]||new Set;d.has(s)?a=!1:(d.add(s),r[c]=d)}}}return a}}()).reverse().map((function(n,e){var t=n.key||e;return o.default.cloneElement(n,{key:t})}))}var h=a.default();function p(n){var e=n.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(n){return o.default.createElement(l.HeadManagerContext.Consumer,null,(function(t){return o.default.createElement(h,{reduceComponentsToState:d,handleStateChange:t,inAmpMode:u.isInAmpMode(n)},e)}))}))}p.rewind=h.rewind,e.default=p},BtgI:function(n,e,t){"use strict";e.a={black:"#333333",white:"#ffffff",primaryColor:"#FFD700",primaryHoverColor:"#cce5ff",secondaryColor:"#383d41",headingColor:"#FFFFFF",bodyColor:"#ffffff",linkColor:"#1F2AD5",NavBG:"transparent",NavBGSolid:"#290E59",menuHoverColor:"#1F2AD5"}},FYa8:function(n,e,t){"use strict";var r=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(t("q1tI"));e.HeadManagerContext=o.createContext(null)},RNiq:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),o=t.n(r),a=t("8Kt/"),i=t.n(a),l=t("vOnD");function u(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}function c(){return(c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function s(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var d=t("TOwV"),h=t("2mql"),p=t.n(h);function m(n,e){if(!n){var t=new Error("loadable: "+e);throw t.framesToPop=1,t.name="Invariant Violation",t}}var y=o.a.createContext();var v={initialChunks:{}},b="PENDING",g="RESOLVED",w="REJECTED";var x=function(n){var e=function(e){return o.a.createElement(y.Consumer,null,(function(t){return o.a.createElement(n,Object.assign({__chunkExtractor:t},e))}))};return n.displayName&&(e.displayName=n.displayName+"WithChunkExtractor"),e},k=function(n){return n};function _(n){var e=n.defaultResolveComponent,t=void 0===e?k:e,r=n.render,a=n.onLoad;function i(n,e){void 0===e&&(e={});var i=function(n){return"function"===typeof n?{requireAsync:n,resolve:function(){},chunkName:function(){}}:n}(n),l={};function h(n){return e.cacheKey?e.cacheKey(n):i.resolve?i.resolve(n):"static"}function y(n,r,o){var a=e.resolveComponent?e.resolveComponent(n,r):t(n);if(e.resolveComponent&&!Object(d.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return p()(o,a,{preload:!0}),a}var k=function(n){var t,o;function d(t){var r;return(r=n.call(this,t)||this).state={result:null,error:null,loading:!0,cacheKey:h(t)},m(!t.__chunkExtractor||i.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),t.__chunkExtractor?!1===e.ssr?s(r):(i.requireAsync(t).catch((function(){return null})),r.loadSync(),t.__chunkExtractor.addChunk(i.chunkName(t)),s(r)):(!1!==e.ssr&&(i.isReady&&i.isReady(t)||i.chunkName&&v.initialChunks[i.chunkName(t)])&&r.loadSync(),r)}o=n,(t=d).prototype=Object.create(o.prototype),t.prototype.constructor=t,f(t,o),d.getDerivedStateFromProps=function(n,e){var t=h(n);return c({},e,{cacheKey:t,loading:e.loading||e.cacheKey!==t})};var p=d.prototype;return p.componentDidMount=function(){this.mounted=!0;var n=this.getCache();n&&n.status===w&&this.setCache(),this.state.loading&&this.loadAsync()},p.componentDidUpdate=function(n,e){e.cacheKey!==this.state.cacheKey&&this.loadAsync()},p.componentWillUnmount=function(){this.mounted=!1},p.safeSetState=function(n,e){this.mounted&&this.setState(n,e)},p.getCacheKey=function(){return h(this.props)},p.getCache=function(){return l[this.getCacheKey()]},p.setCache=function(n){void 0===n&&(n=void 0),l[this.getCacheKey()]=n},p.triggerOnLoad=function(){var n=this;a&&setTimeout((function(){a(n.state.result,n.props)}))},p.loadSync=function(){if(this.state.loading)try{var n=y(i.requireSync(this.props),this.props,C);this.state.result=n,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:i.resolve(this.props),chunkName:i.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},p.loadAsync=function(){var n=this,e=this.resolveAsync();return e.then((function(e){var t=y(e,n.props,{Loadable:C});n.safeSetState({result:t,loading:!1},(function(){return n.triggerOnLoad()}))})).catch((function(e){return n.safeSetState({error:e,loading:!1})})),e},p.resolveAsync=function(){var n=this,e=this.props,t=(e.__chunkExtractor,e.forwardedRef,u(e,["__chunkExtractor","forwardedRef"])),r=this.getCache();return r||((r=i.requireAsync(t)).status=b,this.setCache(r),r.then((function(){r.status=g}),(function(e){console.error("loadable-components: failed to asynchronously load component",{fileName:i.resolve(n.props),chunkName:i.chunkName(n.props),error:e?e.message:e}),r.status=w}))),r},p.render=function(){var n=this.props,t=n.forwardedRef,o=n.fallback,a=(n.__chunkExtractor,u(n,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,l=i.error,s=i.loading,f=i.result;if(e.suspense&&(this.getCache()||this.loadAsync()).status===b)throw this.loadAsync();if(l)throw l;var d=o||e.fallback||null;return s?d:r({fallback:d,result:f,options:e,props:c({},a,{ref:t})})},d}(o.a.Component),_=x(k),C=o.a.forwardRef((function(n,e){return o.a.createElement(_,Object.assign({forwardedRef:e},n))}));return C.displayName="Loadable",C.preload=function(n){i.requireAsync(n)},C.load=function(n){return i.requireAsync(n)},C}return{loadable:i,lazy:function(n,e){return i(n,c({},e,{suspense:!0}))}}}var C=_({defaultResolveComponent:function(n){return n.__esModule?n.default:n.default||n},render:function(n){var e=n.result,t=n.props;return o.a.createElement(e,t)}}),S=C.loadable,E=C.lazy,P=_({onLoad:function(n,e){n&&e.forwardedRef&&("function"===typeof e.forwardedRef?e.forwardedRef(n):e.forwardedRef.current=n)},render:function(n){var e=n.result,t=n.props;return t.children?t.children(e):null}}),O=P.loadable,A=P.lazy;var j=S;j.lib=O,E.lib=A;var R=j,F=t("X/SR"),q=t.n(F),N=t("BtgI"),T=t("sDmO"),D=o.a.createElement,M=(R((function(){return Promise.all([t.e(9),t.e(0),t.e(3),t.e(30)]).then(t.bind(null,"1+lv"))})),R((function(){return Promise.all([t.e(8),t.e(11),t.e(7),t.e(0),t.e(28)]).then(t.bind(null,"notH"))}))),z=R((function(){return Promise.all([t.e(0),t.e(33)]).then(t.bind(null,"Te6U"))})),K=R((function(){return Promise.all([t.e(0),t.e(3),t.e(35)]).then(t.bind(null,"wFeP"))})),I=R((function(){return Promise.all([t.e(0),t.e(4),t.e(27)]).then(t.bind(null,"dL3n"))})),B=R((function(){return Promise.all([t.e(0),t.e(3),t.e(25)]).then(t.bind(null,"Xz70"))})),U=R((function(){return Promise.all([t.e(0),t.e(3),t.e(31)]).then(t.bind(null,"8rHC"))})),X=R((function(){return Promise.all([t.e(0),t.e(22)]).then(t.bind(null,"rj7T"))})),H=R((function(){return Promise.all([t.e(0),t.e(3),t.e(4),t.e(23)]).then(t.bind(null,"jFQD"))})),L=R((function(){return Promise.all([t.e(0),t.e(3),t.e(4),t.e(24)]).then(t.bind(null,"rEK2"))})),G=R((function(){return Promise.all([t.e(0),t.e(29)]).then(t.bind(null,"h/L+"))})),Q=R((function(){return Promise.all([t.e(0),t.e(32)]).then(t.bind(null,"K8by"))})),W=R((function(){return Promise.all([t.e(0),t.e(26)]).then(t.bind(null,"5BYc"))})),V=R((function(){return Promise.all([t.e(0),t.e(36)]).then(t.bind(null,"Kah3"))})),J=R((function(){return Promise.all([t.e(9),t.e(0),t.e(3),t.e(37)]).then(t.bind(null,"QwI5"))})),Y=R((function(){return Promise.all([t.e(12),t.e(0),t.e(34)]).then(t.bind(null,"tLmL"))})),$=R((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"pPah"))}));e.default=function(){return D(l.a,{theme:N.a},D(i.a,null,D("title",null,"PlanetSandbox"),D("meta",{name:"Description",content:"Planet Sandbox is also a multiplayer TPS NFT GAME that lets user engaging in the combat arena and profit from battle"}),D("meta",{httpEquiv:"Content-Security-Policy",content:"upgrade-insecure-requests"}),D("meta",{name:"theme-color",content:"#280D57"}),D("link",{rel:"shortcut icon",type:"image/x-icon",sizes:"64x64",href:q.a}),D("link",{rel:"stylesheet",type:"text/css",charSet:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),D("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"})),D(T.a,null),D(M,null),D(z,null),D(I,null),D(B,null),D(H,null),D(K,null),D(L,null),D(U,null),D(X,null),D(G,null),D(Q,null),D(W,null),D(V,null),D($,null),D(J,null),D(Y,null))}},T0f4:function(n,e){function t(e){return n.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},t(e)}n.exports=t},"X/SR":function(n,e){n.exports="/_next/static/images/favicon-67d01d729e7b813e3d76b27a1986a5db.svg"},Xuae:function(n,e,t){"use strict";var r=t("/GRZ"),o=t("i2R6"),a=t("qXWd"),i=t("48fX"),l=t("tCBg"),u=t("T0f4"),c=t("mPvQ");function s(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=u(n);if(e){var o=u(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return l(this,t)}}Object.defineProperty(e,"__esModule",{value:!0});var f=t("q1tI"),d=!1;e.default=function(){var n,e=new Set;function t(t){n=t.props.reduceComponentsToState(c(e),t.props),t.props.handleStateChange&&t.props.handleStateChange(n)}return function(l){i(c,l);var u=s(c);function c(n){var o;return r(this,c),o=u.call(this,n),d&&(e.add(a(o)),t(a(o))),o}return o(c,[{key:"componentDidMount",value:function(){e.add(this),t(this)}},{key:"componentDidUpdate",value:function(){t(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),t(this)}},{key:"render",value:function(){return null}}],[{key:"rewind",value:function(){var t=n;return n=void 0,e.clear(),t}}]),c}(f.Component)}},kG2m:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(n,e,t){"use strict";var r=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(t("q1tI"));e.AmpStateContext=o.createContext({})},mPvQ:function(n,e,t){var r=t("5fIB"),o=t("rlHP"),a=t("kG2m");n.exports=function(n){return r(n)||o(n)||a()}},qXWd:function(n,e){n.exports=function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},rlHP:function(n,e){n.exports=function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}},sDmO:function(n,e,t){"use strict";var r,o,a,i=t("vOnD"),l=(t("6Cl6"),Object(i.b)(r||(o=['\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #bdc3c7;\nbackground: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); \nbackground: linear-gradient(to right, #2c3e50, #bdc3c7);\n\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  background: #000000;\n}\n\n::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  *:focus {\n    outline: none;\n  }\n\nhtml{\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n    scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: "SFUEurostile";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632470681564vlNGTuVGcM.TTF");\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: "SFUEurostileBold";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472400888ysqRyQc8dg.TTF");\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: "SFUEurostileNormal";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472419173Aj5Sh8Fx2d.TTF");\n  font-style: normal;\n  font-display: swap;\n}\n\nbody,html {\n    margin: 0px;\n}\nbody {\n  font-size: 16px;\n  line-height: 28px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: \'Poppins\', sans-serif;\n  color: ',";\n  overflow-x: hidden !important;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  background: #000000;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n\n#__next{\n  overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: 'SFUEurostileBold', sans-serif;\n    font-size: 48px;\n    line-height: 60px;\n    text-transform: uppercase;\n    font-weight: 700;\n    color: ",";\n}\n\np{\n    font-family: 'SFUEurostile', sans-serif;\n    margin: 0 0 15px 0;\n    color: #ffffff;\n    font-weight: 400;\n    font-size: 20px;\n}\n\nspan{\n  font-family: 'SFUEurostile', sans-serif;\n}\n\na{\n    text-decoration: none;\n    color: ",";\n    font-family: 'SFUEurostile', sans-serif;\n  }\n  img{\n    max-width: 100%;\n  }\n\n\nsection{\n    position: relative;\n}\n\n.text-center{\n  text-align: center;\n}\n\nbutton, .btn{\n  display: inline-block;\n  width: 170px;\n  height: 60px;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  outline: none;\n}\n\n#container.visible{\n  display: none!important;\n  box-shadow: none;\n}\n\n@media only screen and (max-width: 576px){\n  h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-size: 35px;\n    line-height: 35px;\n}\n}\n"],a||(a=o.slice(0)),r=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}}))),(function(n){return n.theme.bodyColor?n.theme.bodyColor:"#BEABDF"}),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.headingColor})));e.a=l},tCBg:function(n,e,t){var r=t("C+bE"),o=t("qXWd");n.exports=function(n,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(n):e}},vlRD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",1,2,0,5,6,4]]]);