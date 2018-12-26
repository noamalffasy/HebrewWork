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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      var _this = this;

      if (!nextProps.isPlayer && nextProps.state === "changeEnemy" && nextProps.state !== this.props.state) {
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            isHidden: true
          });
        }, function () {
          setTimeout(function () {
            _this.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                isHidden: false
              });
            });
          }, 1000);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          opponent = _this$props.opponent,
          isPlayer = _this$props.isPlayer;
      var isHidden = this.state.isHidden;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1153410631", [this.props.opponent.srcName]]]) + " " + "OpponentHUD ".concat(isPlayer ? "player" : "enemy", " ").concat(isHidden ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1153410631", [this.props.opponent.srcName]]]) + " " + "head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1153410631", [this.props.opponent.srcName]]]) + " " + "head-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1153410631", [this.props.opponent.srcName]]]) + " " + "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, opponent.name)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_HealthBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        opponent: opponent,
        isPlayer: isPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1153410631",
        css: ".OpponentHUD.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.OpponentHUD.enemy.__jsx-style-dynamic-selector{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-transition:all 0.3s;transition:all 0.3s;}.OpponentHUD.hide.__jsx-style-dynamic-selector{display:none;}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 1rem 0 0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.OpponentHUD.enemy.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector{margin:0 0 0 1rem;}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector .head-img.__jsx-style-dynamic-selector{background-image:url(/static/img/".concat(this.props.opponent.srcName, "/head.png);background-size:90% 90%;background-repeat:no-repeat;background-position:center center;background-color:#a00;width:4rem;height:4rem;padding:1rem;border-radius:50%;}.OpponentHUD.enemy.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector .head-img.__jsx-style-dynamic-selector{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}.OpponentHUD.__jsx-style-dynamic-selector .head.__jsx-style-dynamic-selector h1.name.__jsx-style-dynamic-selector{display:block;font-size:1.2rem;line-height:1.5rem;text-align:center;width:4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL09wcG9uZW50SFVELnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RG9CLEFBRzBCLEFBS2MsQUFLZCxBQUlBLEFBT0ssQUFJc0QsQUFZbkQsQUFJUCxhQTlCaEIsQ0ErQm1CLElBcEJuQixhQXFCcUIsbUJBQ0Qsa0JBQ1AsSUFuQmEsRUF6QkwsQUFjRCxDQXVCcEIsSUFRQSxhQTlCd0IsQ0FWRixHQXFCUSw0QkFDTSxpQkFyQnBDLGlCQXNCd0IsU0EzQnhCLEdBZXFCLFVBYVIsV0FDQyxZQUNDLGFBQ0ssa0JBQ3BCLDZCQWhCQSIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9PcHBvbmVudEhVRC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBIZWFsdGhCYXIgZnJvbSBcImNvbXBvbmVudHMvSGVhbHRoQmFyXCI7XG5cbmltcG9ydCB7IE9wcG9uZW50SW50ZXJmYWNlLCBTdG9yZUludGVyZmFjZSB9IGZyb20gXCJ1dGlscy90eXBlc1wiO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXhcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb3Bwb25lbnQ6IE9wcG9uZW50SW50ZXJmYWNlO1xuICBpc1BsYXllcjogYm9vbGVhbjtcbiAgc3RhdGU6IHN0cmluZztcbiAgZGlzcGF0Y2g6IERpc3BhdGNoO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc0hpZGRlbjogYm9vbGVhbjtcbn1cblxuY2xhc3MgT3Bwb25lbnRIVUQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xuICAgIGlmIChcbiAgICAgICFuZXh0UHJvcHMuaXNQbGF5ZXIgJiZcbiAgICAgIG5leHRQcm9wcy5zdGF0ZSA9PT0gXCJjaGFuZ2VFbmVteVwiICYmXG4gICAgICBuZXh0UHJvcHMuc3RhdGUgIT09IHRoaXMucHJvcHMuc3RhdGVcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICBpc0hpZGRlbjogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICBpc0hpZGRlbjogZmFsc2VcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHBvbmVudCwgaXNQbGF5ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc0hpZGRlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YE9wcG9uZW50SFVEICR7aXNQbGF5ZXIgPyBcInBsYXllclwiIDogXCJlbmVteVwifSAke2lzSGlkZGVuID8gXCJoaWRlXCIgOiBcIlwifWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWQtaW1nXCIgLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibmFtZVwiPntvcHBvbmVudC5uYW1lfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SGVhbHRoQmFyIG9wcG9uZW50PXtvcHBvbmVudH0gaXNQbGF5ZXI9e2lzUGxheWVyfSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLk9wcG9uZW50SFVEIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5PcHBvbmVudEhVRC5lbmVteSB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuT3Bwb25lbnRIVUQuaGlkZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5PcHBvbmVudEhVRCAuaGVhZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLk9wcG9uZW50SFVELmVuZW15IC5oZWFkIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuT3Bwb25lbnRIVUQgLmhlYWQgLmhlYWQtaW1nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZy8ke3RoaXMucHJvcHMub3Bwb25lbnQuc3JjTmFtZX0vaGVhZC5wbmcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA5MCUgOTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTAwO1xuICAgICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5PcHBvbmVudEhVRC5lbmVteSAuaGVhZCAuaGVhZC1pbWcge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5PcHBvbmVudEhVRCAuaGVhZCBoMS5uYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDRyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVJbnRlcmZhY2UpIHtcbiAgY29uc3QgeyBzdGF0ZTogZ2FtZVN0YXRlIH0gPSBzdGF0ZTtcbiAgcmV0dXJuIHsgc3RhdGU6IGdhbWVTdGF0ZSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoT3Bwb25lbnRIVUQpO1xuIl19 */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/OpponentHUD.tsx */"),
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
//# sourceMappingURL=index.js.38be39ca7e60f75627dd.hot-update.js.map