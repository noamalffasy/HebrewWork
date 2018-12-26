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
/* harmony import */ var components_CorrectModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/CorrectModal */ "./components/CorrectModal.tsx");
/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Input */ "./components/Input.tsx");
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Question.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      if (nextProps.toShow !== this.props.toShow) {
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            isOpen: nextProps.toShow
          });
        });

        if (nextProps.toShow) {
          this.questionDiv.focus();
        }
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

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_CorrectModal__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, this.props, {
        isOpen: this.state.showCorrectModal,
        isCorrect: this.state.isCorrect,
        question: this.props.question,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        onKeyDown: this.checkAnswer,
        ref: function ref(div) {
          return _this2.questionDiv = div;
        },
        className: "jsx-996803787" + " " + "questions-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-996803787" + " " + "questions-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "\u05E9\u05D0\u05DC\u05D4 \u05DE\u05E1\u05E4\u05E8 ", this.props.question.id), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, this.props.question.question), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.props.question.sentence), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-996803787" + " " + "answer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "text",
        label: this.props.question.answerLabel,
        autofocus: true,
        ref: function ref(input) {
          return _this2.answerInput = input;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-996803787" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DE\u05E7\u05E9 \u05D4\u05D0\u05E0\u05D8\u05E8 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05E9\u05D5\u05D1\u05D4")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "996803787",
        css: ".questions-outer.jsx-996803787{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.questions-outer.hide.jsx-996803787{display:none;}.questions-inner.jsx-996803787{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:10rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.questions-inner.jsx-996803787 h1.jsx-996803787{font-size:2.5rem;}.questions-inner.jsx-996803787 p.jsx-996803787{font-size:3rem;margin:0;}.questions-inner.jsx-996803787 span.jsx-996803787{font-size:4rem;font-weight:bold;}.questions-inner.jsx-996803787 .answer.jsx-996803787{font-size:2rem;width:50%;margin:1.5rem auto;}.questions-inner.jsx-996803787 p.call-to-action.jsx-996803787{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL1F1ZXN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR3NCLEFBR2lDLEFBUUwsQUFJQyxBQVlHLEFBSUYsQUFLQSxBQUtBLEFBTUUsYUFuQ25CLENBSW9CLENBZ0JULEFBS1EsQUFLUCxFQWRaLEFBb0JnQixDQTVDRSxNQTZCbEIsQ0FVcUIsTUFNSCxDQWhDQSxBQXFCbEIsRUFqQ2lCLFVBdUNqQixHQU1BLENBaENZLENBWm9CLFNBYW5CLFdBQ08sT0FiUixVQUNaLENBYW9CLGtCQUNBLGtCQUN5Qix3Q0FDN0MiLCJmaWxlIjoiL1VzZXJzL25vYW1hbGZmYXN5L0RvY3VtZW50cy9Qcm9ncmFtbWluZy9TY2hvb2wgUHJvamVjdHMvQXZvZGEgQmVJdnJpdC0yL2NvbXBvbmVudHMvUXVlc3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IENvcnJlY3RNb2RhbCBmcm9tIFwiY29tcG9uZW50cy9Db3JyZWN0TW9kYWxcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiY29tcG9uZW50cy9JbnB1dFwiO1xuXG5pbXBvcnQgeyBRdWVzdGlvbkludGVyZmFjZSB9IGZyb20gXCJ1dGlscy90eXBlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBxdWVzdGlvbjogUXVlc3Rpb25JbnRlcmZhY2U7XG4gIHRvU2hvdzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBpc0NvcnJlY3Q6IGJvb2xlYW47XG4gIHNob3dDb3JyZWN0TW9kYWw6IGJvb2xlYW47XG59XG5cbmNsYXNzIFF1ZXN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2hlY2tBbnN3ZXIgPSB0aGlzLmNoZWNrQW5zd2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kaXNtaXNzTW9kYWwgPSB0aGlzLmRpc21pc3NNb2RhbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcXVlc3Rpb25EaXY6IEhUTUxEaXZFbGVtZW50O1xuICBhbnN3ZXJJbnB1dDogSW5wdXQ7XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNPcGVuOiB0aGlzLnByb3BzLnRvU2hvdyxcbiAgICBpc0NvcnJlY3Q6IG51bGwsXG4gICAgc2hvd0NvcnJlY3RNb2RhbDogZmFsc2VcbiAgfTtcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnRvU2hvdyAhPT0gdGhpcy5wcm9wcy50b1Nob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgaXNPcGVuOiBuZXh0UHJvcHMudG9TaG93XG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChuZXh0UHJvcHMudG9TaG93KSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb25EaXYuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0Fuc3dlcihlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIGNvbnN0IHsgY29ycmVjdEFuc3dlciB9ID0gdGhpcy5wcm9wcy5xdWVzdGlvbjtcbiAgICAgIGNvbnN0IHVzZXJBbnN3ZXIgPSB0aGlzLmFuc3dlcklucHV0LmlucHV0LnZhbHVlO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGlzQ29ycmVjdDogdXNlckFuc3dlciA9PT0gY29ycmVjdEFuc3dlcixcbiAgICAgICAgc2hvd0NvcnJlY3RNb2RhbDogdHJ1ZVxuICAgICAgfSkpO1xuXG4gICAgICB0aGlzLmRpc21pc3NNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGRpc21pc3NNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPENvcnJlY3RNb2RhbFxuICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5zaG93Q29ycmVjdE1vZGFsfVxuICAgICAgICAgIGlzQ29ycmVjdD17dGhpcy5zdGF0ZS5pc0NvcnJlY3R9XG4gICAgICAgICAgcXVlc3Rpb249e3RoaXMucHJvcHMucXVlc3Rpb259XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BxdWVzdGlvbnMtb3V0ZXIgJHshdGhpcy5zdGF0ZS5pc09wZW4gPyBcImhpZGVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICBvbktleURvd249e3RoaXMuY2hlY2tBbnN3ZXJ9XG4gICAgICAgICAgcmVmPXtkaXYgPT4gKHRoaXMucXVlc3Rpb25EaXYgPSBkaXYpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbnMtaW5uZXJcIj5cbiAgICAgICAgICAgIDxoMT7XqdeQ15zXlCDXnteh16TXqCB7dGhpcy5wcm9wcy5xdWVzdGlvbi5pZH08L2gxPlxuICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMucXVlc3Rpb24ucXVlc3Rpb259PC9wPlxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMucXVlc3Rpb24uc2VudGVuY2V9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLnF1ZXN0aW9uLmFuc3dlckxhYmVsfVxuICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgIHJlZj17aW5wdXQgPT4gKHRoaXMuYW5zd2VySW5wdXQgPSBpbnB1dCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhbGwtdG8tYWN0aW9uXCI+XG4gICAgICAgICAgICAgINec15fXpSDXotecINee16fXqSDXlNeQ16DXmNeoINeR15vXk9eZINec15HXk9eV16cg15DXqiDXlNeq16nXldeR15RcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucXVlc3Rpb25zLW91dGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnF1ZXN0aW9ucy1vdXRlci5oaWRlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnF1ZXN0aW9ucy1pbm5lciB7XG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDRyZW07XG4gICAgICAgICAgICAgIG1hcmdpbjogMTByZW0gYXV0bztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXVlc3Rpb25zLWlubmVyIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xdWVzdGlvbnMtaW5uZXIgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXVlc3Rpb25zLWlubmVyIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXVlc3Rpb25zLWlubmVyIC5hbnN3ZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMS41cmVtIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xdWVzdGlvbnMtaW5uZXIgcC5jYWxsLXRvLWFjdGlvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICBjb2xvcjogIzljOWM5YztcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Question.tsx */",
        __self: this
      })));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})
//# sourceMappingURL=index.js.ed939f44b0950bbe983e.hot-update.js.map