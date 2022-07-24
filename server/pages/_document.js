"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 8049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lH": () => (/* binding */ NAV_SCROLL_HEIGHT),
/* harmony export */   "$r": () => (/* binding */ NAV_SCROLL_HEIGHT_MOBILE),
/* harmony export */   "nI": () => (/* binding */ NAV_HEIGHT),
/* harmony export */   "Iu": () => (/* binding */ NAV_DELAY),
/* harmony export */   "kM": () => (/* binding */ LOADER_DELAY),
/* harmony export */   "XV": () => (/* binding */ PROJECTS_GRID_LIMIT),
/* harmony export */   "vt": () => (/* binding */ GA_TRACKING_ID),
/* harmony export */   "Mw": () => (/* binding */ IS_PRODUCTION),
/* harmony export */   "nx": () => (/* binding */ KEY_CODES)
/* harmony export */ });
const NAV_SCROLL_HEIGHT = 90;
const NAV_SCROLL_HEIGHT_MOBILE = 70;
const NAV_HEIGHT = 90;
const NAV_DELAY = 1000;
const LOADER_DELAY = 2000;
const PROJECTS_GRID_LIMIT = 6;
const GA_TRACKING_ID = 'G-GBP7Y41Z1Q';
const IS_PRODUCTION = true;
const KEY_CODES = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_LEFT_IE11: 'Left',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_RIGHT_IE11: 'Right',
  ESCAPE: 'Escape',
  ESCAPE_IE11: 'Esc',
  TAB: 'Tab',
  SPACE: ' ',
  SPACE_IE11: 'Spacebar',
  ENTER: 'Enter'
};

/***/ }),

/***/ 450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9899);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8049);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0__.default {
  render() {
    const {
      isProduction
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {
      lang: "en",
      children: [isProduction && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("script", {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .GA_TRACKING_ID */ .vt}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("script", {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: {
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .GA_TRACKING_ID */ .vt}', {
                      page_path: window.location.pathname,
                    });
                  `
          }
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {})]
      })]
    });
  }

  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();
    const originalRenderPage = ctx.renderPage; // Check if in production

    const isProduction = true;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(App, _objectSpread({}, props)))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_0__.default.getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        isProduction,
        styles: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [initialProps.styles, sheet.getStyleElement()]
        })
      });
    } finally {
      sheet.seal();
    }
  }

}

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 2538:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 2208:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6044:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 6098:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [899], () => (__webpack_exec__(450)));
module.exports = __webpack_exports__;

})();