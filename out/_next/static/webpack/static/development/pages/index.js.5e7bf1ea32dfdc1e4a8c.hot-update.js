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
        className: "jsx-2120051597" + " " + "end-outer ".concat(this.props.toShow ? "show" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2120051597" + " " + "end-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-2120051597",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, didWin ? "ניצחת!" : "הפסדת!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-2120051597",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, didWin ? "הצלחת לענות נכון על כל השאלות ולהביס את כל האויבים" : "לא הצלחת לענות נכון על כל השאלות"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-2120051597",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, didWin ? "כל הכבוד!" : "תרצה לנסות שוב?"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-2120051597" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "\u05EA\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05D3\u05E3 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05E9\u05D7\u05E7 \u05E9\u05D5\u05D1")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2120051597",
        css: ".end-outer.jsx-2120051597{position:absolute;display:none;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.end-outer.show.jsx-2120051597{display:block;}.end-inner.jsx-2120051597{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:4rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.end-inner.jsx-2120051597 h1.jsx-2120051597{font-size:4rem;}.end-inner.jsx-2120051597 p.jsx-2120051597{font-size:2rem;}.end-inner.jsx-2120051597 span.jsx-2120051597{font-size:3rem;font-weight:bold;}.end-inner.jsx-2120051597 p.call-to-action.jsx-2120051597{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0VuZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJvQixBQUcrQixBQVNKLEFBSUEsQUFZQyxBQUlBLEFBSUEsQUFLRSxjQTVCbkIsQUFJb0IsQ0FZcEIsQUFJQSxBQUltQixFQUtILENBdENELGFBQ0csQUFzQ0EsQ0F6QkEsQUFvQmxCLGVBaENpQixBQXNDakIsQ0F6QlksVUFDQyxJQWJtQixPQWNaLGtCQUNELEVBZFAsVUFDWixLQWNvQixrQkFDeUIsd0NBQzdDIiwiZmlsZSI6Ii9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0VuZC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0b1Nob3c6IGJvb2xlYW47XG4gIGRpZFdpbjogYm9vbGVhbjtcbn1cblxuY2xhc3MgRW5kIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpZFdpbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BlbmQtb3V0ZXIgJHt0aGlzLnByb3BzLnRvU2hvdyA/IFwic2hvd1wiIDogXCJcIn1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbmQtaW5uZXJcIj5cbiAgICAgICAgICA8aDE+e2RpZFdpbiA/IFwi16DXmdem15fXqiFcIiA6IFwi15TXpNeh15PXqiFcIn08L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2RpZFdpblxuICAgICAgICAgICAgICA/IFwi15TXptec15fXqiDXnNei16DXldeqINeg15vXldefINei15wg15vXnCDXlNep15DXnNeV16og15XXnNeU15HXmdehINeQ16og15vXnCDXlNeQ15XXmdeR15nXnVwiXG4gICAgICAgICAgICAgIDogXCLXnNeQINeU16bXnNeX16og15zXoteg15XXqiDXoNeb15XXnyDXotecINeb15wg15TXqdeQ15zXldeqXCJ9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxzcGFuPntkaWRXaW4gPyBcIteb15wg15TXm9eR15XXkyFcIiA6IFwi16rXqNem15Qg15zXoNeh15XXqiDXqdeV15E/XCJ9PC9zcGFuPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhbGwtdG8tYWN0aW9uXCI+16rXqNei16DXnyDXkNeqINeU15PXoyDXkdeb15PXmSDXnNep15fXpyDXqdeV15E8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmVuZC1vdXRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVuZC1vdXRlci5zaG93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lbmQtaW5uZXIge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbSA0cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiA0cmVtIGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lbmQtaW5uZXIgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lbmQtaW5uZXIgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVuZC1pbm5lciBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lbmQtaW5uZXIgcC5jYWxsLXRvLWFjdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjOWM5YzljO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5kO1xuIl19 */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/End.tsx */",
        __self: this
      }));
    }
  }]);

  return End;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (End);

/***/ })

})
//# sourceMappingURL=index.js.5e7bf1ea32dfdc1e4a8c.hot-update.js.map