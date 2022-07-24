"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./src/styles/transitions.js
 // https://reactcommunity.org/react-transition-group/css-transition

const TransitionStyles = (0,external_styled_components_.css)([".fadeup-enter{opacity:0.01;transform:translateY(20px);transition:opacity 300ms ", ",transform 300ms ", ";}.fadeup-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms ", ",transform 300ms ", ";}.fadedown-enter{opacity:0.01;transform:translateY(-20px);transition:opacity 300ms ", ",transform 300ms var(--easing);}.fadedown-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms ", ",transform 300ms ", ";}.fade-enter{opacity:0;}.fade-enter-active{opacity:1;transition:opacity 300ms ", ";}.fade-exit{opacity:1;}.fade-exit-active{opacity:0;transition:opacity 300ms ", ";}"], props => props.theme.transitions.easing, props => props.theme.transitions.easing, props => props.theme.transitions.easing, props => props.theme.transitions.easing, props => props.theme.transitions.easing, props => props.theme.transitions.easing, props => props.theme.transitions.easing, props => props.theme.transitions.easing, props => props.theme.transitions.easing);
;// CONCATENATED MODULE: ./src/styles/globals.js


/* harmony default export */ const globals = ((0,external_styled_components_.createGlobalStyle)(["*{border:0;box-sizing:inherit;-webkit-font-smoothing:auto;font-weight:inherit;margin:0;outline:0;padding:0;text-decoration:none;text-rendering:optimizeLegibility;-webkit-appearance:none;-moz-appearance:none;}*,*:before,*:after{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit;}html{box-sizing:border-box;display:flex;min-height:100%;width:100%;box-sizing:border-box;font-size:62.5%;line-height:1.5;color:", ";padding:0;margin:0;-webkit-font-smoothing:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family:", "}@media (min-width:1600px){html{font-size:70%;}}body{box-sizing:border-box;background-color:", ";width:100%;height:100%;font-weight:400;overscroll-behavior-y:none;-webkit-overflow-scrolling:touch;&.hidden{overflow:hidden;}&.blur{overflow:hidden;header{background-color:transparent;}#content > *{filter:blur(5px) brightness(0.7);transition:", ";pointer-events:none;user-select:none;}}}#root{height:100%;width:100%;}p,a,b{font-size:", ";}a{color:currentColor;text-decoration:none;display:inline-block;}a:hover{cursor:pointer;}ul{list-style:none}", ";"], props => props.theme.text.default, props => props.theme.fontFamily.fontSans, props => props.theme.bg.default, props => props.theme.transitions.defualt, props => props.theme.fontSize.md, TransitionStyles));
// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(5877);
;// CONCATENATED MODULE: ./src/styles/mixins.js


