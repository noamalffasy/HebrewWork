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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_HealthBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/HealthBar */ "./components/HealthBar.tsx");
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
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.state === "changeEnemy" && nextProps.state !== this.props.state) {}
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          opponent = _this$props.opponent,
          isPlayer = _this$props.isPlayer;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3034020488", [this.props.opponent.srcName]]]) + " " + "OpponentHUD ".concat(isPlayer ? "player" : "enemy"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3034020488", [this.props.opponent.srcName]]]) + " " + "head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3034020488", [this.props.opponent.srcName]]]) + " " + "head-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3034020488", [this.props.opponent.srcName]]]) + " " + "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, opponent.name)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_HealthBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        opponent: opponent,
        isPlayer: isPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3034020488",
        css: ".OpponentHUD.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.OpponentHUD.enemy.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 1rem 0 0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.OpponentHUD.enemy.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector{margin:0 0 0 1rem;}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector .head-img.__jsx-style-dynamic-selector{background-image:url(/static/img/".concat(this.props.opponent.srcName, "/head.png);background-size:90% 90%;background-repeat:no-repeat;background-position:center center;background-color:#a00;width:4rem;height:4rem;padding:1rem;border-radius:50%;}.OpponentHUD.enemy.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector .head-img.__jsx-style-dynamic-selector{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector h1.name.__jsx-style-dynamic-selector{display:block;font-size:1.2rem;line-height:1.5rem;text-align:center;width:4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL09wcG9uZW50SFVELnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ29CLEFBRzBCLEFBS2MsQUFJZCxBQU9LLEFBSXNELEFBWW5ELEFBSVAsY0FDRyxJQXBCbkIsYUFxQnFCLG1CQUNELGtCQUNQLElBbkJhLEVBcEJMLEFBU0QsQ0F1QnBCLElBUUEsYUE5QndCLENBTHhCLEdBZ0I4Qiw0QkFDTSxrQ0FDWixTQXRCeEIsR0FVcUIsVUFhUixXQUNDLFlBQ0MsYUFDSyxrQkFDcEIsNkJBaEJBIiwiZmlsZSI6Ii9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL09wcG9uZW50SFVELnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IEhlYWx0aEJhciBmcm9tIFwiY29tcG9uZW50cy9IZWFsdGhCYXJcIjtcblxuaW1wb3J0IHsgT3Bwb25lbnRJbnRlcmZhY2UsIFN0b3JlSW50ZXJmYWNlIH0gZnJvbSBcInV0aWxzL3R5cGVzXCI7XG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWR1eFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvcHBvbmVudDogT3Bwb25lbnRJbnRlcmZhY2U7XG4gIGlzUGxheWVyOiBib29sZWFuO1xuICBzdGF0ZTogc3RyaW5nO1xuICBkaXNwYXRjaDogRGlzcGF0Y2g7XG59XG5cbmNsYXNzIE9wcG9uZW50SFVEIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xuICAgIGlmIChcbiAgICAgIG5leHRQcm9wcy5zdGF0ZSA9PT0gXCJjaGFuZ2VFbmVteVwiICYmXG4gICAgICBuZXh0UHJvcHMuc3RhdGUgIT09IHRoaXMucHJvcHMuc3RhdGVcbiAgICApIHtcbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wcG9uZW50LCBpc1BsYXllciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YE9wcG9uZW50SFVEICR7aXNQbGF5ZXIgPyBcInBsYXllclwiIDogXCJlbmVteVwifWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWQtaW1nXCIgLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibmFtZVwiPntvcHBvbmVudC5uYW1lfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SGVhbHRoQmFyIG9wcG9uZW50PXtvcHBvbmVudH0gaXNQbGF5ZXI9e2lzUGxheWVyfSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLk9wcG9uZW50SFVEIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5PcHBvbmVudEhVRC5lbmVteSB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLk9wcG9uZW50SFVEIC5oZWFkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuT3Bwb25lbnRIVUQuZW5lbXkgLmhlYWQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5PcHBvbmVudEhVRCAuaGVhZCAuaGVhZC1pbWcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1nLyR7dGhpcy5wcm9wcy5vcHBvbmVudC5zcmNOYW1lfS9oZWFkLnBuZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDkwJSA5MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMDA7XG4gICAgICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLk9wcG9uZW50SFVELmVuZW15IC5oZWFkIC5oZWFkLWltZyB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLk9wcG9uZW50SFVEIC5oZWFkIGgxLm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZUludGVyZmFjZSkge1xuICBjb25zdCB7IHN0YXRlOiBnYW1lU3RhdGUgfSA9IHN0YXRlO1xuICByZXR1cm4geyBzdGF0ZTogZ2FtZVN0YXRlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShPcHBvbmVudEhVRCk7XG4iXX0= */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/OpponentHUD.tsx */"),
        dynamic: [this.props.opponent.srcName],
        __self: this
      }));
    }
  }]);

  return OpponentHUD;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapStateToProps(state) {
  var gameState = state.state;
  return {
    state: gameState
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(OpponentHUD));

/***/ })

})
//# sourceMappingURL=index.js.0d3fb83e82407bd9d58e.hot-update.js.map