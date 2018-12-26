webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CorrectModal.tsx":
/*!*************************************!*\
  !*** ./components/CorrectModal.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/CorrectModal.tsx";


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




var Question =
/*#__PURE__*/
function (_Component) {
  _inherits(Question, _Component);

  function Question(props) {
    var _this;

    _classCallCheck(this, Question);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Question).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: true
    });

    _this.dismissModal = _this.dismissModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Question, [{
    key: "dismissModal",
    value: function dismissModal() {
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          isOpen: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3949944500" + " " + "correct-modal-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3949944500" + " " + "correct-modal-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-3949944500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.props.isCorrect ? "צדקת!" : "טעית!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3949944500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.props.question.question, " \u05D1\u05DE\u05E9\u05E4\u05D8"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3949944500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "\u05D4", this.props.question.answerLabel, " \u05D4\u05D5\u05D0", " ", this.props.question.correctAnswer), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3949944500" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DB\u05DC \u05DE\u05E7\u05E9 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3949944500",
        css: ".correct-modal-outer.jsx-3949944500{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.correct-modal-outer.hide.jsx-3949944500{display:none;}.correct-modal-inner.jsx-3949944500{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:10rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.correct-modal-inner.jsx-3949944500 h1.jsx-3949944500{font-size:2.5rem;}.correct-modal-inner.jsx-3949944500 p.jsx-3949944500{font-size:3rem;margin:0;}.correct-modal-inner.jsx-3949944500 span.jsx-3949944500{font-size:4rem;font-weight:bold;}.correct-modal-inner.jsx-3949944500 p.call-to-action.jsx-3949944500{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0NvcnJlY3RNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENvQixBQUcrQixBQVFMLEFBSUMsQUFZRyxBQUlGLEFBS0EsQUFLRSxhQTdCbkIsQ0FJb0IsQ0FnQlQsQUFLUSxFQVRuQixBQWNnQixDQXRDRSxNQTZCbEIsT0FVa0IsQ0ExQkEsQUFxQmxCLEVBakNpQixhQXVDakIsQ0ExQlksQ0Fab0IsU0FhbkIsV0FDTyxPQWJSLFVBQ1osQ0Fhb0Isa0JBQ0Esa0JBQ3lCLHdDQUM3QyIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9Db3JyZWN0TW9kYWwudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUXVlc3Rpb25JbnRlcmZhY2UgfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNDb3JyZWN0OiBib29sZWFuO1xuICBxdWVzdGlvbjogUXVlc3Rpb25JbnRlcmZhY2U7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbn1cblxuY2xhc3MgUXVlc3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5kaXNtaXNzTW9kYWwgPSB0aGlzLmRpc21pc3NNb2RhbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNPcGVuOiB0cnVlXG4gIH07XG5cbiAgZGlzbWlzc01vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBpc09wZW46IGZhbHNlXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNvcnJlY3QtbW9kYWwtb3V0ZXIgJHshdGhpcy5zdGF0ZS5pc09wZW4gPyBcImhpZGVcIiA6IFwiXCJ9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3JyZWN0LW1vZGFsLWlubmVyXCI+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmlzQ29ycmVjdCA/IFwi16bXk9en16ohXCIgOiBcIteY16LXmdeqIVwifTwvaDE+XG4gICAgICAgICAgPHA+e3RoaXMucHJvcHMucXVlc3Rpb24ucXVlc3Rpb259INeR157Xqdek15g8L3A+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICDXlHt0aGlzLnByb3BzLnF1ZXN0aW9uLmFuc3dlckxhYmVsfSDXlNeV15B7XCIgXCJ9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5xdWVzdGlvbi5jb3JyZWN0QW5zd2VyfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYWxsLXRvLWFjdGlvblwiPtec15fXpSDXotecINeb15wg157Xp9epINeR15vXk9eZINec15TXntep15nXmjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1vdXRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1vdXRlci5oaWRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtaW5uZXIge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbSA0cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHJlbSBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIHAuY2FsbC10by1hY3Rpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzljOWM5YztcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIl19 */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/CorrectModal.tsx */",
        __self: this
      }));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})
//# sourceMappingURL=index.js.146ce57591677fa138e1.hot-update.js.map