const mixins_button = (0,external_styled_components_.css)(["color:", ";background-color:transparent;border:1px solid ", ";border-radius:", ";font-size:", ");font-family:", ";line-height:1;text-decoration:none;cursor:pointer;transition:", " padding:1.25rem 1.75rem;&:hover,&:focus,&:active{background-color:", ";outline:none;}&:after{display:none !important;}"], props => props.theme.brand.primary, props => props.theme.brand.primary, props => props.theme.borderRadius, props => props.theme.fontSize.sm, props => props.theme.fontFamily.fontMono, props => props.theme.transitions.default, props => (0,utils/* hexa */.j)(props.theme.brand.primary, 0.1));
const mixins = {
  flexCenter: (0,external_styled_components_.css)(["display:flex;justify-content:center;align-items:center;"]),
  flexBetween: (0,external_styled_components_.css)(["display:flex;justify-content:space-between;align-items:center;"]),
  link: (0,external_styled_components_.css)(["display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:", ";cursor:pointer;&:hover,&:active,&:focus{color:", ";outline:0;}"], props => props.theme.transitions.default, props => props.theme.brand.primary),
  inlineLink: (0,external_styled_components_.css)(["display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:", ";cursor:pointer;color:", ";&:hover,&:focus,&:active{color:", ";outline:0;&:after{width:100%;}& > *{color:", " !important;transition:", ";}}&:after{content:'';display:block;width:0;height:2px;position:relative;top:0.1em;background-color:", ";transition:", ";opacity:0.5;}"], props => props.theme.transitions.default, props => props.theme.brand.primary, props => props.theme.brand.primary, props => props.theme.brand.primary, props => props.theme.transitions.default, props => props.theme.brand.primary, props => props.theme.transitions.default),
  button: mixins_button,
  smallButton: (0,external_styled_components_.css)(["color:", ";background-color:transparent;border:2px solid ", ";border-radius:", ";padding:0.75rem 1.5rem;font-size:", ";font-family:", " line-height:1;text-decoration:none;cursor:pointer;transition:", ";&:hover,&:focus,&:active{background-color:", ";}&:after{display:none !important;}"], props => props.theme.brand.primary, props => props.theme.brand.primary, props => props.theme.borderRadiusButton, props => props.theme.fontSize.xs, props => props.theme.fontFamily.fontMono, props => props.theme.transitions.default, props => (0,utils/* hexa */.j)(props.theme.brand.primary, 0.1)),
  bigButton: (0,external_styled_components_.css)(["color:", ";background-color:transparent;border:2px solid ", ";border-radius:", ";padding:1.25rem 1.75rem;font-size:", ";font-family:", ";line-height:1;text-decoration:none;cursor:pointer;transition:", ";&:hover,&:focus,&:active{background-color:", ";}&:after{display:none !important;}"], props => props.theme.brand.primary, props => props.theme.brand.primary, props => props.theme.borderRadiusButton, props => props.theme.fontSize.sm, props => props.theme.fontFamily.fontMono, props => props.theme.transitions.default, props => (0,utils/* hexa */.j)(props.theme.brand.primary, 0.1)),
  boxShadow: (0,external_styled_components_.css)(["box-shadow:", ";transition:", ";&:hover,&:focus{box-shadow:", ";}"], props => props.theme.shadows.default, props => props.theme.transitions.default, props => props.theme.shadows.medium),
  fancyList: (0,external_styled_components_.css)(["padding:0;margin:0;list-style:none;font-size:", ";li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:'\u25B9';position:absolute;left:0;color:", ";}}"], props => props.theme.fontSize.lg, props => props.theme.brand.primary)
};
/* harmony default export */ const styles_mixins = (mixins);
;// CONCATENATED MODULE: ./src/themes/common.js

/* harmony default export */ const common = ({
  borderRadius: '12px',
  borderRadiusButton: '2.375rem',
  hamburgerWidth: '3rem',
  fontFamily: {
    fontSans: 'Open Sans, -apple-system, BlinkMacSystemFont,Segoe UI, Helvetica, Arial',
    fontMono: 'Space Mono, SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace'
  },
  brand: {
    primary: '#0693E3',
    secondary: '#0693E3',
    accent: '#5FC921'
  },
  fontSize: {
    xxs: '0.9rem',
    xs: '1.1rem',
    sm: '1.3rem',
    md: '1.4rem',
    lg: '1.8rem',
    xl: '2.2rem',
    xxl: '2.6rem'
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '1080px',
    xl: '1200px'
  },
  fontw: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700
  },
  transitions: {
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    default: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    hamBefore: 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in',
    hamBeforeActive: 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s',
    hamAfter: 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    hamAfterActive: 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
  },
  mixins: styles_mixins
});
;// CONCATENATED MODULE: ./src/themes/dark.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const lightTheme = _objectSpread(_objectSpread({}, common), {}, {
  bg: {
    default: '#120e26',
    defaultLight: '#1a1336',
    reverse: '#F4F4F4'
  },
  text: {
    default: '#F4F4F4',
    reverse: '#0A1A2F',
    accent: '#a3a8c3'
  },
  shadows: {
    default: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
    small: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
    medium: '0 20px 30px -15px rgba(2,12,27, 0.7)',
    large: '0 30px 60px rgba(0, 0, 0, 0.12) '
  }
});

