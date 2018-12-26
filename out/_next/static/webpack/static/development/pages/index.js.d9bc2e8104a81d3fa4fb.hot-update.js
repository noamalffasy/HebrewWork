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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4035180799", [this.props.opponent.hp]]]) + " " + "health-outer ".concat(this.props.isPlayer),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4035180799", [this.props.opponent.hp]]]) + " " + "healthbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4035180799", [this.props.opponent.hp]]]) + " " + "health",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4035180799", [this.props.opponent.hp]]]) + " " + "hp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, this.props.opponent.hp), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4035180799",
        css: ".health-outer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:-2rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.health-outer.enemy.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.health-outer.__jsx-style-dynamic-selector .healthbar.__jsx-style-dynamic-selector{width:10rem;height:1rem;border:1px solid #161616;}.health-outer.__jsx-style-dynamic-selector .healthbar.__jsx-style-dynamic-selector .health.__jsx-style-dynamic-selector{width:".concat(this.props.opponent.hp, "%;height:100%;background:#c00;}.health-outer.__jsx-style-dynamic-selector span.hp.__jsx-style-dynamic-selector{margin:0 0 0 0.5rem;}.health-outer.enemy.__jsx-style-dynamic-selector span.hp.__jsx-style-dynamic-selector{margin:0 0.5rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0hlYWx0aEJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JvQixBQUcwQixBQU1jLEFBSWYsQUFLd0IsQUFNaEIsQUFJQSxZQWRSLFFBV2QsQUFJQSxJQWQyQixZQUliLFlBQ0ksQ0FKbEIsZUFLQSxVQWpCbUIsaUJBQ0UsRUFLckIsMkZBSkEiLCJmaWxlIjoiL1VzZXJzL25vYW1hbGZmYXN5L0RvY3VtZW50cy9Qcm9ncmFtbWluZy9TY2hvb2wgUHJvamVjdHMvQXZvZGEgQmVJdnJpdC0yL2NvbXBvbmVudHMvSGVhbHRoQmFyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE9wcG9uZW50SW50ZXJmYWNlIH0gZnJvbSBcInV0aWxzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9wcG9uZW50OiBPcHBvbmVudEludGVyZmFjZTtcbiAgaXNQbGF5ZXI6IGJvb2xlYW47XG59XG5cbmNsYXNzIEhlYWx0aEJhciBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhbHRoLW91dGVyICR7dGhpcy5wcm9wcy5pc1BsYXllcn1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFsdGhiYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWx0aFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJocFwiPnt0aGlzLnByb3BzLm9wcG9uZW50LmhwfTwvc3Bhbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFsdGgtb3V0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycmVtO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhbHRoLW91dGVyLmVuZW15IHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhbHRoLW91dGVyIC5oZWFsdGhiYXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE2MTYxNjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWx0aC1vdXRlciAuaGVhbHRoYmFyIC5oZWFsdGgge1xuICAgICAgICAgICAgd2lkdGg6ICR7dGhpcy5wcm9wcy5vcHBvbmVudC5ocH0lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2MwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhbHRoLW91dGVyIHNwYW4uaHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAwLjVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWx0aC1vdXRlci5lbmVteSBzcGFuLmhwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwLjVyZW0gMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFsdGhCYXI7XG4iXX0= */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/HealthBar.tsx */"),
        dynamic: [this.props.opponent.hp],
        __self: this
      }));
    }
  }]);

  return HealthBar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HealthBar);

/***/ }),

/***/ "./components/Healthbar.tsx":
false,

