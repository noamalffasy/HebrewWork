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
/* harmony import */ var _HUD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HUD */ "./components/HUD.tsx");
/* harmony import */ var _Foreground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Foreground */ "./components/Foreground.tsx");
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
      gameWidth: 1420,
      currentEnemy: {
        hp: 100,
        name: "הראש החושב",
        srcName: "thinking_head"
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeEnemy", function () {
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
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_HUD__WEBPACK_IMPORTED_MODULE_2__["default"], {
        playerHP: 100,
        currentEnemy: this.state.currentEnemy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Foreground__WEBPACK_IMPORTED_MODULE_3__["default"], {
        gameWidth: this.state.gameWidth,
        currentEnemy: this.state.currentEnemy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1927334028",
        css: ".Game.jsx-1927334028{position:absolute;background-image:url(/static/img/background.jpg);height:100%;width:100%;z-index:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0dhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEb0IsQUFHK0Isa0JBQytCLGlEQUNyQyxZQUNELFdBQ0QsVUFDWiIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9HYW1lLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIVUQgZnJvbSBcIi4vSFVEXCI7XG5pbXBvcnQgRm9yZWdyb3VuZCBmcm9tIFwiLi9Gb3JlZ3JvdW5kXCI7XG5cbmltcG9ydCB7IE9wcG9uZW50SW50ZXJmYWNlIH0gZnJvbSBcInV0aWxzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGdhbWVXaWR0aDogbnVtYmVyO1xuICBjdXJyZW50RW5lbXk6IE9wcG9uZW50SW50ZXJmYWNlO1xufVxuXG5jbGFzcyBHYW1lIGV4dGVuZHMgQ29tcG9uZW50PHt9LCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHtcbiAgICBnYW1lV2lkdGg6IDE0MjAsXG4gICAgY3VycmVudEVuZW15OiB7XG4gICAgICBocDogMTAwLFxuICAgICAgbmFtZTogXCLXlNeo15DXqSDXlNeX15XXqdeRXCIsXG4gICAgICBzcmNOYW1lOiBcInRoaW5raW5nX2hlYWRcIlxuICAgIH1cbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgZ2FtZVdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIH0pKTtcbiAgfVxuXG4gIGNoYW5nZUVuZW15ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBjdXJyZW50RW5lbXk6IHtcbiAgICAgICAgaHA6IDEwMCxcbiAgICAgICAgbmFtZTogXCLXkNec15nXoteW16gg15HXnyDXmdeU15XXk9eUXCIsXG4gICAgICAgIHNyY05hbWU6IFwiZWxpYXplcl9iZW5fanVkYWhcIlxuICAgICAgfVxuICAgIH0pKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZVwiPlxuICAgICAgICA8SFVEIHBsYXllckhQPXsxMDB9IGN1cnJlbnRFbmVteT17dGhpcy5zdGF0ZS5jdXJyZW50RW5lbXl9IC8+XG4gICAgICAgIDxGb3JlZ3JvdW5kXG4gICAgICAgICAgZ2FtZVdpZHRoPXt0aGlzLnN0YXRlLmdhbWVXaWR0aH1cbiAgICAgICAgICBjdXJyZW50RW5lbXk9e3RoaXMuc3RhdGUuY3VycmVudEVuZW15fVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLkdhbWUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1nL2JhY2tncm91bmQuanBnKTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Game.tsx */",
        __self: this
      }));
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ })

})
//# sourceMappingURL=index.js.f431fcd09211c7618013.hot-update.js.map