/* harmony default export */ const dark = (lightTheme);
// EXTERNAL MODULE: ./src/lib/gtag.js
var gtag = __webpack_require__(6593);
// EXTERNAL MODULE: ./src/components/index.js + 21 modules
var components = __webpack_require__(9178);
;// CONCATENATED MODULE: ./src/layouts/styles.js

const MainContainer = external_styled_components_default().main.withConfig({
  displayName: "styles__MainContainer",
  componentId: "sc-1gwi26v-0"
})(["display:flex;align-items:center;flex-direction:column;min-height:100vh;margin:0 auto;width:100%;max-width:1600px;min-height:100vh;padding:200px 150px;@media (max-width:", "){padding:200px 100px;}@media (max-width:", "){padding:150px 50px;}@media (max-width:", "){padding:125px 25px;}&.fillHeight{padding:0 200px;@media (max-width:", "){padding:0 100px;}@media (max-width:", "){padding:0 50px;}@media (max-width:", "){padding:0 25px;}}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SkipToContentLink = external_styled_components_default().a.withConfig({
  displayName: "styles__SkipToContentLink",
  componentId: "sc-1gwi26v-1"
})(["position:absolute;top:auto;left:-999px;width:1px;height:1px;overflow:hidden;z-index:-99;&:focus,&:active{top:0;left:0;width:auto;height:auto;padding:18px 23px;outline:0;border-radius:", ";background-color:", ";color:", ";font-family:", ";font-size:", ";line-height:1;text-decoration:none;cursor:pointer;overflow:auto;transition:", ";z-index:99;}"], props => props.theme.borderRadius, props => props.theme.bg.default, props => props.theme.text.default, props => props.theme.fontFamily.fontMono, props => props.theme.fontSize.sm, props => props.theme.transitions.default);
const StyledFooter = external_styled_components_default().footer.withConfig({
  displayName: "styles__StyledFooter",
  componentId: "sc-1gwi26v-2"
})(["", ";flex-direction:column;height:auto;min-height:70px;padding:15px;text-align:center;"], ({
  theme
}) => theme.mixins.flexCenter);
const StyledSocialLinks = external_styled_components_default().div.withConfig({
  displayName: "styles__StyledSocialLinks",
  componentId: "sc-1gwi26v-3"
})(["display:none;@media (max-width:", "){display:block;width:100%;max-width:270px;margin:0 auto 10px;color:", ";}ul{", ";padding:0;margin:0;list-style:none;a{padding:10px;svg{fill:", ";width:20px;height:20px;}}}"], props => props.theme.breakpoints.md, props => props.theme.text.accent, ({
  theme
}) => theme.mixins.flexBetween, props => props.theme.text.accent);
const StyledMadeWith = external_styled_components_default().div.withConfig({
  displayName: "styles__StyledMadeWith",
  componentId: "sc-1gwi26v-4"
})(["p{color:", ";font-family:", ";font-size:", ";line-height:1;}"], props => props.theme.text.accent, props => props.theme.fontFamily.fontMono, props => props.theme.fontSize.sm);
const StyledCredit = external_styled_components_default().div.withConfig({
  displayName: "styles__StyledCredit",
  componentId: "sc-1gwi26v-5"
})(["color:", ";font-family:", ";font-size:", ";line-height:1;a{font-size:", ";padding:10px;}.github-stats{margin-top:10px;& > span{display:inline-flex;align-items:center;margin:0 7px;}svg{display:inline-block;width:auto;height:15px;margin-right:5px;}}"], props => props.theme.text.accent, props => props.theme.fontFamily.fontMono, props => props.theme.fontSize.xxs, props => props.theme.fontSize.xxs);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/layouts/main.js




