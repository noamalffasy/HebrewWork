webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Foreground.tsx":
/*!***********************************!*\
  !*** ./components/Foreground.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reduxStore/actions */ "./reduxStore/actions/index.ts");
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Foreground.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Foreground =
/*#__PURE__*/
function (_Component) {
  _inherits(Foreground, _Component);

  function Foreground() {
    _classCallCheck(this, Foreground);

    return _possibleConstructorReturn(this, _getPrototypeOf(Foreground).apply(this, arguments));
  }

  _createClass(Foreground, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this = this;

      if (nextProps.state === "attack" || nextProps.state === "takeHit") {
        setTimeout(function () {
          _this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__["updateState"])("showQuestion"));
        }, 1500);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var numGrassBlocks = Math.ceil(this.props.gameWidth / 70);
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3583906537", [numGrassBlocks]]]) + " " + "Foreground",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        src: "/static/img/character/body.png",
        alt: "\u05E9\u05D7\u05E7\u05DF",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3583906537", [numGrassBlocks]]]) + " " + "opponent player ".concat(this.props.state === "takeHit" ? "hit" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        src: "/static/img/".concat(this.props.currentEnemy.srcName, "/body.png"),
        alt: "\u05D0\u05D5\u05D9\u05D1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3583906537", [numGrassBlocks]]]) + " " + "opponent enemy ".concat(this.props.state === "attack" ? "hit" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3583906537", [numGrassBlocks]]]) + " " + "grass",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, _toConsumableArray(Array(numGrassBlocks)).map(function (_, i) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: "/static/img/grass.png",
          alt: "\u05D0\u05D3\u05DE\u05D4",
          key: i,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3583906537", [numGrassBlocks]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3583906537",
        css: "@-webkit-keyframes hit-__jsx-style-dynamic-selector{0%{background-color:none;}50%{background-color:rgba(200,100,0,0.5);background-blend-mode:multiply;}100%{background-color:none;background-blend-mode:normal;}}@keyframes hit-__jsx-style-dynamic-selector{0%{background-color:none;}50%{background-color:rgba(200,100,0,0.5);background-blend-mode:multiply;}100%{background-color:none;background-blend-mode:normal;}}.Foreground.__jsx-style-dynamic-selector{position:absolute;width:100%;left:0;bottom:0;}.Foreground.__jsx-style-dynamic-selector img.opponent.__jsx-style-dynamic-selector{width:10rem;height:10rem;margin:0 1rem -0.2rem;}.Foreground.__jsx-style-dynamic-selector img.opponent.enemy.__jsx-style-dynamic-selector{margin:0 1rem -0.2rem;float:right;}.Foreground.__jsx-style-dynamic-selector img.opponent.hit.__jsx-style-dynamic-selector{-webkit-animation:hit-__jsx-style-dynamic-selector 0.3s;animation:hit-__jsx-style-dynamic-selector 0.3s;}.Foreground.__jsx-style-dynamic-selector .grass.__jsx-style-dynamic-selector{width:100%;}.Foreground.__jsx-style-dynamic-selector .grass.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:calc(100% / ".concat(numGrassBlocks, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0ZvcmVncm91bmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Eb0IsQUFJcUMsQUFHa0IsQUFLbEIsQUFNTixBQU9OLEFBTVUsQUFLSCxBQUlSLEFBSXFDLFdBSGxELENBZmUsTUFQRixJQWRYLEFBUStCLEFBbUJuQixHQUxVLElBUGYsS0FhVCxFQVpXLENBYndCLFFBY25DLEVBTUEsQ0FpQkEsR0EvQkUsaUJBTEEsb0NBNEJGIiwiZmlsZSI6Ii9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0ZvcmVncm91bmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBTdG9yZUludGVyZmFjZSB9IGZyb20gXCJ1dGlscy90eXBlc1wiO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IHVwZGF0ZVN0YXRlIH0gZnJvbSBcInJlZHV4U3RvcmUvYWN0aW9uc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBnYW1lV2lkdGg6IG51bWJlcjtcbiAgY3VycmVudEVuZW15OiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNyY05hbWU6IHN0cmluZztcbiAgfTtcbiAgc3RhdGU6IHN0cmluZztcbiAgZGlzcGF0Y2g6IERpc3BhdGNoO1xufVxuXG5jbGFzcyBGb3JlZ3JvdW5kIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuc3RhdGUgPT09IFwiYXR0YWNrXCIgfHwgbmV4dFByb3BzLnN0YXRlID09PSBcInRha2VIaXRcIikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RhdGUoXCJzaG93UXVlc3Rpb25cIikpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG51bUdyYXNzQmxvY2tzID0gTWF0aC5jZWlsKHRoaXMucHJvcHMuZ2FtZVdpZHRoIC8gNzApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9yZWdyb3VuZFwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtgb3Bwb25lbnQgcGxheWVyICR7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0YXRlID09PSBcInRha2VIaXRcIiA/IFwiaGl0XCIgOiBcIlwiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWcvY2hhcmFjdGVyL2JvZHkucG5nXCJcbiAgICAgICAgICBhbHQ9XCLXqdeX16fXn1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9e2BvcHBvbmVudCBlbmVteSAke1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJhdHRhY2tcIiA/IFwiaGl0XCIgOiBcIlwiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgc3JjPXtgL3N0YXRpYy9pbWcvJHt0aGlzLnByb3BzLmN1cnJlbnRFbmVteS5zcmNOYW1lfS9ib2R5LnBuZ2B9XG4gICAgICAgICAgYWx0PVwi15DXldeZ15FcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXNzXCI+XG4gICAgICAgICAge1suLi5BcnJheShudW1HcmFzc0Jsb2NrcyldLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvZ3Jhc3MucG5nXCIgYWx0PVwi15DXk9ee15RcIiBrZXk9e2l9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBrZXlmcmFtZXMgaGl0IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAxMDAsIDAsIDAuNSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuRm9yZWdyb3VuZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkZvcmVncm91bmQgaW1nLm9wcG9uZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTByZW07XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAtMC4ycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5Gb3JlZ3JvdW5kIGltZy5vcHBvbmVudC5lbmVteSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAtMC4ycmVtO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5Gb3JlZ3JvdW5kIGltZy5vcHBvbmVudC5oaXQge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBoaXQgMC4zcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuRm9yZWdyb3VuZCAuZ3Jhc3Mge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkZvcmVncm91bmQgLmdyYXNzIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gJHtudW1HcmFzc0Jsb2Nrc30pO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RvcmU6IFN0b3JlSW50ZXJmYWNlKSB7XG4gIHJldHVybiB7IHN0YXRlOiBzdG9yZS5zdGF0ZSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRm9yZWdyb3VuZCk7XG4iXX0= */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Foreground.tsx */"),
        dynamic: [numGrassBlocks],
        __self: this
      }));
    }
  }]);

  return Foreground;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapStateToProps(store) {
  return {
    state: store.state
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Foreground));

/***/ })

})
//# sourceMappingURL=index.js.3b7033c31fa7f92dcb5f.hot-update.js.map