webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Game.tsx":
/*!*****************************!*\
  !*** ./components/Game.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_HUD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components//HUD */ "./components/HUD.tsx");
/* harmony import */ var components_Foreground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Foreground */ "./components/Foreground.tsx");
/* harmony import */ var reduxStore_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reduxStore/actions */ "./reduxStore/actions/index.ts");
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Game.tsx";


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








var Game =
/*#__PURE__*/
function (_Component) {
  _inherits(Game, _Component);

  function Game() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Game);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Game)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      gameWidth: 1420
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeEnemy", function () {
      _this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_5__["changeEnemy"])());

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          currentEnemy: {
            hp: 100,
            name: "אליעזר בן יהודה",
            srcName: "eliazer_ben_judah"
          }
        });
      });
    });

    return _this;
  }

  _createClass(Game, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          gameWidth: window.innerWidth
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1927334028" + " " + "Game",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_HUD__WEBPACK_IMPORTED_MODULE_3__["default"], {
        playerHP: this.props.player.hp,
        currentEnemy: this.props.enemy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_Foreground__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gameWidth: this.state.gameWidth,
        currentEnemy: this.props.enemy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1927334028",
        css: ".Game.jsx-1927334028{position:absolute;background-image:url(/static/img/background.jpg);height:100%;width:100%;z-index:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0dhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEb0IsQUFHK0Isa0JBQytCLGlEQUNyQyxZQUNELFdBQ0QsVUFDWiIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9HYW1lLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCBIVUQgZnJvbSBcImNvbXBvbmVudHMvL0hVRFwiO1xuaW1wb3J0IEZvcmVncm91bmQgZnJvbSBcImNvbXBvbmVudHMvRm9yZWdyb3VuZFwiO1xuXG5pbXBvcnQgeyBjaGFuZ2VFbmVteSB9IGZyb20gXCJyZWR1eFN0b3JlL2FjdGlvbnNcIjtcblxuaW1wb3J0IHsgT3Bwb25lbnRJbnRlcmZhY2UgfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGxheWVyOiBPcHBvbmVudEludGVyZmFjZTtcbiAgZW5lbXk6IE9wcG9uZW50SW50ZXJmYWNlO1xuICBkaXNwYXRjaDogRGlzcGF0Y2g7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGdhbWVXaWR0aDogbnVtYmVyO1xufVxuXG5jbGFzcyBHYW1lIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHtcbiAgICBnYW1lV2lkdGg6IDE0MjBcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgZ2FtZVdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIH0pKTtcbiAgfVxuXG4gIGNoYW5nZUVuZW15ID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2hhbmdlRW5lbXkoKSlcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgY3VycmVudEVuZW15OiB7XG4gICAgICAgIGhwOiAxMDAsXG4gICAgICAgIG5hbWU6IFwi15DXnNeZ16LXlteoINeR158g15nXlNeV15PXlFwiLFxuICAgICAgICBzcmNOYW1lOiBcImVsaWF6ZXJfYmVuX2p1ZGFoXCJcbiAgICAgIH1cbiAgICB9KSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVcIj5cbiAgICAgICAgPEhVRCBwbGF5ZXJIUD17dGhpcy5wcm9wcy5wbGF5ZXIuaHB9IGN1cnJlbnRFbmVteT17dGhpcy5wcm9wcy5lbmVteX0gLz5cbiAgICAgICAgPEZvcmVncm91bmRcbiAgICAgICAgICBnYW1lV2lkdGg9e3RoaXMuc3RhdGUuZ2FtZVdpZHRofVxuICAgICAgICAgIGN1cnJlbnRFbmVteT17dGhpcy5wcm9wcy5lbmVteX1cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5HYW1lIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ltZy9iYWNrZ3JvdW5kLmpwZyk7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICBjb25zdCB7IHBsYXllciwgZW5lbXkgfSA9IHN0YXRlO1xuICByZXR1cm4geyBwbGF5ZXIsIGVuZW15IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShHYW1lKTtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Game.tsx */",
        __self: this
      }));
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapStateToProps(state) {
  var player = state.player,
      enemy = state.enemy;
  return {
    player: player,
    enemy: enemy
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Game));

/***/ }),

/***/ "./reduxStore/reducers/enemy.ts":
false,

/***/ "./reduxStore/reducers/index.ts":
false,

/***/ "./reduxStore/reducers/player.ts":
false

})
//# sourceMappingURL=index.js.27d8265729ff75686928.hot-update.js.map