(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/0+H":function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t("q1tI")),a=t("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return t||o&&(void 0!==a&&a)}n.isInAmpMode=i,n.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},"1PZr":function(e,n){e.exports="/_next/static/images/poster-f7e68e56ba10969642065293e74d47d7.webp"},"48fX":function(e,n,t){var r=t("qhzo");e.exports=function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}},"5fIB":function(e,n){e.exports=function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}},"8Kt/":function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t("q1tI")),a=r(t("Xuae")),i=t("lwAK"),l=t("FYa8"),s=t("/0+H");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[o.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function c(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===o.default.Fragment?e.concat(o.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}n.defaultHead=u;var f=["name","httpEquiv","charSet","itemProp"];function d(e,n){return e.reduce((function(e,n){var t=o.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(c,[]).reverse().concat(u(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":n.has(o.type)?a=!1:n.add(o.type);break;case"meta":for(var l=0,s=f.length;l<s;l++){var u=f[l];if(o.props.hasOwnProperty(u))if("charSet"===u)t.has(u)?a=!1:t.add(u);else{var c=o.props[u],d=r[u]||new Set;d.has(c)?a=!1:(d.add(c),r[u]=d)}}}return a}}()).reverse().map((function(e,n){var t=e.key||n;return o.default.cloneElement(e,{key:t})}))}var p=a.default();function h(e){var n=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(l.HeadManagerContext.Consumer,null,(function(t){return o.default.createElement(p,{reduceComponentsToState:d,handleStateChange:t,inAmpMode:s.isInAmpMode(e)},n)}))}))}h.rewind=p.rewind,n.default=h},BtgI:function(e,n,t){"use strict";n.a={black:"#333333",white:"#ffffff",primaryColor:"#FFD700",primaryHoverColor:"#cce5ff",secondaryColor:"#383d41",headingColor:"#FFFFFF",bodyColor:"#ffffff",linkColor:"#1F2AD5",NavBG:"transparent",NavBGSolid:"#290E59",menuHoverColor:"#1F2AD5"}},FYa8:function(e,n,t){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t("q1tI"));n.HeadManagerContext=o.createContext(null)},RNiq:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),a=t("8Kt/"),i=t.n(a),l=t("vOnD");function s(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=t("TOwV"),p=t("2mql"),h=t.n(p);function m(e,n){if(!e){var t=new Error("loadable: "+n);throw t.framesToPop=1,t.name="Invariant Violation",t}}var y=o.a.createContext();var b={initialChunks:{}},v="PENDING",g="RESOLVED",w="REJECTED";var x=function(e){var n=function(n){return o.a.createElement(y.Consumer,null,(function(t){return o.a.createElement(e,Object.assign({__chunkExtractor:t},n))}))};return e.displayName&&(n.displayName=e.displayName+"WithChunkExtractor"),n},k=function(e){return e};function _(e){var n=e.defaultResolveComponent,t=void 0===n?k:n,r=e.render,a=e.onLoad;function i(e,n){void 0===n&&(n={});var i=function(e){return"function"===typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),l={};function p(e){return n.cacheKey?n.cacheKey(e):i.resolve?i.resolve(e):"static"}function y(e,r,o){var a=n.resolveComponent?n.resolveComponent(e,r):t(e);if(n.resolveComponent&&!Object(d.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return h()(o,a,{preload:!0}),a}var k=function(e){var t,o;function d(t){var r;return(r=e.call(this,t)||this).state={result:null,error:null,loading:!0,cacheKey:p(t)},m(!t.__chunkExtractor||i.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),t.__chunkExtractor?!1===n.ssr?c(r):(i.requireAsync(t).catch((function(){return null})),r.loadSync(),t.__chunkExtractor.addChunk(i.chunkName(t)),c(r)):(!1!==n.ssr&&(i.isReady&&i.isReady(t)||i.chunkName&&b.initialChunks[i.chunkName(t)])&&r.loadSync(),r)}o=e,(t=d).prototype=Object.create(o.prototype),t.prototype.constructor=t,f(t,o),d.getDerivedStateFromProps=function(e,n){var t=p(e);return u({},n,{cacheKey:t,loading:n.loading||n.cacheKey!==t})};var h=d.prototype;return h.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===w&&this.setCache(),this.state.loading&&this.loadAsync()},h.componentDidUpdate=function(e,n){n.cacheKey!==this.state.cacheKey&&this.loadAsync()},h.componentWillUnmount=function(){this.mounted=!1},h.safeSetState=function(e,n){this.mounted&&this.setState(e,n)},h.getCacheKey=function(){return p(this.props)},h.getCache=function(){return l[this.getCacheKey()]},h.setCache=function(e){void 0===e&&(e=void 0),l[this.getCacheKey()]=e},h.triggerOnLoad=function(){var e=this;a&&setTimeout((function(){a(e.state.result,e.props)}))},h.loadSync=function(){if(this.state.loading)try{var e=y(i.requireSync(this.props),this.props,C);this.state.result=e,this.state.loading=!1}catch(n){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:i.resolve(this.props),chunkName:i.chunkName(this.props),error:n?n.message:n}),this.state.error=n}},h.loadAsync=function(){var e=this,n=this.resolveAsync();return n.then((function(n){var t=y(n,e.props,{Loadable:C});e.safeSetState({result:t,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(n){return e.safeSetState({error:n,loading:!1})})),n},h.resolveAsync=function(){var e=this,n=this.props,t=(n.__chunkExtractor,n.forwardedRef,s(n,["__chunkExtractor","forwardedRef"])),r=this.getCache();return r||((r=i.requireAsync(t)).status=v,this.setCache(r),r.then((function(){r.status=g}),(function(n){console.error("loadable-components: failed to asynchronously load component",{fileName:i.resolve(e.props),chunkName:i.chunkName(e.props),error:n?n.message:n}),r.status=w}))),r},h.render=function(){var e=this.props,t=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,s(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,l=i.error,c=i.loading,f=i.result;if(n.suspense&&(this.getCache()||this.loadAsync()).status===v)throw this.loadAsync();if(l)throw l;var d=o||n.fallback||null;return c?d:r({fallback:d,result:f,options:n,props:u({},a,{ref:t})})},d}(o.a.Component),_=x(k),C=o.a.forwardRef((function(e,n){return o.a.createElement(_,Object.assign({forwardedRef:n},e))}));return C.displayName="Loadable",C.preload=function(e){i.requireAsync(e)},C.load=function(e){return i.requireAsync(e)},C}return{loadable:i,lazy:function(e,n){return i(e,u({},n,{suspense:!0}))}}}var C=_({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var n=e.result,t=e.props;return o.a.createElement(n,t)}}),S=C.loadable,E=C.lazy,P=_({onLoad:function(e,n){e&&n.forwardedRef&&("function"===typeof n.forwardedRef?n.forwardedRef(e):n.forwardedRef.current=e)},render:function(e){var n=e.result,t=e.props;return t.children?t.children(n):null}}),O=P.loadable,R=P.lazy;var j=S;j.lib=O,E.lib=R;var A=j,F=t("X/SR"),N=t.n(F),T=t("BtgI"),q=t("sDmO"),D=t("1PZr"),M=t.n(D),z=o.a.createElement,I=(A((function(){return Promise.all([t.e(10),t.e(0),t.e(5),t.e(30)]).then(t.bind(null,"1+lv"))})),A((function(){return Promise.all([t.e(9),t.e(11),t.e(7),t.e(0),t.e(27)]).then(t.bind(null,"notH"))}))),K=A((function(){return Promise.all([t.e(0),t.e(34)]).then(t.bind(null,"Te6U"))})),B=A((function(){return Promise.all([t.e(0),t.e(32)]).then(t.bind(null,"wFeP"))})),U=A((function(){return Promise.all([t.e(0),t.e(3),t.e(28)]).then(t.bind(null,"dL3n"))})),L=A((function(){return Promise.all([t.e(0),t.e(5),t.e(25)]).then(t.bind(null,"Xz70"))})),X=A((function(){return Promise.all([t.e(0),t.e(31)]).then(t.bind(null,"8rHC"))})),H=A((function(){return Promise.all([t.e(0),t.e(22)]).then(t.bind(null,"rj7T"))})),G=A((function(){return Promise.all([t.e(0),t.e(5),t.e(3),t.e(23)]).then(t.bind(null,"jFQD"))})),W=A((function(){return Promise.all([t.e(0),t.e(5),t.e(3),t.e(24)]).then(t.bind(null,"rEK2"))})),Q=A((function(){return Promise.all([t.e(0),t.e(29)]).then(t.bind(null,"h/L+"))})),V=A((function(){return Promise.all([t.e(0),t.e(33)]).then(t.bind(null,"K8by"))})),J=A((function(){return Promise.all([t.e(0),t.e(26)]).then(t.bind(null,"5BYc"))})),Y=A((function(){return Promise.all([t.e(0),t.e(36)]).then(t.bind(null,"Kah3"))})),Z=A((function(){return Promise.all([t.e(10),t.e(0),t.e(5),t.e(37)]).then(t.bind(null,"QwI5"))})),$=A((function(){return Promise.all([t.e(12),t.e(0),t.e(35)]).then(t.bind(null,"tLmL"))})),ee=A((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"pPah"))}));n.default=function(){return Object(r.useEffect)((function(){!function(e,n,t){if(!e.snaptr){var r=e.snaptr=function(){r.handleRequest?r.handleRequest.apply(r,arguments):r.queue.push(arguments)};r.queue=[];var o,a="script";(o=n.createElement(a)).async=!0,o.src="https://sc-static.net/scevent.min.js";var i=n.getElementsByTagName(a)[0];i.parentNode.insertBefore(o,i)}}(window,document),snaptr("init","3e803d6c-4af7-4d86-b2b0-c100f8d226e9",{user_email:"__INSERT_USER_EMAIL__"}),snaptr("track","PAGE_VIEW")}),[]),z(l.a,{theme:T.a},z(i.a,null,z("title",null,"Welcome to PlanetSandbox | Planet Sandbox is a physics TPS NFT sandbox shooting game that allows players to build and own arenas to fight other players in different game modes using their own NFT weapons and accessories."),z("meta",{name:"Description",content:"Planet Sandbox is a physics TPS NFT sandbox shooting game that allows players to build and own arenas to fight other players in different game modes using their own NFT weapons and accessories."}),z("meta",{property:"og:url",content:"https://planetsandbox.io/"}),z("meta",{property:"og:type",content:"website"}),z("meta",{property:"og:image",content:M.a}),z("meta",{httpEquiv:"Content-Security-Policy",content:"upgrade-insecure-requests"}),z("meta",{name:"theme-color",content:"#280D57"}),z("link",{rel:"shortcut icon",type:"image/x-icon",sizes:"64x64",href:N.a}),z("link",{rel:"stylesheet",type:"text/css",charSet:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),z("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"})),z(q.a,null),z(I,null),z(K,null),z(U,null),z(L,null),z(G,null),z(B,null),z(W,null),z(X,null),z(H,null),z(Q,null),z(V,null),z(J,null),z(Y,null),z(ee,null),z(Z,null),z($,null))}},T0f4:function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},"X/SR":function(e,n){e.exports="/_next/static/images/favicon-67d01d729e7b813e3d76b27a1986a5db.svg"},Xuae:function(e,n,t){"use strict";var r=t("/GRZ"),o=t("i2R6"),a=t("qXWd"),i=t("48fX"),l=t("tCBg"),s=t("T0f4"),u=t("mPvQ");function c(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=s(e);if(n){var o=s(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return l(this,t)}}Object.defineProperty(n,"__esModule",{value:!0});var f=t("q1tI"),d=!1;n.default=function(){var e,n=new Set;function t(t){e=t.props.reduceComponentsToState(u(n),t.props),t.props.handleStateChange&&t.props.handleStateChange(e)}return function(l){i(u,l);var s=c(u);function u(e){var o;return r(this,u),o=s.call(this,e),d&&(n.add(a(o)),t(a(o))),o}return o(u,[{key:"componentDidMount",value:function(){n.add(this),t(this)}},{key:"componentDidUpdate",value:function(){t(this)}},{key:"componentWillUnmount",value:function(){n.delete(this),t(this)}},{key:"render",value:function(){return null}}],[{key:"rewind",value:function(){var t=e;return e=void 0,n.clear(),t}}]),u}(f.Component)}},kG2m:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,n,t){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t("q1tI"));n.AmpStateContext=o.createContext({})},mPvQ:function(e,n,t){var r=t("5fIB"),o=t("rlHP"),a=t("kG2m");e.exports=function(e){return r(e)||o(e)||a()}},qXWd:function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,n){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},sDmO:function(e,n,t){"use strict";var r,o,a,i=t("vOnD"),l=(t("6Cl6"),Object(i.b)(r||(o=['\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #bdc3c7;\nbackground: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); \nbackground: linear-gradient(to right, #2c3e50, #bdc3c7);\n\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  background: #000000;\n}\n\n::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  *:focus {\n    outline: none;\n  }\n\nhtml{\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n    scroll-behavior: smooth;\n}\n\n@font-face {\n  font-family: "SFUEurostile";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632470681564vlNGTuVGcM.TTF");\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: "SFUEurostileBold";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472400888ysqRyQc8dg.TTF");\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: "SFUEurostileNormal";\n  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472419173Aj5Sh8Fx2d.TTF");\n  font-style: normal;\n  font-display: swap;\n}\n\nbody,html {\n    margin: 0px;\n}\nbody {\n  font-size: 16px;\n  line-height: 28px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: \'Poppins\', sans-serif;\n  color: ',";\n  overflow-x: hidden !important;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  background: #000000;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n}\n\n#__next{\n  overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: 'SFUEurostileBold', sans-serif;\n    font-size: 48px;\n    line-height: 60px;\n    text-transform: uppercase;\n    font-weight: 700;\n    color: ",";\n}\n\np{\n    font-family: 'SFUEurostile', sans-serif;\n    margin: 0 0 15px 0;\n    color: #ffffff;\n    font-weight: 400;\n    font-size: 20px;\n}\n\nspan{\n  font-family: 'SFUEurostile', sans-serif;\n}\n\na{\n    text-decoration: none;\n    color: ",";\n    font-family: 'SFUEurostile', sans-serif;\n  }\n  img{\n    max-width: 100%;\n  }\n\n\nsection{\n    position: relative;\n}\n\n.text-center{\n  text-align: center;\n}\n\nbutton, .btn{\n  display: inline-block;\n  width: 170px;\n  height: 60px;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  outline: none;\n}\n\n#container.visible{\n  display: none!important;\n  box-shadow: none;\n}\n\n@media only screen and (max-width: 576px){\n  h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-size: 35px;\n    line-height: 35px;\n}\n}\n"],a||(a=o.slice(0)),r=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(a)}}))),(function(e){return e.theme.bodyColor?e.theme.bodyColor:"#BEABDF"}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.headingColor})));n.a=l},tCBg:function(e,n,t){var r=t("C+bE"),o=t("qXWd");e.exports=function(e,n){return!n||"object"!==r(n)&&"function"!==typeof n?o(e):n}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",1,2,0,4,6,3]]]);