webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/assets/theme/index.js":
/*!***********************************!*\
  !*** ./src/assets/theme/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject;


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #bdc3c7;\nbackground: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); \nbackground: linear-gradient(to right, #2c3e50, #bdc3c7);\n\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  background: #000000;\n}\n\n::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  *:focus {\n    outline: none;\n  }\n\nhtml{\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n    scroll-behavior: smooth;\n}\n\nbody,html {\n    margin: 0px;\n}\nbody {\n  font-size: 16px;\n  line-height: 28px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: 'Poppins', sans-serif;\n  color: ", ";\n  overflow-x: hidden !important;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n\n    background: linear-gradient(133.84deg, #333333 -16.04%, #1A1A1A 7.99%, #393939 35.36%, #1A1A1A 62.06%, #262626 87.42%, #4E4E4E 112.12%);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center center;\n}\n\n#__next{\n  overflow-x: hidden;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    color: ", ";\n    font-family: 'Goma Block', sans-serif;\n    font-size: 48px;\n    line-height: 48px;\n    text-transform: uppercase;\n    font-weight: 400;\n}\n\np{\n    font-family: 'Product Sans', sans-serif;\n    margin: 0 0 15px 0;\n    color: #ffffff;\n    font-weight: 400;\n    font-size: 20px;\n}\n\na{\n    text-decoration: none;\n    color: ", ";\n  }\n  img{\n    max-width: 100%;\n  }\n\n\nsection{\n    position: relative;\n}\n\n.text-center{\n  text-align: center;\n}\n\nbutton, .btn{\n  display: inline-block;\n  width: 170px;\n  height: 60px;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  outline: none;\n}\n\n#container.visible{\n  display: none!important;\n  box-shadow: none;\n}\n"])), function (props) {
  return props.theme.bodyColor ? props.theme.bodyColor : '#BEABDF';
}, function (props) {
  return props.theme.headingColor ? props.theme.headingColor : '#FFFFFF';
}, function (props) {
  return props.theme.headingColor;
});
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./src/sections/Introduce/introduce.style.js":
/*!***************************************************!*\
  !*** ./src/sections/Introduce/introduce.style.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_images_introduce_backgroundVideo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/introduce/backgroundVideo.png */ "./src/assets/images/introduce/backgroundVideo.png");
/* harmony import */ var _assets_images_introduce_backgroundVideo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_introduce_backgroundVideo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_introduce_thumbnailVideo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/introduce/thumbnailVideo.jpg */ "./src/assets/images/introduce/thumbnailVideo.jpg");
/* harmony import */ var _assets_images_introduce_thumbnailVideo_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_introduce_thumbnailVideo_jpg__WEBPACK_IMPORTED_MODULE_2__);



var root = {
  height_background: '830px'
};
var IntroduceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "introducestyle__IntroduceWrapper",
  componentId: "sc-1ldblep-0"
})(["padding-top:60px;padding-bottom:60px;background:linear-gradient(133.84deg,#4E4E4E -16.04%,#333333 9.33%,#1A1A1A 32.02%,#1A1A1A 62.06%,#262626 87.42%,#4E4E4E 112.12%);.introduce{width:97%;margin-left:3%;display:flex;.introduce-content{margin-top:109px;img{width:99px;margin-bottom:30px;}p{font-size:20px;padding-right:60px;font-weight:400;line-height:33.6px;}}.introduce-video{flex:160%;background-position:center;background-size:cover;background-repeat:no-repeat;.video-wrapper{position:relative;top:50%;transform:translateY(-50%);div{.plyr{width:868px;.plyr__poster{background-image:url(", ")!important;background-position:right center;}}}}p{color:#ffffff;text-transform:uppercase;font-family:'Goma Block',sans-serif;font-weight:400;font-size:24px;margin-top:23px;}}}@media only screen and (max-width:1200px){.introduce{.introduce-video{.video-wrapper{div{.plyr{width:400px;}}}}}}@media only screen and (max-width:975px){padding-bottom:0;.introduce{flex-direction:column;margin:auto;.introduce-content{margin-top:0;.heading{text-align:center;}p{padding:5%;}}.introduce-video{flex:100%;height:400px;.video-wrapper{margin-top:0;right:0;div{width:100%;margin:0;.plyr{width:100%;}}}p{display:none;}}}}@media only screen and (max-width:575px){.introduce{.introduce-content{img{margin:auto;}p{font-size:20px;}}}}"], _assets_images_introduce_thumbnailVideo_jpg__WEBPACK_IMPORTED_MODULE_2___default.a);
/* harmony default export */ __webpack_exports__["default"] = (IntroduceWrapper);

/***/ })

})
//# sourceMappingURL=index.js.37f0823ce65a48881084.hot-update.js.map