const Main = ({
  id,
  children,
  className
}) => /*#__PURE__*/jsx_runtime_.jsx(MainContainer, {
  id: id,
  className: className,
  children: children
});

/* harmony default export */ const main = (Main);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/layouts/base.js
/* eslint-disable max-len */





const BaseLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "main",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Hamzat Victor | Frontend Developer"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "manifest",
        href: "/manifest.json"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#181818"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#ffffff"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      }, "viewport"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:site",
        content: "@victorFiery"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: "Hamzat Victor | Frontend Developer"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "Hamzat Victor | Frontend Developer"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:locale",
        content: "en"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: "https://code-victor.github.io"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Hello! I'm Junior, a Software Developer based in Buenos Aires, Argentina. I enjoy creating beautiful and reliable applications for internet and phones. My goal is to always build scalable products and performant experiences."
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "keywords",
        content: "Developer, Javascript, Freelancer, React, Redux Toolkit, stitches.js, Flutter Developer, JS Developer, React Developer"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "https://code-victor.github.io/avatar.jpeg"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:image",
        content: "https://code-victor.github.io/avatar.jpeg"
      })]
    }), children]
  });
};

/* harmony default export */ const base = (BaseLayout);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@11.1.4_react-dom@17.0.0+react@17.0.0/node_modules/next/link.js
var next_link = __webpack_require__(7193);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(3810);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__(9000);
// EXTERNAL MODULE: ./src/lib/constants.js
var constants = __webpack_require__(8049);
// EXTERNAL MODULE: ./src/hooks/index.js + 3 modules
var hooks = __webpack_require__(7981);
// EXTERNAL MODULE: ./src/components/Icons/index.js + 15 modules
var Icons = __webpack_require__(1689);
;// CONCATENATED MODULE: ./src/layouts/navbar/styles.js


const StyledHeader = external_styled_components_default().header.withConfig({
  displayName: "styles__StyledHeader",
  componentId: "sc-14coaba-0"
})(["", ";position:fixed;top:0;z-index:11;padding:0px 50px;width:100%;height:", "px;background-color:", ";filter:none !important;pointer-events:auto !important;user-select:auto !important;transition:", ";", ";", ";@media (max-width:", "){padding:0 40px;}@media (max-width:", "){padding:0 25px;}"], ({
  theme
}) => theme.mixins.flexBetween, constants/* NAV_HEIGHT */.nI, props => props.theme.bg.default, props => props.theme.transitions.default, props => props.scrollDirection === 'up' && !props.scrolledToTop && (0,external_styled_components_.css)(["height:", "px;transform:translateY(0px);box-shadow:", ";@media (max-width:", "){height:", "px;}"], constants/* NAV_SCROLL_HEIGHT */.lH, props.theme.shadows.default, props.theme.breakpoints.sm, constants/* NAV_SCROLL_HEIGHT_MOBILE */.$r), props => props.scrollDirection === 'down' && !props.scrolledToTop && (0,external_styled_components_.css)(["height:", ";transform:translateY(calc(", "px * -1));box-shadow:", ";@media (max-width:", "){height:", "px;}"], constants/* NAV_SCROLL_HEIGHT */.lH, constants/* NAV_SCROLL_HEIGHT */.lH, props.theme.shadows.default, props.theme.breakpoints.sm, constants/* NAV_SCROLL_HEIGHT_MOBILE */.$r), props => props.theme.breakpoints.lg, props => props.theme.breakpoints.sm);
const StyledNav = external_styled_components_default().nav.withConfig({
  displayName: "styles__StyledNav",
  componentId: "sc-14coaba-1"
})(["", ";position:relative;width:100%;color:", ";font-family:", ";counter-reset:item 0;z-index:12;.logo{", ";cursor:pointer;a{color:", ";width:42px;height:42px;&:hover,&:focus{svg{fill:white;}}svg{fill:none;transition:", ";user-select:none;}}}"], ({
  theme
}) => theme.mixins.flexBetween, props => props.theme.text.default, props => props.theme.fontFamily.fontMono, ({
  theme
}) => theme.mixins.flexCenter, props => props.theme.text.default, props => props.theme.transitions.default);
const StyledLinks = external_styled_components_default().div.withConfig({
  displayName: "styles__StyledLinks",
  componentId: "sc-14coaba-2"
})(["display:flex;align-items:center;@media (max-width:", "){display:none;}ol{", ";padding:0;margin:0;list-style:none;li{margin:0 5px;position:relative;counter-increment:item 1;font-size:", ";a{padding:10px;&:hover,&:focus,&:active{color:", ";outline:0;&:after{width:100%;}& > *{color:", " !important;transition:", ";}}&:after{content:'';display:block;width:0;height:2px;position:relative;top:0.2em;background-color:", ";transition:", ";opacity:0.5;}&:before{content:'0' counter(item) '.';margin-right:5px;color:", ";font-size:", ";text-align:right;}}}}.resume-button{", ";margin-left:15px;font-size:", ";}"], props => props.theme.breakpoints.md, ({
  theme
}) => theme.mixins.flexBetween, props => props.theme.fontSize.xs, props => props.theme.brand.primary, props => props.theme.brand.primary, props => props.theme.transitions.default, props => props.theme.brand.primary, props => props.theme.transitions.default, props => props.theme.brand.primary, props => props.theme.fontSize.xs, ({
  theme
}) => theme.mixins.smallButton, props => props.theme.fontSize.sm);
;// CONCATENATED MODULE: ./src/layouts/navbar/index.js







 // import * as gtag from '@lib/gtag';