/***/ "./components/OpponentHUD.tsx":
/*!************************************!*\
  !*** ./components/OpponentHUD.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_HealthBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/HealthBar */ "./components/HealthBar.tsx");
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/OpponentHUD.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var OpponentHUD =
/*#__PURE__*/
function (_Component) {
  _inherits(OpponentHUD, _Component);

  function OpponentHUD() {
    _classCallCheck(this, OpponentHUD);

    return _possibleConstructorReturn(this, _getPrototypeOf(OpponentHUD).apply(this, arguments));
  }

  _createClass(OpponentHUD, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          opponent = _this$props.opponent,
          isPlayer = _this$props.isPlayer;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3034020488", [this.props.opponent.srcName]]]) + " " + "OpponentHUD ".concat(isPlayer ? "player" : "enemy"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3034020488", [this.props.opponent.srcName]]]) + " " + "head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3034020488", [this.props.opponent.srcName]]]) + " " + "head-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3034020488", [this.props.opponent.srcName]]]) + " " + "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, opponent.name)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_HealthBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        opponent: opponent,
        isPlayer: isPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3034020488",
        css: ".OpponentHUD.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.OpponentHUD.enemy.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 1rem 0 0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.OpponentHUD.enemy.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector{margin:0 0 0 1rem;}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector .head-img.__jsx-style-dynamic-selector{background-image:url(/static/img/".concat(this.props.opponent.srcName, "/head.png);background-size:90% 90%;background-repeat:no-repeat;background-position:center center;background-color:#a00;width:4rem;height:4rem;padding:1rem;border-radius:50%;}.OpponentHUD.enemy.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector .head-img.__jsx-style-dynamic-selector{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector h1.name.__jsx-style-dynamic-selector{display:block;font-size:1.2rem;line-height:1.5rem;text-align:center;width:4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL09wcG9uZW50SFVELnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qm9CLEFBRzBCLEFBS2MsQUFJZCxBQU9LLEFBSXNELEFBWW5ELEFBSVAsY0FDRyxJQXBCbkIsYUFxQnFCLG1CQUNELGtCQUNQLElBbkJhLEVBcEJMLEFBU0QsQ0F1QnBCLElBUUEsYUE5QndCLENBTHhCLEdBZ0I4Qiw0QkFDTSxrQ0FDWixTQXRCeEIsR0FVcUIsVUFhUixXQUNDLFlBQ0MsYUFDSyxrQkFDcEIsNkJBaEJBIiwiZmlsZSI6Ii9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL09wcG9uZW50SFVELnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIZWFsdGhCYXIgZnJvbSBcImNvbXBvbmVudHMvSGVhbHRoQmFyXCJcblxuaW1wb3J0IHsgT3Bwb25lbnRJbnRlcmZhY2UgfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb3Bwb25lbnQ6IE9wcG9uZW50SW50ZXJmYWNlO1xuICBpc1BsYXllcjogYm9vbGVhbjtcbn1cblxuY2xhc3MgT3Bwb25lbnRIVUQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3Bwb25lbnQsIGlzUGxheWVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgT3Bwb25lbnRIVUQgJHtpc1BsYXllciA/IFwicGxheWVyXCIgOiBcImVuZW15XCJ9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkLWltZ1wiIC8+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm5hbWVcIj57b3Bwb25lbnQubmFtZX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhlYWx0aEJhciBvcHBvbmVudD17b3Bwb25lbnR9IGlzUGxheWVyPXtpc1BsYXllcn0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5PcHBvbmVudEhVRCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuT3Bwb25lbnRIVUQuZW5lbXkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5PcHBvbmVudEhVRCAuaGVhZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLk9wcG9uZW50SFVELmVuZW15IC5oZWFkIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuT3Bwb25lbnRIVUQgLmhlYWQgLmhlYWQtaW1nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZy8ke3RoaXMucHJvcHMub3Bwb25lbnQuc3JjTmFtZX0vaGVhZC5wbmcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA5MCUgOTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAwO1xuICAgICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5PcHBvbmVudEhVRC5lbmVteSAuaGVhZCAuaGVhZC1pbWcge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5PcHBvbmVudEhVRCAuaGVhZCBoMS5uYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wcG9uZW50SFVEO1xuIl19 */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/OpponentHUD.tsx */"),
        dynamic: [this.props.opponent.srcName],
        __self: this
      }));
    }
  }]);

  return OpponentHUD;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OpponentHUD);

/***/ })

})
//# sourceMappingURL=index.js.d9bc2e8104a81d3fa4fb.hot-update.js.map