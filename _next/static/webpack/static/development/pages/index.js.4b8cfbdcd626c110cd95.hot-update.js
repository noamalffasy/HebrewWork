webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FightStart.tsx":
/*!***********************************!*\
  !*** ./components/FightStart.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/FightStart.tsx";


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




var FightStart =
/*#__PURE__*/
function (_Component) {
  _inherits(FightStart, _Component);

  function FightStart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FightStart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FightStart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showReady: false,
      showGo: false
    });

    return _this;
  }

  _createClass(FightStart, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.toShow !== this.props.toShow) {
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            showReady: true
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2170261197" + " " + "FightStart ".concat(this.props.toShow ? "show" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-2170261197" + " " + "ready ".concat(this.state.showReady ? "show" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u05DE\u05D5\u05DB\u05E0\u05D9\u05DD?"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-2170261197" + " " + "go ".concat(this.state.showGo ? "show" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "\u05D4\u05DC\u05D7\u05DE\u05D5!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2170261197",
        css: ".FightStart.jsx-2170261197{position:absolute;direction:rtl;margin:auto;height:15rem;width:70%;top:0;left:0;right:0;bottom:0;z-index:5;}.FightStart.show.jsx-2170261197{display:block;}.FightStart.jsx-2170261197 h1.jsx-2170261197{text-align:center;font-size:10rem;color:#c00;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:all 0.3s;transition:all 0.3s;}.FightStart.jsx-2170261197 h1.show.jsx-2170261197{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.FightStart.jsx-2170261197 h1.go.jsx-2170261197{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0ZpZ2h0U3RhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFHK0IsQUFhSixBQUlJLEFBUUMsQUFJTixhQUNmLENBaEJBLElBYmdCLEFBaUJFLGNBaEJKLEVBaUJELFVBaEJFLENBaUJNLFlBaEJULFVBQ0osRUFxQlIsSUFwQlMsT0FDQyxRQUNDLFNBQ0MsVUFDWixPQVdzQixnREFDdEIiLCJmaWxlIjoiL1VzZXJzL25vYW1hbGZmYXN5L0RvY3VtZW50cy9Qcm9ncmFtbWluZy9TY2hvb2wgUHJvamVjdHMvQXZvZGEgQmVJdnJpdC0yL2NvbXBvbmVudHMvRmlnaHRTdGFydC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0b1Nob3c6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHNob3dSZWFkeTogYm9vbGVhbjtcbiAgc2hvd0dvOiBib29sZWFuO1xufVxuXG5jbGFzcyBGaWdodFN0YXJ0IGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHtcbiAgICBzaG93UmVhZHk6IGZhbHNlLFxuICAgIHNob3dHbzogZmFsc2VcbiAgfTtcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnRvU2hvdyAhPT0gdGhpcy5wcm9wcy50b1Nob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgc2hvd1JlYWR5OiB0cnVlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YEZpZ2h0U3RhcnQgJHt0aGlzLnByb3BzLnRvU2hvdyA/IFwic2hvd1wiIDogXCJcIn1gfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YHJlYWR5ICR7dGhpcy5zdGF0ZS5zaG93UmVhZHkgPyBcInNob3dcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAg157Xldeb16DXmdedP1xuICAgICAgICA8L2gxPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgZ28gJHt0aGlzLnN0YXRlLnNob3dHbyA/IFwic2hvd1wiIDogXCJcIn1gfT7XlNec15fXnteVITwvaDE+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuRmlnaHRTdGFydCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuRmlnaHRTdGFydC5zaG93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5GaWdodFN0YXJ0IGgxIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTByZW07XG4gICAgICAgICAgICBjb2xvcjogI2MwMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuRmlnaHRTdGFydCBoMS5zaG93IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkZpZ2h0U3RhcnQgaDEuZ28ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlnaHRTdGFydDtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/FightStart.tsx */",
        __self: this
      }));
    }
  }]);

  return FightStart;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FightStart);

/***/ })

})
//# sourceMappingURL=index.js.4b8cfbdcd626c110cd95.hot-update.js.map