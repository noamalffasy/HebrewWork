webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Question.tsx":
/*!*********************************!*\
  !*** ./components/Question.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_keydown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-keydown */ "./node_modules/react-keydown/es/index.js");
/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Input */ "./components/Input.tsx");
/* harmony import */ var reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reduxStore/actions */ "./reduxStore/actions/index.ts");
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







var Question = (_dec = Object(react_keydown__WEBPACK_IMPORTED_MODULE_2__["default"])("enter"), (_class =
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
        this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__["updateEnemyHP"])(-10));
      } else {
        this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__["updatePlayerHP"])(-10));
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

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "questions-outer ".concat(!this.state.isOpen ? "hide" : ""),
        onKeyDown: this.checkAnswer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "questions-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "\u05E9\u05D0\u05DC\u05D4 \u05DE\u05E1\u05E4\u05E8 ", this.props.question.id), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, this.props.question.question), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.props.question.sentence), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "answer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "text",
        label: this.props.question.answerLabel,
        autofocus: true,
        ref: function ref(input) {
          return _this2.answerInput = input;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        className: "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DE\u05E7\u05E9 \u05D4\u05D0\u05E0\u05D8\u05E8 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05E9\u05D5\u05D1\u05D4"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\n          .questions-outer {\n            position: absolute;\n            min-height: 100%;\n            min-width: 100%;\n            background: rgba(0, 0, 0, 0.4);\n            z-index: 2;\n          }\n\n          .questions-outer.hide {\n            display: none;\n          }\n\n          .questions-inner {\n            direction: rtl;\n            text-align: center;\n            background: #fff;\n            width: 90%;\n            height: 70%;\n            padding: 2rem 4rem;\n            margin: 10rem auto;\n            border-radius: 2px;\n            box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.15);\n          }\n\n          .questions-inner h1 {\n            font-size: 2.5rem;\n          }\n\n          .questions-inner p {\n            font-size: 3rem;\n            margin: 0;\n          }\n\n          .questions-inner span {\n            font-size: 4rem;\n            font-weight: bold;\n          }\n\n          .questions-inner .answer {\n            font-size: 2rem;\n            width: 50%;\n            margin: 1.5rem auto;\n          }\n\n          .questions-inner p.call-to-action {\n            font-size: 1.5rem;\n            color: #9c9c9c;\n            margin: 1rem 0 0;\n          }\n        "));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), (_applyDecoratedDescriptor(_class.prototype, "checkAnswer", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "checkAnswer"), _class.prototype)), _class));

function mapStateToProps(state) {
  var player = state.player,
      enemy = state.enemy;
  return {
    player: player,
    enemy: enemy
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Question));

/***/ })

})
//# sourceMappingURL=index.js.12b8b8220ad62570fa9d.hot-update.js.map