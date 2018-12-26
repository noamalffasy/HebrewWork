webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/End.tsx":
/*!****************************!*\
  !*** ./components/End.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/End.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var End =
/*#__PURE__*/
function (_Component) {
  _inherits(End, _Component);

  function End() {
    _classCallCheck(this, End);

    return _possibleConstructorReturn(this, _getPrototypeOf(End).apply(this, arguments));
  }

  _createClass(End, [{
    key: "render",
    value: function render() {
      var didWin = this.props.didWin;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3736379793" + " " + "end-outer ".concat(this.props.toShow ? "show" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3736379793" + " " + "end-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-3736379793",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, didWin ? "ניצחת!" : "הפסדת!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3736379793",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, didWin ? "הצלחת לענות נכון על כל השאלות ולהביס את כל האויבים" : "לא הצלחת לענות נכון על כל השאלות"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3736379793",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, didWin ? "כל הכבוד" : "תרצה לנסות שוב?"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3736379793" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "\u05EA\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05D3\u05E3 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E9\u05D7\u05E7 \u05E9\u05D5\u05D1")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3736379793",
        css: ".end-outer.jsx-3736379793{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.end-outer.hide.jsx-3736379793{display:none;}.end-inner.jsx-3736379793{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:4rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.end-inner.jsx-3736379793 h1.jsx-3736379793{font-size:4rem;}.end-inner.jsx-3736379793 p.jsx-3736379793{font-size:2rem;}.end-inner.jsx-3736379793 span.jsx-3736379793{font-size:3rem;font-weight:bold;}.intro-inner.jsx-3736379793 p.call-to-action.jsx-3736379793{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0VuZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJvQixBQUcrQixBQVFMLEFBSUMsQUFZQyxBQUlBLEFBSUEsQUFLRSxhQTVCbkIsQ0FJb0IsQ0FZcEIsQUFJQSxBQUltQixFQUtILENBckNFLGFBc0NBLENBekJBLEFBb0JsQixFQWhDaUIsYUFzQ2pCLENBekJZLENBWm9CLFNBYW5CLFdBQ08sT0FiUixVQUNaLENBYW1CLGlCQUNDLGtCQUN5Qix3Q0FDN0MiLCJmaWxlIjoiL1VzZXJzL25vYW1hbGZmYXN5L0RvY3VtZW50cy9Qcm9ncmFtbWluZy9TY2hvb2wgUHJvamVjdHMvQXZvZGEgQmVJdnJpdC0yL2NvbXBvbmVudHMvRW5kLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRvU2hvdzogYm9vbGVhbjtcbiAgZGlkV2luOiBib29sZWFuO1xufVxuXG5jbGFzcyBFbmQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlkV2luIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGVuZC1vdXRlciAke3RoaXMucHJvcHMudG9TaG93ID8gXCJzaG93XCIgOiBcIlwifWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVuZC1pbm5lclwiPlxuICAgICAgICAgIDxoMT57ZGlkV2luID8gXCLXoNeZ16bXl9eqIVwiIDogXCLXlNek16HXk9eqIVwifTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7ZGlkV2luXG4gICAgICAgICAgICAgID8gXCLXlNem15zXl9eqINec16LXoNeV16og16DXm9eV158g16LXnCDXm9ecINeU16nXkNec15XXqiDXldec15TXkdeZ16Eg15DXqiDXm9ecINeU15DXldeZ15HXmdedXCJcbiAgICAgICAgICAgICAgOiBcItec15Ag15TXptec15fXqiDXnNei16DXldeqINeg15vXldefINei15wg15vXnCDXlNep15DXnNeV16pcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHNwYW4+e2RpZFdpbiA/IFwi15vXnCDXlNeb15HXldeTXCIgOiBcIteq16jXpteUINec16DXodeV16og16nXldeRP1wifTwvc3Bhbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYWxsLXRvLWFjdGlvblwiPteq16jXoteg158g15DXqiDXlNeT16Mg16LXnCDXnteg16og15zXqdeX16cg16nXldeRPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5lbmQtb3V0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVuZC1vdXRlci5oaWRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVuZC1pbm5lciB7XG4gICAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDRyZW07XG4gICAgICAgICAgICBtYXJnaW46IDRyZW0gYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVuZC1pbm5lciBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVuZC1pbm5lciBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZW5kLWlubmVyIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmludHJvLWlubmVyIHAuY2FsbC10by1hY3Rpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzljOWM5YztcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZDtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/End.tsx */",
        __self: this
      }));
    }
  }]);

  return End;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (End);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_keydown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-keydown */ "./node_modules/react-keydown/es/index.js");
/* harmony import */ var components_Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Intro */ "./components/Intro.tsx");
/* harmony import */ var components_End__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/End */ "./components/End.tsx");
/* harmony import */ var components_FightStart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/FightStart */ "./components/FightStart.tsx");
/* harmony import */ var components_Game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Game */ "./components/Game.tsx");
/* harmony import */ var components_Question__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Question */ "./components/Question.tsx");
/* harmony import */ var utils_questionsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/questionsList */ "./utils/questionsList.ts");
/* harmony import */ var reduxStore_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reduxStore/actions */ "./reduxStore/actions/index.ts");
/* harmony import */ var utils_enemiesList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/enemiesList */ "./utils/enemiesList.ts");
var _class,
    _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/pages/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var Index = Object(react_keydown__WEBPACK_IMPORTED_MODULE_2__["default"])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      questionID: 0
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var state = nextProps.state,
          enemy = nextProps.enemy,
          dispatch = nextProps.dispatch;

      if (state === "attack") {
        setTimeout(function () {
          _this2.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              questionID: prevState.questionID + 1
            });
          }, function () {
            if (enemy.hp > 0) {
              dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_9__["updateState"])("showQuestion"));
            } else {
              if (utils_enemiesList__WEBPACK_IMPORTED_MODULE_10__["default"].indexOf(enemy) < utils_enemiesList__WEBPACK_IMPORTED_MODULE_10__["default"].length - 1) {
                dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_9__["updateState"])("changeEnemy"));
              } else {
                dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_9__["updateState"])("win"));
              }
            }
          });
        }, 1500);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          keydown = _this$props.keydown,
          state = _this$props.state;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Intro__WEBPACK_IMPORTED_MODULE_3__["default"], {
        keydown: keydown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_End__WEBPACK_IMPORTED_MODULE_4__["default"], {
        toShow: state === "win" || state === "lose",
        didWin: state === "win",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_FightStart__WEBPACK_IMPORTED_MODULE_5__["default"], {
        toShow: state === "startFight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Question__WEBPACK_IMPORTED_MODULE_7__["default"], {
        keydown: keydown,
        question: utils_questionsList__WEBPACK_IMPORTED_MODULE_8__["default"][this.state.questionID],
        toShow: state === "showQuestion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Game__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class;

function mapStateToProps(state) {
  var gameState = state.state,
      enemy = state.enemy,
      player = state.player;
  return {
    state: gameState,
    enemy: enemy,
    player: player
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.5f7bf5f83edd40401c0f.hot-update.js.map