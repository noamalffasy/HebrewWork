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
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_HUD__WEBPACK_IMPORTED_MODULE_3__["default"], {
        playerHP: this.props.player.hp,
        currentEnemy: this.props.enemy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_Foreground__WEBPACK_IMPORTED_MODULE_4__["default"], {
        gameWidth: this.state.gameWidth,
        currentEnemy: this.props.enemy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1927334028",
        css: ".Game.jsx-1927334028{position:absolute;background-image:url(/static/img/background.jpg);height:100%;width:100%;z-index:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0dhbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Eb0IsQUFHK0Isa0JBQytCLGlEQUNyQyxZQUNELFdBQ0QsVUFDWiIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9HYW1lLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IEhVRCBmcm9tIFwiY29tcG9uZW50cy8vSFVEXCI7XG5pbXBvcnQgRm9yZWdyb3VuZCBmcm9tIFwiY29tcG9uZW50cy9Gb3JlZ3JvdW5kXCI7XG5cbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBPcHBvbmVudEludGVyZmFjZSB9IGZyb20gXCJ1dGlscy90eXBlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwbGF5ZXI6IE9wcG9uZW50SW50ZXJmYWNlO1xuICBlbmVteTogT3Bwb25lbnRJbnRlcmZhY2U7XG4gIGRpc3BhdGNoOiBEaXNwYXRjaDtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgZ2FtZVdpZHRoOiBudW1iZXI7XG59XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIGdhbWVXaWR0aDogMTQyMFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBnYW1lV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgfSkpO1xuICB9XG5cbiAgY2hhbmdlRW5lbXkgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIGN1cnJlbnRFbmVteToge1xuICAgICAgICBocDogMTAwLFxuICAgICAgICBuYW1lOiBcIteQ15zXmdei15bXqCDXkdefINeZ15TXldeT15RcIixcbiAgICAgICAgc3JjTmFtZTogXCJlbGlhemVyX2Jlbl9qdWRhaFwiXG4gICAgICB9XG4gICAgfSkpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lXCI+XG4gICAgICAgIDxIVUQgcGxheWVySFA9e3RoaXMucHJvcHMucGxheWVyLmhwfSBjdXJyZW50RW5lbXk9e3RoaXMucHJvcHMuZW5lbXl9IC8+XG4gICAgICAgIDxGb3JlZ3JvdW5kXG4gICAgICAgICAgZ2FtZVdpZHRoPXt0aGlzLnN0YXRlLmdhbWVXaWR0aH1cbiAgICAgICAgICBjdXJyZW50RW5lbXk9e3RoaXMucHJvcHMuZW5lbXl9XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuR2FtZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWcvYmFja2dyb3VuZC5qcGcpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgY29uc3QgeyBwbGF5ZXIsIGVuZW15IH0gPSBzdGF0ZTtcbiAgcmV0dXJuIHsgcGxheWVyLCBlbmVteSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoR2FtZSk7XG4iXX0= */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Game.tsx */",
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

/***/ })

})
//# sourceMappingURL=index.js.b40d5f7a93c3cb573426.hot-update.js.map