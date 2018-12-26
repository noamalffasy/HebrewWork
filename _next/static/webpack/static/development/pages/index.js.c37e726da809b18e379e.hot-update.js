webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_keydown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-keydown */ "./node_modules/react-keydown/es/index.js");
/* harmony import */ var components_CorrectModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/CorrectModal */ "./components/CorrectModal.tsx");
/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Input */ "./components/Input.tsx");
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






var Question = (_dec = Object(react_keydown__WEBPACK_IMPORTED_MODULE_2__["keydownScoped"])(react_keydown__WEBPACK_IMPORTED_MODULE_2__["Keys"].ENTER), (_class =
/*#__PURE__*/
function (_Component) {
  _inherits(Question, _Component);

  function Question(props) {
    var _this;

    _classCallCheck(this, Question);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Question).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: _this.props.toShow,
      isCorrect: null,
      showCorrectModal: false
    });

    _this.checkAnswer = _this.checkAnswer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.dismissModal = _this.dismissModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Question, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.toShow !== this.state.isOpen) {
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            isOpen: nextProps.toShow
          });
        });
      }
    }
  }, {
    key: "checkAnswer",
    value: function checkAnswer(e) {
      if (e.key === "Enter" && this.state.isOpen) {
        var correctAnswer = this.props.question.correctAnswer;
        var userAnswer = this.answerInput.input.value;
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            isCorrect: userAnswer === correctAnswer,
            showCorrectModal: true
          });
        });
        this.dismissModal();
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
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_CorrectModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isOpen: this.state.showCorrectModal,
        isCorrect: this.state.isCorrect,
        question: this.props.question,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        onKeyDown: this.checkAnswer,
        className: "jsx-996803787" + " " + "questions-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-996803787" + " " + "questions-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "\u05E9\u05D0\u05DC\u05D4 \u05DE\u05E1\u05E4\u05E8 ", this.props.question.id), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, this.props.question.question), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, this.props.question.sentence), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-996803787" + " " + "answer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "text",
        label: this.props.question.answerLabel,
        autofocus: true,
        ref: function ref(input) {
          return _this2.answerInput = input;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-996803787" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DE\u05E7\u05E9 \u05D4\u05D0\u05E0\u05D8\u05E8 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05E9\u05D5\u05D1\u05D4")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "996803787",
        css: ".questions-outer.jsx-996803787{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.questions-outer.hide.jsx-996803787{display:none;}.questions-inner.jsx-996803787{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:10rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.questions-inner.jsx-996803787 h1.jsx-996803787{font-size:2.5rem;}.questions-inner.jsx-996803787 p.jsx-996803787{font-size:3rem;margin:0;}.questions-inner.jsx-996803787 span.jsx-996803787{font-size:4rem;font-weight:bold;}.questions-inner.jsx-996803787 .answer.jsx-996803787{font-size:2rem;width:50%;margin:1.5rem auto;}.questions-inner.jsx-996803787 p.call-to-action.jsx-996803787{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL1F1ZXN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR3NCLEFBR2lDLEFBUUwsQUFJQyxBQVlHLEFBSUYsQUFLQSxBQUtBLEFBTUUsYUFuQ25CLENBSW9CLENBZ0JULEFBS1EsQUFLUCxFQWRaLEFBb0JnQixDQTVDRSxNQTZCbEIsQ0FVcUIsTUFNSCxDQWhDQSxBQXFCbEIsRUFqQ2lCLFVBdUNqQixHQU1BLENBaENZLENBWm9CLFNBYW5CLFdBQ08sT0FiUixVQUNaLENBYW9CLGtCQUNBLGtCQUN5Qix3Q0FDN0MiLCJmaWxlIjoiL1VzZXJzL25vYW1hbGZmYXN5L0RvY3VtZW50cy9Qcm9ncmFtbWluZy9TY2hvb2wgUHJvamVjdHMvQXZvZGEgQmVJdnJpdC0yL2NvbXBvbmVudHMvUXVlc3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsga2V5ZG93blNjb3BlZCwgS2V5cyB9IGZyb20gXCJyZWFjdC1rZXlkb3duXCI7XG5cbmltcG9ydCBDb3JyZWN0TW9kYWwgZnJvbSBcImNvbXBvbmVudHMvQ29ycmVjdE1vZGFsXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvSW5wdXRcIjtcblxuaW1wb3J0IHsgUXVlc3Rpb25JbnRlcmZhY2UgfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uSW50ZXJmYWNlO1xuICB0b1Nob3c6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgaXNDb3JyZWN0OiBib29sZWFuO1xuICBzaG93Q29ycmVjdE1vZGFsOiBib29sZWFuO1xufVxuXG5jbGFzcyBRdWVzdGlvbiBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNoZWNrQW5zd2VyID0gdGhpcy5jaGVja0Fuc3dlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGlzbWlzc01vZGFsID0gdGhpcy5kaXNtaXNzTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFuc3dlcklucHV0OiBJbnB1dDtcblxuICBzdGF0ZSA9IHtcbiAgICBpc09wZW46IHRoaXMucHJvcHMudG9TaG93LFxuICAgIGlzQ29ycmVjdDogbnVsbCxcbiAgICBzaG93Q29ycmVjdE1vZGFsOiBmYWxzZVxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMudG9TaG93ICE9PSB0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBpc09wZW46IG5leHRQcm9wcy50b1Nob3dcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZG93blNjb3BlZChLZXlzLkVOVEVSKVxuICBjaGVja0Fuc3dlcihlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIGNvbnN0IHsgY29ycmVjdEFuc3dlciB9ID0gdGhpcy5wcm9wcy5xdWVzdGlvbjtcbiAgICAgIGNvbnN0IHVzZXJBbnN3ZXIgPSB0aGlzLmFuc3dlcklucHV0LmlucHV0LnZhbHVlO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGlzQ29ycmVjdDogdXNlckFuc3dlciA9PT0gY29ycmVjdEFuc3dlcixcbiAgICAgICAgc2hvd0NvcnJlY3RNb2RhbDogdHJ1ZVxuICAgICAgfSkpO1xuXG4gICAgICB0aGlzLmRpc21pc3NNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGRpc21pc3NNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPENvcnJlY3RNb2RhbFxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5zaG93Q29ycmVjdE1vZGFsfVxuICAgICAgICAgIGlzQ29ycmVjdD17dGhpcy5zdGF0ZS5pc0NvcnJlY3R9XG4gICAgICAgICAgcXVlc3Rpb249e3RoaXMucHJvcHMucXVlc3Rpb259XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BxdWVzdGlvbnMtb3V0ZXIgJHshdGhpcy5zdGF0ZS5pc09wZW4gPyBcImhpZGVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICBvbktleURvd249e3RoaXMuY2hlY2tBbnN3ZXJ9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9ucy1pbm5lclwiPlxuICAgICAgICAgICAgPGgxPtep15DXnNeUINee16HXpNeoIHt0aGlzLnByb3BzLnF1ZXN0aW9uLmlkfTwvaDE+XG4gICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5xdWVzdGlvbi5xdWVzdGlvbn08L3A+XG4gICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5xdWVzdGlvbi5zZW50ZW5jZX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlclwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMucXVlc3Rpb24uYW5zd2VyTGFiZWx9XG4gICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgcmVmPXtpbnB1dCA9PiAodGhpcy5hbnN3ZXJJbnB1dCA9IGlucHV0KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FsbC10by1hY3Rpb25cIj5cbiAgICAgICAgICAgICAg15zXl9elINei15wg157Xp9epINeU15DXoNeY16gg15HXm9eT15kg15zXkdeT15XXpyDXkNeqINeU16rXqdeV15HXlFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5xdWVzdGlvbnMtb3V0ZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXVlc3Rpb25zLW91dGVyLmhpZGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXVlc3Rpb25zLWlubmVyIHtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHJlbSBhdXRvO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xdWVzdGlvbnMtaW5uZXIgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnF1ZXN0aW9ucy1pbm5lciBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xdWVzdGlvbnMtaW5uZXIgc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xdWVzdGlvbnMtaW5uZXIgLmFuc3dlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW0gYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnF1ZXN0aW9ucy1pbm5lciBwLmNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjOWM5YzljO1xuICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIl19 */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Question.tsx */",
        __self: this
      })));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), (_applyDecoratedDescriptor(_class.prototype, "checkAnswer", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "checkAnswer"), _class.prototype)), _class));
/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})
//# sourceMappingURL=index.js.c37e726da809b18e379e.hot-update.js.map