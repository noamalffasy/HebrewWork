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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["211687929", [this.props.opponent.hp]]]) + " " + "health-outer ".concat(this.props.isPlayer),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["211687929", [this.props.opponent.hp]]]) + " " + "healthbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["211687929", [this.props.opponent.hp]]]) + " " + "health",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["211687929", [this.props.opponent.hp]]]) + " " + "hp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, this.props.opponent.hp > 0 ? this.props.opponent.hp : 0), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "211687929",
        css: ".health-outer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:12rem;margin-top:-2rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.health-outer.enemy.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.health-outer.__jsx-style-dynamic-selector .healthbar.__jsx-style-dynamic-selector{width:10rem;height:1rem;border:1px solid #161616;}.health-outer.__jsx-style-dynamic-selector .healthbar.__jsx-style-dynamic-selector .health.__jsx-style-dynamic-selector{width:".concat(this.props.opponent.hp, "%;height:100%;background:#c00;-webkit-transition:all 0.3s;transition:all 0.3s;}.health-outer.__jsx-style-dynamic-selector span.hp.__jsx-style-dynamic-selector{margin:0 0 0 0.5rem;}.health-outer.enemy.__jsx-style-dynamic-selector span.hp.__jsx-style-dynamic-selector{margin:0 0.5rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0hlYWx0aEJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUcwQixBQU9jLEFBSWYsQUFNd0IsQUFPaEIsQUFJQSxZQWhCUixRQWFkLEFBSUEsSUFoQjJCLFlBS2IsWUFDSSxDQUxsQixlQU1zQixVQW5CUixZQUNLLE9BTW5CLFVBTHFCLFNBa0JyQixvRkFqQkEiLCJmaWxlIjoiL1VzZXJzL25vYW1hbGZmYXN5L0RvY3VtZW50cy9Qcm9ncmFtbWluZy9TY2hvb2wgUHJvamVjdHMvQXZvZGEgQmVJdnJpdC0yL2NvbXBvbmVudHMvSGVhbHRoQmFyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE9wcG9uZW50SW50ZXJmYWNlIH0gZnJvbSBcInV0aWxzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9wcG9uZW50OiBPcHBvbmVudEludGVyZmFjZTtcbiAgaXNQbGF5ZXI6IGJvb2xlYW47XG59XG5cbmNsYXNzIEhlYWx0aEJhciBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhbHRoLW91dGVyICR7dGhpcy5wcm9wcy5pc1BsYXllcn1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFsdGhiYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWx0aFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJocFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLm9wcG9uZW50LmhwID4gMCA/IHRoaXMucHJvcHMub3Bwb25lbnQuaHAgOiAwfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVhbHRoLW91dGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTJyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWx0aC1vdXRlci5lbmVteSB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWx0aC1vdXRlciAuaGVhbHRoYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNjE2MTY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWx0aC1vdXRlciAuaGVhbHRoYmFyIC5oZWFsdGgge1xuICAgICAgICAgICAgd2lkdGg6ICR7dGhpcy5wcm9wcy5vcHBvbmVudC5ocH0lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2MwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFsdGgtb3V0ZXIgc3Bhbi5ocCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDAuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhbHRoLW91dGVyLmVuZW15IHNwYW4uaHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAuNXJlbSAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWx0aEJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/HealthBar.tsx */"),
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
//# sourceMappingURL=index.js.9324f1a5056424349bc2.hot-update.js.map