const Nav = ({
  isHome
}) => {
  const {
    0: isMounted,
    1: setIsMounted
  } = (0,external_react_.useState)(!isHome);
  const scrollDirection = (0,hooks/* useScrollDirection */.C7)('down');
  const {
    0: scrolledToTop,
    1: setScrolledToTop
  } = (0,external_react_.useState)(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  const {
    navLinks
  } = config/* default */.Z;
  (0,external_react_.useEffect)(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const timeout = isHome ? constants/* LOADER_DELAY */.kM : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : ''; //   const handleClickResume = () => {
  //     if (IS_PRODUCTION) {
  //       gtag.event({
  //         action: 'click_resume',
  //         category: 'resume',
  //         label: 'user clicked on resume button',
  //       });
  //     }
  //     window.open('/resume.pdf', '_blank');
  //   };

  return /*#__PURE__*/jsx_runtime_.jsx(StyledHeader, {
    scrollDirection: scrollDirection,
    scrolledToTop: scrolledToTop,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledNav, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.TransitionGroup, {
        component: null,
        children: isMounted && /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
          classNames: fadeClass,
          timeout: timeout,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "logo",
            tabIndex: "-1",
            children: isHome ? /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "/",
              "aria-label": "home",
              children: /*#__PURE__*/jsx_runtime_.jsx(Icons/* IconLogo */.mp, {
                width: 80,
                height: 90.186
              })
            }) : /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              "aria-label": "home",
              children: /*#__PURE__*/jsx_runtime_.jsx(Icons/* IconLogo */.mp, {})
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(StyledLinks, {
        children: /*#__PURE__*/jsx_runtime_.jsx("ol", {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.TransitionGroup, {
            component: null,
            children: isMounted && navLinks && navLinks.map(({
              url,
              name
            }, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
              classNames: fadeDownClass,
              timeout: timeout,
              children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                style: {
                  transitionDelay: `${isHome ? i * 100 : 0}ms`
                },
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  "data-scroll": true,
                  href: url,
                  children: name
                })
              }, url)
            }, name))
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.TransitionGroup, {
        component: null,
        children: isMounted && /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
          classNames: fadeClass,
          timeout: timeout,
          children: /*#__PURE__*/jsx_runtime_.jsx(components/* Menu */.v2, {})
        })
      })]
    })
  });
};

