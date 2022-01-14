webpackHotUpdate(1,{

/***/ "./src/assets/images/footer/gate.png":
/*!*******************************************!*\
  !*** ./src/assets/images/footer/gate.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gate-d4920e44ee90f1980989962ff4922402.png";

/***/ }),

/***/ "./src/sections/Footer/index.js":
/*!**************************************!*\
  !*** ./src/sections/Footer/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _reusecore_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reusecore/List */ "./src/reusecore/List/index.js");
/* harmony import */ var _reusecore_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reusecore/Layout */ "./src/reusecore/Layout/index.js");
/* harmony import */ var _reusecore_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reusecore/Box */ "./src/reusecore/Box/index.js");
/* harmony import */ var _reusecore_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reusecore/Text */ "./src/reusecore/Text/index.js");
/* harmony import */ var _assets_data_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/data/footer */ "./src/assets/data/footer/index.js");
/* harmony import */ var _reusecore_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reusecore/Image */ "./src/reusecore/Image/index.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.style */ "./src/sections/Footer/footer.style.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_nav_pancake_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/nav/pancake.svg */ "./src/assets/images/nav/pancake.svg");
/* harmony import */ var _assets_images_nav_pancake_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_nav_pancake_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_footer_gate_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/images/footer/gate.png */ "./src/assets/images/footer/gate.png");
/* harmony import */ var _assets_images_footer_gate_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_footer_gate_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
var _this = undefined,
    _jsxFileName = "/Users/steven/Desktop/Working/PlanetSandbox/landing/src/sections/Footer/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















var Footer = function Footer() {
  var validateEmail = function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    usd: 0,
    percent: 0
  }),
      price = _useState2[0],
      setPrice = _useState2[1];

  var HandlerEmail = function HandlerEmail(event) {
    var email = event.target.value;

    if (validateEmail(email)) {
      setEmail("mailto:".concat(email));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_14___default()({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=0x36bfbb1d5b3c9b336f3d64976599b6020ca805f1&vs_currencies=usd&include_24hr_change=true'
    }).then(function (response) {
      setPrice({
        usd: response === null || response === void 0 ? void 0 : response.data['0x36bfbb1d5b3c9b336f3d64976599b6020ca805f1'].usd,
        percent: response === null || response === void 0 ? void 0 : response.data['0x36bfbb1d5b3c9b336f3d64976599b6020ca805f1'].usd_24h_change
      });
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return __jsx(_footer_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "footer-content-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "xl-4 lg-12 md-12 sm-12 xs-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "footer-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "footer-heading-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(_reusecore_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }), __jsx("a", {
    href: "mailto: admin@planetsandbox.io",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, "admin@planetsandbox.io")))), __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "xl-8 lg-12 md-12 sm-12 xs-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "footer-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "xl-3 lg-3 md-6 sm-6 xs-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "footer-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "Products"), __jsx(_reusecore_List__WEBPACK_IMPORTED_MODULE_3__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, _assets_data_footer__WEBPACK_IMPORTED_MODULE_7__["default"].products.map(function (product, index) {
    return __jsx(_reusecore_List__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: product.productLink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 27
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, product.productName)));
  }))), __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "xl-3 lg-3 md-6 sm-6 xs-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "footer-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, "Information"), __jsx(_reusecore_List__WEBPACK_IMPORTED_MODULE_3__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, _assets_data_footer__WEBPACK_IMPORTED_MODULE_7__["default"].information.map(function (info, index) {
    return __jsx(_reusecore_List__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: info.infoLink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: info.target,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    }, info.infoName)));
  }))), __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "xl-3 lg-3 md-6 sm-6 xs-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "footer-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, "Introduce"), __jsx(_reusecore_List__WEBPACK_IMPORTED_MODULE_3__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, _assets_data_footer__WEBPACK_IMPORTED_MODULE_7__["default"].documentation.map(function (document, index) {
    return __jsx(_reusecore_List__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }
    }, __jsx("a", {
      href: document.documentLink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 27
      }
    }, document.documentName));
  }))), __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "xl-3 lg-3 md-6 sm-6 xs-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "footer-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, "join our community"), __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "comnunity",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, __jsx(_reusecore_List__WEBPACK_IMPORTED_MODULE_3__["List"], {
    className: "footer-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 23
    }
  }, _assets_data_footer__WEBPACK_IMPORTED_MODULE_7__["default"].links1.map(function (link, index) {
    return __jsx(_reusecore_List__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 27
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 29
      }
    }, __jsx("a", {
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 31
      }
    }, __jsx(_reusecore_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
      src: link.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 33
      }
    }), " ", link.name)));
  })), __jsx(_reusecore_List__WEBPACK_IMPORTED_MODULE_3__["List"], {
    className: "footer-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 23
    }
  }, _assets_data_footer__WEBPACK_IMPORTED_MODULE_7__["default"].links2.map(function (link, index) {
    return __jsx(_reusecore_List__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 27
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 29
      }
    }, __jsx("a", {
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 31
      }
    }, __jsx(_reusecore_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
      src: link.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 33
      }
    }), " ", link.name)));
  })))))))), __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "priceExchange",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "price-headinng",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "PSB price"), __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, "$", price.usd), __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: (price === null || price === void 0 ? void 0 : price.percent) > 0 ? {
      color: 'rgb(94, 219, 74)'
    } : {
      color: 'red'
    },
    className: "percent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, price.percent > 0 ? __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__["FiArrowUpRight"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 38
    }
  }) : __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__["FiArrowDownRight"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 58
    }
  }), Number.parseFloat(price.percent).toFixed(2), "%")), __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "available",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "available-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, "Available on"), __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx("a", {
    target: "_blank",
    href: "//pancakeswap.finance/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, " ", __jsx(_reusecore_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _assets_images_nav_pancake_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }), __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }, "PancakeSwap")), __jsx("a", {
    target: "_blank",
    href: "//www.gate.io/trade/PSB_USDT",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, " ", __jsx(_reusecore_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _assets_images_footer_gate_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }), __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  }, "Gate.io"))))), __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, " ", "Copyright \xA9 2021 PlanetSandbox. All rights reserved."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=1.2b99cb670a57620a8959.hot-update.js.map