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
      isOpen: _this.props.isOpen
    });

    _this.dismissModal = _this.dismissModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Question, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen !== this.props.isOpen) {
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            isOpen: nextProps.isOpen
          });
        });
      }
    }
  }, {
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
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3949944500" + " " + "correct-modal-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-3949944500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.props.isCorrect ? "צדקת!" : "טעית!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3949944500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "\u05D1\u05DE\u05E9\u05E4\u05D8 ", this.props.question.sentence), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3949944500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u05D4", this.props.question.answerLabel, " \u05D4\u05D5\u05D0", " ", this.props.question.correctAnswer), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3949944500" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DB\u05DC \u05DE\u05E7\u05E9 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3949944500",
        css: ".correct-modal-outer.jsx-3949944500{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.correct-modal-outer.hide.jsx-3949944500{display:none;}.correct-modal-inner.jsx-3949944500{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:10rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.correct-modal-inner.jsx-3949944500 h1.jsx-3949944500{font-size:2.5rem;}.correct-modal-inner.jsx-3949944500 p.jsx-3949944500{font-size:3rem;margin:0;}.correct-modal-inner.jsx-3949944500 span.jsx-3949944500{font-size:4rem;font-weight:bold;}.correct-modal-inner.jsx-3949944500 p.call-to-action.jsx-3949944500{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0NvcnJlY3RNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RvQixBQUcrQixBQVFMLEFBSUMsQUFZRyxBQUlGLEFBS0EsQUFLRSxhQTdCbkIsQ0FJb0IsQ0FnQlQsQUFLUSxFQVRuQixBQWNnQixDQXRDRSxNQTZCbEIsT0FVa0IsQ0ExQkEsQUFxQmxCLEVBakNpQixhQXVDakIsQ0ExQlksQ0Fab0IsU0FhbkIsV0FDTyxPQWJSLFVBQ1osQ0Fhb0Isa0JBQ0Esa0JBQ3lCLHdDQUM3QyIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9Db3JyZWN0TW9kYWwudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUXVlc3Rpb25JbnRlcmZhY2UgfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBpc0NvcnJlY3Q6IGJvb2xlYW47XG4gIHF1ZXN0aW9uOiBRdWVzdGlvbkludGVyZmFjZTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNPcGVuOiBib29sZWFuO1xufVxuXG5jbGFzcyBRdWVzdGlvbiBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmRpc21pc3NNb2RhbCA9IHRoaXMuZGlzbWlzc01vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpc09wZW46IHRoaXMucHJvcHMuaXNPcGVuXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5pc09wZW4gIT09IHRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGlzT3BlbjogbmV4dFByb3BzLmlzT3BlblxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGRpc21pc3NNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Bjb3JyZWN0LW1vZGFsLW91dGVyICR7IXRoaXMuc3RhdGUuaXNPcGVuID8gXCJoaWRlXCIgOiBcIlwifWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ycmVjdC1tb2RhbC1pbm5lclwiPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5pc0NvcnJlY3QgPyBcItem15PXp9eqIVwiIDogXCLXmNei15nXqiFcIn08L2gxPlxuICAgICAgICAgIDxwPteR157Xqdek15gge3RoaXMucHJvcHMucXVlc3Rpb24uc2VudGVuY2V9PC9wPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAg15R7dGhpcy5wcm9wcy5xdWVzdGlvbi5hbnN3ZXJMYWJlbH0g15TXldeQe1wiIFwifVxuICAgICAgICAgICAge3RoaXMucHJvcHMucXVlc3Rpb24uY29ycmVjdEFuc3dlcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FsbC10by1hY3Rpb25cIj7XnNeX16Ug16LXnCDXm9ecINee16fXqSDXkdeb15PXmSDXnNeU157XqdeZ15o8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtb3V0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtb3V0ZXIuaGlkZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMTByZW0gYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtaW5uZXIgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtaW5uZXIgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtaW5uZXIgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciBwLmNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM5YzljOWM7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/CorrectModal.tsx */",
        __self: this
      }));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})
//# sourceMappingURL=index.js.d2df91d2ce52e754b040.hot-update.js.map