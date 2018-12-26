webpackHotUpdate("static/development/pages/index.js",{

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
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3034020488", [this.props.opponent.srcName]]]) + " " + "head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3034020488", [this.props.opponent.srcName]]]) + " " + "head-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3034020488", [this.props.opponent.srcName]]]) + " " + "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, opponent.name)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](HealthBar, {
        opponent: opponent,
        isPlayer: isPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3034020488",
        css: ".OpponentHUD.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.OpponentHUD.enemy.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 1rem 0 0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.OpponentHUD.enemy.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector{margin:0 0 0 1rem;}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector .head-img.__jsx-style-dynamic-selector{background-image:url(/static/img/".concat(this.props.opponent.srcName, "/head.png);background-size:90% 90%;background-repeat:no-repeat;background-position:center center;background-color:#a00;width:4rem;height:4rem;padding:1rem;border-radius:50%;}.OpponentHUD.enemy.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector .head-img.__jsx-style-dynamic-selector{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector h1.name.__jsx-style-dynamic-selector{display:block;font-size:1.2rem;line-height:1.5rem;text-align:center;width:4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL09wcG9uZW50SFVELnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm9CLEFBRzBCLEFBS2MsQUFJZCxBQU9LLEFBSXNELEFBWW5ELEFBSVAsY0FDRyxJQXBCbkIsYUFxQnFCLG1CQUNELGtCQUNQLElBbkJhLEVBcEJMLEFBU0QsQ0F1QnBCLElBUUEsYUE5QndCLENBTHhCLEdBZ0I4Qiw0QkFDTSxrQ0FDWixTQXRCeEIsR0FVcUIsVUFhUixXQUNDLFlBQ0MsYUFDSyxrQkFDcEIsNkJBaEJBIiwiZmlsZSI6Ii9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL09wcG9uZW50SFVELnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE9wcG9uZW50SW50ZXJmYWNlIH0gZnJvbSBcInV0aWxzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9wcG9uZW50OiBPcHBvbmVudEludGVyZmFjZTtcbiAgaXNQbGF5ZXI6IGJvb2xlYW47XG59XG5cbmNsYXNzIE9wcG9uZW50SFVEIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wcG9uZW50LCBpc1BsYXllciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YE9wcG9uZW50SFVEICR7aXNQbGF5ZXIgPyBcInBsYXllclwiIDogXCJlbmVteVwifWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZC1pbWdcIiAvPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJuYW1lXCI+e29wcG9uZW50Lm5hbWV9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxIZWFsdGhCYXIgb3Bwb25lbnQ9e29wcG9uZW50fSBpc1BsYXllcj17aXNQbGF5ZXJ9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuT3Bwb25lbnRIVUQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLk9wcG9uZW50SFVELmVuZW15IHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuT3Bwb25lbnRIVUQgLmhlYWQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5PcHBvbmVudEhVRC5lbmVteSAuaGVhZCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLk9wcG9uZW50SFVEIC5oZWFkIC5oZWFkLWltZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWcvJHt0aGlzLnByb3BzLm9wcG9uZW50LnNyY05hbWV9L2hlYWQucG5nKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogOTAlIDkwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwMDtcbiAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuT3Bwb25lbnRIVUQuZW5lbXkgLmhlYWQgLmhlYWQtaW1nIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuT3Bwb25lbnRIVUQgLmhlYWQgaDEubmFtZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcHBvbmVudEhVRDtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/OpponentHUD.tsx */"),
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
//# sourceMappingURL=index.js.4e4cde128830147cda69.hot-update.js.map