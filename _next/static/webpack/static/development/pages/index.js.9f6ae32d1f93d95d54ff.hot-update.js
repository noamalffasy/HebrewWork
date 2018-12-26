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
        className: "jsx-3730977165" + " " + "correct-modal-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3730977165" + " " + "correct-modal-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-3730977165",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.props.wasCorrect ? "צדקת!" : "טעית!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3730977165",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.props.question.question, " \u05D1\u05DE\u05E9\u05E4\u05D8"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3730977165",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "\u05D4", this.props.question.answerLabel, " \u05D4\u05D5\u05D0", " ", this.props.question.correctAnswer), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3730977165" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DB\u05DC \u05DE\u05E7\u05E9 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3730977165",
        css: ".correct-modal-outer.jsx-3730977165{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.correct-modal-outer.hide.jsx-3730977165{display:none;}.correct-modal-inner.jsx-3730977165{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:10rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.correct-modal-inner.jsx-3730977165 h1.jsx-3730977165{font-size:2.5rem;}.correct-modal-inner.jsx-3730977165 p.jsx-3730977165{font-size:3rem;margin:0;}.correct-modal-inner.jsx-3730977165 span.jsx-3730977165{font-size:4rem;font-weight:bold;}.correct-modal-inner.jsx-3730977165 p.call-to-action.jsx-3730977165{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0NvcnJlY3RNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENvQixBQUcrQixBQVFMLEFBSUMsQUFZRyxBQUlGLEFBS0EsQUFLRSxhQTdCbkIsQ0FJb0IsQ0FnQlQsQUFLUSxFQVRuQixBQWNnQixDQXRDRSxNQTZCbEIsT0FVa0IsQ0ExQkEsQUFxQmxCLEVBakNpQixhQXVDakIsQ0ExQlksQ0Fab0IsU0FhbkIsV0FDTyxPQWJSLFVBQ1osQ0Fhb0Isa0JBQ0Esa0JBQ3lCLHdDQUM3QyIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9Db3JyZWN0TW9kYWwudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUXVlc3Rpb25JbnRlcmZhY2UgfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgd2FzQ29ycmVjdDogYm9vbGVhbjtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uSW50ZXJmYWNlO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc09wZW46IGJvb2xlYW47XG59XG5cbmNsYXNzIFF1ZXN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuZGlzbWlzc01vZGFsID0gdGhpcy5kaXNtaXNzTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlzT3BlbjogdHJ1ZVxuICB9O1xuXG4gIGRpc21pc3NNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Bjb3JyZWN0LW1vZGFsLW91dGVyICR7IXRoaXMuc3RhdGUuaXNPcGVuID8gXCJoaWRlXCIgOiBcIlwifWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ycmVjdC1tb2RhbC1pbm5lclwiPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy53YXNDb3JyZWN0ID8gXCLXpteT16fXqiFcIiA6IFwi15jXoteZ16ohXCJ9PC9oMT5cbiAgICAgICAgICA8cD57dGhpcy5wcm9wcy5xdWVzdGlvbi5xdWVzdGlvbn0g15HXntep16TXmDwvcD5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgINeUe3RoaXMucHJvcHMucXVlc3Rpb24uYW5zd2VyTGFiZWx9INeU15XXkHtcIiBcIn1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhbGwtdG8tYWN0aW9uXCI+15zXl9elINei15wg15vXnCDXnten16kg15HXm9eT15kg15zXlNee16nXmdeaPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLW91dGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLW91dGVyLmhpZGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciB7XG4gICAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDRyZW07XG4gICAgICAgICAgICBtYXJnaW46IDEwcmVtIGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIHAuY2FsbC10by1hY3Rpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzljOWM5YztcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIl19 */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/CorrectModal.tsx */",
        __self: this
      }));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./components/Question.tsx":
/*!*********************************!*\
  !*** ./components/Question.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_keydown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-keydown */ "./node_modules/react-keydown/es/index.js");
