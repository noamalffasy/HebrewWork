webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Foreground.tsx":
/*!***********************************!*\
  !*** ./components/Foreground.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Foreground.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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





var Foreground =
/*#__PURE__*/
function (_Component) {
  _inherits(Foreground, _Component);

  function Foreground() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Foreground);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Foreground)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isEnemyHidden: false
    });

    return _this;
  }

  _createClass(Foreground, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var state = nextProps.state;

      if (state === "changeEnemy" && state !== this.props.state) {
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            isEnemyHidden: true
          });
        }, function () {
          setTimeout(function () {
            _this2.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                isEnemyHidden: false
              });
            });
          }, 1000);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var numGrassBlocks = Math.ceil(this.props.gameWidth / 70);
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4267041994", [numGrassBlocks]]]) + " " + "Foreground",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        src: "/static/img/character/body.png",
        alt: "\u05E9\u05D7\u05E7\u05DF",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4267041994", [numGrassBlocks]]]) + " " + "opponent player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        src: "/static/img/".concat(this.props.currentEnemy.srcName, "/body.png"),
        alt: "\u05D0\u05D5\u05D9\u05D1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4267041994", [numGrassBlocks]]]) + " " + "opponent enemy ".concat(this.state.isEnemyHidden ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4267041994", [numGrassBlocks]]]) + " " + "grass",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, _toConsumableArray(Array(numGrassBlocks)).map(function (_, i) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: "/static/img/grass.png",
          alt: "\u05D0\u05D3\u05DE\u05D4",
          key: i,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4267041994", [numGrassBlocks]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4267041994",
        css: ".Foreground.__jsx-style-dynamic-selector{position:absolute;width:100%;left:0;bottom:0;}.Foreground.__jsx-style-dynamic-selector img.opponent.__jsx-style-dynamic-selector{width:10rem;height:10rem;margin:0 1rem -0.2rem;}.Foreground.__jsx-style-dynamic-selector img.opponent.enemy.__jsx-style-dynamic-selector{margin:0 1rem -0.2rem;float:right;}.Foreground.__jsx-style-dynamic-selector .grass.__jsx-style-dynamic-selector{width:100%;}.Foreground.__jsx-style-dynamic-selector .grass.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:calc(100% / ".concat(numGrassBlocks, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0ZvcmVncm91bmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFb0IsQUFHK0IsQUFPTixBQU1VLEFBS1gsQUFJcUMsV0FIbEQsQ0FYZSxNQVBGLElBYUMsR0FMVSxJQVBmLEtBYVQsRUFaVyxTQUNYLEVBTUEsQ0FhQSIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9Gb3JlZ3JvdW5kLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgU3RvcmVJbnRlcmZhY2UgfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZ2FtZVdpZHRoOiBudW1iZXI7XG4gIGN1cnJlbnRFbmVteToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzcmNOYW1lOiBzdHJpbmc7XG4gIH07XG4gIHN0YXRlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGlzRW5lbXlIaWRkZW46IGJvb2xlYW47XG59XG5cbmNsYXNzIEZvcmVncm91bmQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIGlzRW5lbXlIaWRkZW46IGZhbHNlXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gbmV4dFByb3BzO1xuXG4gICAgaWYgKHN0YXRlID09PSBcImNoYW5nZUVuZW15XCIgJiYgc3RhdGUgIT09IHRoaXMucHJvcHMuc3RhdGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICBpc0VuZW15SGlkZGVuOiB0cnVlXG4gICAgICAgIH0pLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAgIGlzRW5lbXlIaWRkZW46IGZhbHNlXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG51bUdyYXNzQmxvY2tzID0gTWF0aC5jZWlsKHRoaXMucHJvcHMuZ2FtZVdpZHRoIC8gNzApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9yZWdyb3VuZFwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3Bwb25lbnQgcGxheWVyXCJcbiAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltZy9jaGFyYWN0ZXIvYm9keS5wbmdcIlxuICAgICAgICAgIGFsdD1cItep15fXp9efXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YG9wcG9uZW50IGVuZW15ICR7dGhpcy5zdGF0ZS5pc0VuZW15SGlkZGVuID8gXCJoaWRlXCIgOiBcIlwifWB9XG4gICAgICAgICAgc3JjPXtgL3N0YXRpYy9pbWcvJHt0aGlzLnByb3BzLmN1cnJlbnRFbmVteS5zcmNOYW1lfS9ib2R5LnBuZ2B9XG4gICAgICAgICAgYWx0PVwi15DXldeZ15FcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXNzXCI+XG4gICAgICAgICAge1suLi5BcnJheShudW1HcmFzc0Jsb2NrcyldLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvZ3Jhc3MucG5nXCIgYWx0PVwi15DXk9ee15RcIiBrZXk9e2l9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5Gb3JlZ3JvdW5kIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuRm9yZWdyb3VuZCBpbWcub3Bwb25lbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtIC0wLjJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkZvcmVncm91bmQgaW1nLm9wcG9uZW50LmVuZW15IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtIC0wLjJyZW07XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkZvcmVncm91bmQgLmdyYXNzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5Gb3JlZ3JvdW5kIC5ncmFzcyBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvICR7bnVtR3Jhc3NCbG9ja3N9KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZUludGVyZmFjZSkge1xuICBjb25zdCB7IHN0YXRlOiBnYW1lU3RhdGUgfSA9IHN0YXRlO1xuICByZXR1cm4geyBzdGF0ZTogZ2FtZVN0YXRlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShGb3JlZ3JvdW5kKTtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Foreground.tsx */"),
        dynamic: [numGrassBlocks],
        __self: this
      }));
    }
  }]);

  return Foreground;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapStateToProps(state) {
  var gameState = state.state;
  return {
    state: gameState
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Foreground));

/***/ })

})
//# sourceMappingURL=index.js.0fb94760b44bf07e159d.hot-update.js.map