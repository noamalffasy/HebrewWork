webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HealthBar.tsx":
/*!**********************************!*\
  !*** ./components/HealthBar.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/HealthBar.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var HealthBar =
/*#__PURE__*/
function (_Component) {
  _inherits(HealthBar, _Component);

  function HealthBar() {
    _classCallCheck(this, HealthBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(HealthBar).apply(this, arguments));
  }

  _createClass(HealthBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2434963610", [this.props.opponent.hp]]]) + " " + "health-outer ".concat(this.props.isPlayer),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2434963610", [this.props.opponent.hp]]]) + " " + "healthbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2434963610", [this.props.opponent.hp]]]) + " " + "health",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2434963610", [this.props.opponent.hp]]]) + " " + "hp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, this.props.opponent.hp), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2434963610",
        css: ".health-outer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:12rem;margin-top:-2rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.health-outer.enemy.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.health-outer.__jsx-style-dynamic-selector .healthbar.__jsx-style-dynamic-selector{width:10rem;height:1rem;border:1px solid #161616;}.health-outer.__jsx-style-dynamic-selector .healthbar.__jsx-style-dynamic-selector .health.__jsx-style-dynamic-selector{width:".concat(this.props.opponent.hp, "%;height:100%;background:#c00;-webkit-transition:all 0.3;transition:all 0.3;}.health-outer.__jsx-style-dynamic-selector span.hp.__jsx-style-dynamic-selector{margin:0 0 0 0.5rem;}.health-outer.enemy.__jsx-style-dynamic-selector span.hp.__jsx-style-dynamic-selector{margin:0 0.5rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0hlYWx0aEJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JvQixBQUcwQixBQU9jLEFBSWYsQUFNd0IsQUFPaEIsQUFJQSxZQWhCUixRQWFkLEFBSUEsSUFoQjJCLFlBS2IsWUFDSSxDQUxsQixlQU1xQixVQW5CUCxZQUNLLE9BTW5CLFVBTHFCLE9Ba0JyQixzRkFqQkEiLCJmaWxlIjoiL1VzZXJzL25vYW1hbGZmYXN5L0RvY3VtZW50cy9Qcm9ncmFtbWluZy9TY2hvb2wgUHJvamVjdHMvQXZvZGEgQmVJdnJpdC0yL2NvbXBvbmVudHMvSGVhbHRoQmFyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE9wcG9uZW50SW50ZXJmYWNlIH0gZnJvbSBcInV0aWxzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9wcG9uZW50OiBPcHBvbmVudEludGVyZmFjZTtcbiAgaXNQbGF5ZXI6IGJvb2xlYW47XG59XG5cbmNsYXNzIEhlYWx0aEJhciBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhbHRoLW91dGVyICR7dGhpcy5wcm9wcy5pc1BsYXllcn1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFsdGhiYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWx0aFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJocFwiPnt0aGlzLnByb3BzLm9wcG9uZW50LmhwfTwvc3Bhbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFsdGgtb3V0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycmVtO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhbHRoLW91dGVyLmVuZW15IHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhbHRoLW91dGVyIC5oZWFsdGhiYXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE2MTYxNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhbHRoLW91dGVyIC5oZWFsdGhiYXIgLmhlYWx0aCB7XG4gICAgICAgICAgICB3aWR0aDogJHt0aGlzLnByb3BzLm9wcG9uZW50LmhwfSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhbHRoLW91dGVyIHNwYW4uaHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAwLjVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWx0aC1vdXRlci5lbmVteSBzcGFuLmhwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwLjVyZW0gMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFsdGhCYXI7XG4iXX0= */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/HealthBar.tsx */"),
        dynamic: [this.props.opponent.hp],
        __self: this
      }));
    }
  }]);

  return HealthBar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HealthBar);

/***/ })

})
//# sourceMappingURL=index.js.5d3b748b42ed6f8db975.hot-update.js.map