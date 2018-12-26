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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showAnimation", function () {
      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          showReady: true
        });
      }, function () {
        setTimeout(function () {
          _this.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              showReady: false,
              showGo: true
            });
          });
        }, 1500);
      });
    });

    return _this;
  }

  _createClass(FightStart, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.toShow !== this.props.toShow) {
        this.showAnimation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2510438794" + " " + "FightStart ".concat(this.props.toShow ? "show" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-2510438794" + " " + "ready ".concat(this.state.showReady ? "show" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u05DE\u05D5\u05DB\u05E0\u05D9\u05DD?"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-2510438794" + " " + "go ".concat(this.state.showGo ? "show" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u05D4\u05DC\u05D7\u05DE\u05D5!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2510438794",
        css: ".FightStart.jsx-2510438794{position:absolute;direction:rtl;margin:auto;height:15rem;width:70%;top:0;left:0;right:0;bottom:0;z-index:5;}.FightStart.show.jsx-2510438794{display:block;}.FightStart.jsx-2510438794 h1.jsx-2510438794{position:absolute;text-align:center;font-size:10rem;color:#c00;top:0;right:0;left:0;bottom:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:all 0.3s;transition:all 0.3s;}.FightStart.jsx-2510438794 h1.show.jsx-2510438794{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0ZpZ2h0U3RhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEb0IsQUFHK0IsQUFhSixBQUlJLEFBYUMsY0FoQnJCLElBYmdCLEFBaUJJLGNBaEJOLElBaUJJLFFBaEJILFFBaUJGLEtBaEJELE1BaUJKLElBaEJBLEVBaUJFLEFBU1YsSUF6QlMsSUFpQkEsR0FoQkMsSUFpQkMsSUFoQkEsS0FpQlUsSUFoQlQsVUFDWix1REFnQnNCLGdEQUN0QiIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9GaWdodFN0YXJ0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRvU2hvdzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc2hvd1JlYWR5OiBib29sZWFuO1xuICBzaG93R286IGJvb2xlYW47XG59XG5cbmNsYXNzIEZpZ2h0U3RhcnQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIHNob3dSZWFkeTogZmFsc2UsXG4gICAgc2hvd0dvOiBmYWxzZVxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMudG9TaG93ICE9PSB0aGlzLnByb3BzLnRvU2hvdykge1xuICAgICAgdGhpcy5zaG93QW5pbWF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0FuaW1hdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgcHJldlN0YXRlID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgc2hvd1JlYWR5OiB0cnVlXG4gICAgICB9KSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIHNob3dSZWFkeTogZmFsc2UsXG4gICAgICAgICAgICBzaG93R286IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YEZpZ2h0U3RhcnQgJHt0aGlzLnByb3BzLnRvU2hvdyA/IFwic2hvd1wiIDogXCJcIn1gfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YHJlYWR5ICR7dGhpcy5zdGF0ZS5zaG93UmVhZHkgPyBcInNob3dcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAg157Xldeb16DXmdedP1xuICAgICAgICA8L2gxPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgZ28gJHt0aGlzLnN0YXRlLnNob3dHbyA/IFwic2hvd1wiIDogXCJcIn1gfT7XlNec15fXnteVITwvaDE+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuRmlnaHRTdGFydCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuRmlnaHRTdGFydC5zaG93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5GaWdodFN0YXJ0IGgxIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTByZW07XG4gICAgICAgICAgICBjb2xvcjogI2MwMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuRmlnaHRTdGFydCBoMS5zaG93IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZ2h0U3RhcnQ7XG4iXX0= */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/FightStart.tsx */",
        __self: this
      }));
    }
  }]);

  return FightStart;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FightStart);

/***/ })

})
//# sourceMappingURL=index.js.8c15fbfff35d603175e1.hot-update.js.map