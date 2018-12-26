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
/* harmony import */ var reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reduxStore/actions */ "./reduxStore/actions/index.ts");
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Foreground.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Foreground =
/*#__PURE__*/
function (_Component) {
  _inherits(Foreground, _Component);

  function Foreground() {
    _classCallCheck(this, Foreground);

    return _possibleConstructorReturn(this, _getPrototypeOf(Foreground).apply(this, arguments));
  }

  _createClass(Foreground, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.state === "attack") {
        this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__["updateState"])("showQuestion"));
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
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        src: "/static/img/character/body.png",
        alt: "\u05E9\u05D7\u05E7\u05DF",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4267041994", [numGrassBlocks]]]) + " " + "opponent player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        src: "/static/img/".concat(this.props.currentEnemy.srcName, "/body.png"),
        alt: "\u05D0\u05D5\u05D9\u05D1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4267041994", [numGrassBlocks]]]) + " " + "opponent enemy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4267041994", [numGrassBlocks]]]) + " " + "grass",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
            lineNumber: 44
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4267041994",
        css: ".Foreground.__jsx-style-dynamic-selector{position:absolute;width:100%;left:0;bottom:0;}.Foreground.__jsx-style-dynamic-selector img.opponent.__jsx-style-dynamic-selector{width:10rem;height:10rem;margin:0 1rem -0.2rem;}.Foreground.__jsx-style-dynamic-selector img.opponent.enemy.__jsx-style-dynamic-selector{margin:0 1rem -0.2rem;float:right;}.Foreground.__jsx-style-dynamic-selector .grass.__jsx-style-dynamic-selector{width:100%;}.Foreground.__jsx-style-dynamic-selector .grass.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:calc(100% / ".concat(numGrassBlocks, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0ZvcmVncm91bmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDb0IsQUFHK0IsQUFPTixBQU1VLEFBS1gsQUFJcUMsV0FIbEQsQ0FYZSxNQVBGLElBYUMsR0FMVSxJQVBmLEtBYVQsRUFaVyxTQUNYLEVBTUEsQ0FhQSIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9Gb3JlZ3JvdW5kLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgU3RvcmVJbnRlcmZhY2UgfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyB1cGRhdGVTdGF0ZSB9IGZyb20gXCJyZWR1eFN0b3JlL2FjdGlvbnNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZ2FtZVdpZHRoOiBudW1iZXI7XG4gIGN1cnJlbnRFbmVteToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzcmNOYW1lOiBzdHJpbmc7XG4gIH07XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGRpc3BhdGNoOiBEaXNwYXRjaDtcbn1cblxuY2xhc3MgRm9yZWdyb3VuZCBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnN0YXRlID09PSBcImF0dGFja1wiKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0YXRlKFwic2hvd1F1ZXN0aW9uXCIpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbnVtR3Jhc3NCbG9ja3MgPSBNYXRoLmNlaWwodGhpcy5wcm9wcy5nYW1lV2lkdGggLyA3MCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb3JlZ3JvdW5kXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJvcHBvbmVudCBwbGF5ZXJcIlxuICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1nL2NoYXJhY3Rlci9ib2R5LnBuZ1wiXG4gICAgICAgICAgYWx0PVwi16nXl9en159cIlxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3Bwb25lbnQgZW5lbXlcIlxuICAgICAgICAgIHNyYz17YC9zdGF0aWMvaW1nLyR7dGhpcy5wcm9wcy5jdXJyZW50RW5lbXkuc3JjTmFtZX0vYm9keS5wbmdgfVxuICAgICAgICAgIGFsdD1cIteQ15XXmdeRXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFzc1wiPlxuICAgICAgICAgIHtbLi4uQXJyYXkobnVtR3Jhc3NCbG9ja3MpXS5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2dyYXNzLnBuZ1wiIGFsdD1cIteQ15PXnteUXCIga2V5PXtpfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuRm9yZWdyb3VuZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkZvcmVncm91bmQgaW1nLm9wcG9uZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTByZW07XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAtMC4ycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5Gb3JlZ3JvdW5kIGltZy5vcHBvbmVudC5lbmVteSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAtMC4ycmVtO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5Gb3JlZ3JvdW5kIC5ncmFzcyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuRm9yZWdyb3VuZCAuZ3Jhc3MgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAke251bUdyYXNzQmxvY2tzfSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdG9yZTogU3RvcmVJbnRlcmZhY2UpIHtcbiAgcmV0dXJuIHsgc3RhdGU6IHN0b3JlLnN0YXRlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShGb3JlZ3JvdW5kKTtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Foreground.tsx */"),
        dynamic: [numGrassBlocks],
        __self: this
      }));
    }
  }]);

  return Foreground;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapStateToProps(store) {
  return {
    state: store.state
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Foreground));

/***/ })

})
//# sourceMappingURL=index.js.51d85bcfd25f4b520d3f.hot-update.js.map