/* harmony import */ var components_CorrectModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/CorrectModal */ "./components/CorrectModal.tsx");
/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Input */ "./components/Input.tsx");
/* harmony import */ var reduxStore_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reduxStore/actions */ "./reduxStore/actions/index.ts");
var _dec,
    _class,
    _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Question.tsx";



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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }








var Question = (_dec = Object(react_keydown__WEBPACK_IMPORTED_MODULE_3__["default"])("enter"), (_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Question, _Component);

  function Question(props) {
    var _this;

    _classCallCheck(this, Question);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Question).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: true,
      isCorrect: null
    });

    _this.checkAnswer = _this.checkAnswer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.dismissModal = _this.dismissModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Question, [{
    key: "checkAnswer",
    value: function checkAnswer() {
      var correctAnswer = this.props.question.correctAnswer;
      var userAnswer = this.answerInput.input.value;
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          isCorrect: userAnswer === correctAnswer
        });
      });

      if (userAnswer === correctAnswer) {
        this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_6__["updateEnemyHP"])(-10));
      } else {
        this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_6__["updatePlayerHP"])(-10));
      }

      this.dismissModal();
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
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_CorrectModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        onKeyDown: this.checkAnswer,
        className: "jsx-996803787" + " " + "questions-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-996803787" + " " + "questions-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "\u05E9\u05D0\u05DC\u05D4 \u05DE\u05E1\u05E4\u05E8 ", this.props.question.id), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, this.props.question.question), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, this.props.question.sentence), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-996803787" + " " + "answer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "text",
        label: this.props.question.answerLabel,
        autofocus: true,
        ref: function ref(input) {
          return _this2.answerInput = input;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-996803787" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DE\u05E7\u05E9 \u05D4\u05D0\u05E0\u05D8\u05E8 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05E9\u05D5\u05D1\u05D4")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "996803787",
        css: ".questions-outer.jsx-996803787{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.questions-outer.hide.jsx-996803787{display:none;}.questions-inner.jsx-996803787{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:10rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.questions-inner.jsx-996803787 h1.jsx-996803787{font-size:2.5rem;}.questions-inner.jsx-996803787 p.jsx-996803787{font-size:3rem;margin:0;}.questions-inner.jsx-996803787 span.jsx-996803787{font-size:4rem;font-weight:bold;}.questions-inner.jsx-996803787 .answer.jsx-996803787{font-size:2rem;width:50%;margin:1.5rem auto;}.questions-inner.jsx-996803787 p.call-to-action.jsx-996803787{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL1F1ZXN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RnNCLEFBR2lDLEFBUUwsQUFJQyxBQVlHLEFBSUYsQUFLQSxBQUtBLEFBTUUsYUFuQ25CLENBSW9CLENBZ0JULEFBS1EsQUFLUCxFQWRaLEFBb0JnQixDQTVDRSxNQTZCbEIsQ0FVcUIsTUFNSCxDQWhDQSxBQXFCbEIsRUFqQ2lCLFVBdUNqQixHQU1BLENBaENZLENBWm9CLFNBYW5CLFdBQ08sT0FiUixVQUNaLENBYW9CLGtCQUNBLGtCQUN5Qix3Q0FDN0MiLCJmaWxlIjoiL1VzZXJzL25vYW1hbGZmYXN5L0RvY3VtZW50cy9Qcm9ncmFtbWluZy9TY2hvb2wgUHJvamVjdHMvQXZvZGEgQmVJdnJpdC0yL2NvbXBvbmVudHMvUXVlc3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBrZXlkb3duIGZyb20gXCJyZWFjdC1rZXlkb3duXCI7XG5cbmltcG9ydCBDb3JyZWN0TW9kYWwgZnJvbSBcImNvbXBvbmVudHMvQ29ycmVjdE1vZGFsXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvSW5wdXRcIjtcblxuaW1wb3J0IHsgdXBkYXRlUGxheWVySFAsIHVwZGF0ZUVuZW15SFAgfSBmcm9tIFwicmVkdXhTdG9yZS9hY3Rpb25zXCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uSW50ZXJmYWNlIH0gZnJvbSBcInV0aWxzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHF1ZXN0aW9uOiBRdWVzdGlvbkludGVyZmFjZTtcbiAgZGlzcGF0Y2g6IERpc3BhdGNoO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc09wZW46IGJvb2xlYW47XG4gIGlzQ29ycmVjdDogYm9vbGVhbjtcbn1cblxuY2xhc3MgUXVlc3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jaGVja0Fuc3dlciA9IHRoaXMuY2hlY2tBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRpc21pc3NNb2RhbCA9IHRoaXMuZGlzbWlzc01vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBhbnN3ZXJJbnB1dDogSW5wdXQ7XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNPcGVuOiB0cnVlLFxuICAgIGlzQ29ycmVjdDogbnVsbFxuICB9O1xuXG4gIEBrZXlkb3duKFwiZW50ZXJcIilcbiAgY2hlY2tBbnN3ZXIoKSB7XG4gICAgY29uc3QgeyBjb3JyZWN0QW5zd2VyIH0gPSB0aGlzLnByb3BzLnF1ZXN0aW9uO1xuICAgIGNvbnN0IHVzZXJBbnN3ZXIgPSB0aGlzLmFuc3dlcklucHV0LmlucHV0LnZhbHVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIGlzQ29ycmVjdDogdXNlckFuc3dlciA9PT0gY29ycmVjdEFuc3dlclxuICAgIH0pKTtcblxuICAgIGlmICh1c2VyQW5zd2VyID09PSBjb3JyZWN0QW5zd2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUVuZW15SFAoLTEwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlUGxheWVySFAoLTEwKSk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNtaXNzTW9kYWwoKTtcbiAgfVxuXG4gIGRpc21pc3NNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxDb3JyZWN0TW9kYWwgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHF1ZXN0aW9ucy1vdXRlciAkeyF0aGlzLnN0YXRlLmlzT3BlbiA/IFwiaGlkZVwiIDogXCJcIn1gfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5jaGVja0Fuc3dlcn1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25zLWlubmVyXCI+XG4gICAgICAgICAgICA8aDE+16nXkNec15Qg157Xodek16gge3RoaXMucHJvcHMucXVlc3Rpb24uaWR9PC9oMT5cbiAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLnF1ZXN0aW9uLnF1ZXN0aW9ufTwvcD5cbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLnF1ZXN0aW9uLnNlbnRlbmNlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5xdWVzdGlvbi5hbnN3ZXJMYWJlbH1cbiAgICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICByZWY9e2lucHV0ID0+ICh0aGlzLmFuc3dlcklucHV0ID0gaW5wdXQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYWxsLXRvLWFjdGlvblwiPlxuICAgICAgICAgICAgICDXnNeX16Ug16LXnCDXnten16kg15TXkNeg15jXqCDXkdeb15PXmSDXnNeR15PXldenINeQ16og15TXqtep15XXkdeUXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnF1ZXN0aW9ucy1vdXRlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xdWVzdGlvbnMtb3V0ZXIuaGlkZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xdWVzdGlvbnMtaW5uZXIge1xuICAgICAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSA0cmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcmVtIGF1dG87XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnF1ZXN0aW9ucy1pbm5lciBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXVlc3Rpb25zLWlubmVyIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnF1ZXN0aW9ucy1pbm5lciBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnF1ZXN0aW9ucy1pbm5lciAuYW5zd2VyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDEuNXJlbSBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXVlc3Rpb25zLWlubmVyIHAuY2FsbC10by1hY3Rpb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICM5YzljOWM7XG4gICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIGNvbnN0IHsgcGxheWVyLCBlbmVteSB9ID0gc3RhdGU7XG4gIHJldHVybiB7IHBsYXllciwgZW5lbXkgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFF1ZXN0aW9uKTtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Question.tsx */",
        __self: this
      })));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), (_applyDecoratedDescriptor(_class.prototype, "checkAnswer", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "checkAnswer"), _class.prototype)), _class));

function mapStateToProps(state) {
  var player = state.player,
      enemy = state.enemy;
  return {
    player: player,
    enemy: enemy
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Question));

/***/ })

})
//# sourceMappingURL=index.js.9f6ae32d1f93d95d54ff.hot-update.js.map