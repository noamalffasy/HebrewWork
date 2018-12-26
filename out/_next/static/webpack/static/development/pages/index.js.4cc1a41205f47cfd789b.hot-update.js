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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reduxStore/actions */ "./reduxStore/actions/index.ts");
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
              showReady: false
            });
          }, function () {
            setTimeout(function () {
              _this.setState(function (prevState) {
                return _objectSpread({}, prevState, {
                  showGo: true
                });
              }, function () {
                setTimeout(function () {
                  _this.setState(function (prevState) {
                    return _objectSpread({}, prevState, {
                      showGo: false
                    });
                  }, function () {
                    _this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__["updateState"])("showQuestion"));
                  });
                }, 1000);
              });
            }, 250);
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
        className: "jsx-2903397953" + " " + "FightStart ".concat(this.props.toShow ? "show" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-2903397953" + " " + "ready ".concat(this.state.showReady ? "show" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "\u05DE\u05D5\u05DB\u05E0\u05D9\u05DD?"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-2903397953" + " " + "go ".concat(this.state.showGo ? "show" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "\u05D4\u05DC\u05D7\u05DE\u05D5!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2903397953",
        css: ".FightStart.jsx-2903397953{position:absolute;direction:rtl;margin:auto;height:15rem;width:70%;top:0;left:0;right:0;bottom:0;z-index:5;}.FightStart.show.jsx-2903397953{display:block;}.FightStart.jsx-2903397953 h1.jsx-2903397953{position:absolute;text-align:center;font-size:10rem;color:#c00;top:0;right:0;left:0;bottom:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:all 0.15s;transition:all 0.15s;}.FightStart.jsx-2903397953 h1.show.jsx-2903397953{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0ZpZ2h0U3RhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGb0IsQUFHK0IsQUFhSixBQUlJLEFBYUMsY0FoQnJCLElBYmdCLEFBaUJJLGNBaEJOLElBaUJJLFFBaEJILFFBaUJGLEtBaEJELE1BaUJKLElBaEJBLEVBaUJFLEFBU1YsSUF6QlMsSUFpQkEsR0FoQkMsSUFpQkMsSUFoQkEsS0FpQlUsSUFoQlQsVUFDWix1REFnQnVCLGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9GaWdodFN0YXJ0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgdXBkYXRlU3RhdGUgfSBmcm9tIFwicmVkdXhTdG9yZS9hY3Rpb25zXCI7XG5cbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSBcInJlZHV4XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRvU2hvdzogYm9vbGVhbjtcbiAgZGlzcGF0Y2g/OiBEaXNwYXRjaFxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBzaG93UmVhZHk6IGJvb2xlYW47XG4gIHNob3dHbzogYm9vbGVhbjtcbn1cblxuY2xhc3MgRmlnaHRTdGFydCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGUgPSB7XG4gICAgc2hvd1JlYWR5OiBmYWxzZSxcbiAgICBzaG93R286IGZhbHNlXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy50b1Nob3cgIT09IHRoaXMucHJvcHMudG9TaG93KSB7XG4gICAgICB0aGlzLnNob3dBbmltYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBzaG93QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICBwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBzaG93UmVhZHk6IHRydWVcbiAgICAgIH0pLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgcHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgc2hvd1JlYWR5OiBmYWxzZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICBwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzaG93R286IHRydWVcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0dvOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU3RhdGUoXCJzaG93UXVlc3Rpb25cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgRmlnaHRTdGFydCAke3RoaXMucHJvcHMudG9TaG93ID8gXCJzaG93XCIgOiBcIlwifWB9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgcmVhZHkgJHt0aGlzLnN0YXRlLnNob3dSZWFkeSA/IFwic2hvd1wiIDogXCJcIn1gfT5cbiAgICAgICAgICDXnteV15vXoNeZ150/XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2BnbyAke3RoaXMuc3RhdGUuc2hvd0dvID8gXCJzaG93XCIgOiBcIlwifWB9PteU15zXl9ee15UhPC9oMT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5GaWdodFN0YXJ0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5GaWdodFN0YXJ0LnNob3cge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkZpZ2h0U3RhcnQgaDEge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjYzAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuRmlnaHRTdGFydCBoMS5zaG93IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShGaWdodFN0YXJ0KTtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/FightStart.tsx */",
        __self: this
      }));
    }
  }]);

  return FightStart;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])()(FightStart));

/***/ })

})
//# sourceMappingURL=index.js.4cc1a41205f47cfd789b.hot-update.js.map