/* harmony default export */ const navbar = (Nav);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@11.1.4_react-dom@17.0.0+react@17.0.0/node_modules/next/image.js
var next_image = __webpack_require__(2885);
// EXTERNAL MODULE: ./src/config/sr.js
var config_sr = __webpack_require__(4058);
;// CONCATENATED MODULE: ./src/layouts/footer.js
/* eslint-disable global-require */








const {
  socialMedia
} = config/* default */.Z;

const Footer = () => {
  const revealContainer = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    const ScrollReveal = __webpack_require__(4914);

    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, (0,config_sr.srConfig)());
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledFooter, {
    ref: revealContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx(StyledSocialLinks, {
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        children: socialMedia && socialMedia.map(({
          name,
          url
        }) => /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: url,
            "aria-label": name,
            children: /*#__PURE__*/jsx_runtime_.jsx(Icons/* Icon */.JO, {
              name: name
            })
          })
        }, name))
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledMadeWith, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Made with"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        rel: "noreferrer",
        target: "_blank",
        href: "https://nextjs.org/",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/nextjs-white-logo.svg",
          width: 100,
          height: 100
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(StyledCredit, {
      tabindex: "-1",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        rel: "noreferrer",
        target: "_blank",
        href: "https://github.com/bchiang7/v4",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "Adapted from the Brittany Chiang X JR Garcia Portfolio "
        })
      })
    })]
  });
};

/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./src/layouts/default.js












const DefaultLayout = ({
  children
}) => {
  const router = (0,router_namespaceObject.useRouter)();
  const isHome = router.pathname === '/';
  const isBrowser = false;
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(isHome);
  (0,external_react_.useEffect)(() => {
    if (isLoading || !isBrowser) {
      return;
    } // eslint-disable-next-line global-require


    __webpack_require__(7683)('a[href*="#"]');

    if (window.location.hash) {
      const id = window.location.hash.substring(1); // location.hash without the '#'

      setTimeout(() => {
        const el = document.getElementById(id);

        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading]);

  const handleFinish = () => setIsLoading(false);

  return /*#__PURE__*/jsx_runtime_.jsx(base, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SkipToContentLink, {
        href: "#content",
        children: "Skip to Content"
      }), isLoading && isHome ? /*#__PURE__*/jsx_runtime_.jsx(components/* Loader */.aN, {
        onFinish: handleFinish
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(navbar, {
          isHome: isHome
        }), /*#__PURE__*/jsx_runtime_.jsx(components/* Social */.g_, {
          isHome: isHome
        }), /*#__PURE__*/jsx_runtime_.jsx(components/* Email */.GT, {
          isHome: isHome
        }), /*#__PURE__*/jsx_runtime_.jsx(main, {
          id: "content",
          className: isHome ? 'fillHeight' : '',
          children: children
        }), /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
      })]
    })
  });
};

/* harmony default export */ const layouts_default = (DefaultLayout);
;// CONCATENATED MODULE: ./src/pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/prop-types */






 // Notice how we track pageview when route is changed



router_default().events.on('routeChangeComplete', url => gtag/* pageview */.L(url));
function App({
  Component,
  pageProps
}) {
  const Layout = Component.Layout || layouts_default;
  return /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
    theme: dark,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(globals, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
    })
  });
}

/***/ }),

/***/ 8388:
/***/ ((module) => {

module.exports = require("animejs");

/***/ }),

/***/ 5263:
/***/ ((module) => {

module.exports = require("intersection-observer");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3810:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4914:
/***/ ((module) => {

module.exports = require("scrollreveal");

/***/ }),

/***/ 7683:
/***/ ((module) => {

module.exports = require("smooth-scroll");

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
var __webpack_exports__ = __webpack_require__.X(0, [193,885,138,178], () => (__webpack_exec__(8288)));
module.exports = __webpack_exports__;

})();