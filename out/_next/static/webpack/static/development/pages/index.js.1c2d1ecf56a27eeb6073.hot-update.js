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
var _class,
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







var Question = Object(react_keydown__WEBPACK_IMPORTED_MODULE_2__["default"])(_class =
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

      if (nextProps.keydown.event) {
        if (nextProps.keydown.event.which === "enter") {
          this.checkAnswer();
        }
      }
    }
  }, {
    key: "checkAnswer",
    value: function checkAnswer() {
      var correctAnswer = this.props.question.correctAnswer;
      var userAnswer = this.answerInput.input.value;
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          isCorrect: userAnswer === correctAnswer,
          isOpen: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_CorrectModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isOpen: this.state.isOpen,
        isCorrect: this.state.isCorrect,
        question: this.props.question,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        onKeyDown: this.checkAnswer,
        className: "jsx-996803787" + " " + "questions-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-996803787" + " " + "questions-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "\u05E9\u05D0\u05DC\u05D4 \u05DE\u05E1\u05E4\u05E8 ", this.props.question.id), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, this.props.question.question), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-996803787",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, this.props.question.sentence), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-996803787" + " " + "answer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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
          lineNumber: 82
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-996803787" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DE\u05E7\u05E9 \u05D4\u05D0\u05E0\u05D8\u05E8 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05E9\u05D5\u05D1\u05D4")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "996803787",
        css: ".questions-outer.jsx-996803787{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.questions-outer.hide.jsx-996803787{display:none;}.questions-inner.jsx-996803787{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:10rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.questions-inner.jsx-996803787 h1.jsx-996803787{font-size:2.5rem;}.questions-inner.jsx-996803787 p.jsx-996803787{font-size:3rem;margin:0;}.questions-inner.jsx-996803787 span.jsx-996803787{font-size:4rem;font-weight:bold;}.questions-inner.jsx-996803787 .answer.jsx-996803787{font-size:2rem;width:50%;margin:1.5rem auto;}.questions-inner.jsx-996803787 p.call-to-action.jsx-996803787{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL1F1ZXN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RnNCLEFBR2lDLEFBUUwsQUFJQyxBQVlHLEFBSUYsQUFLQSxBQUtBLEFBTUUsYUFuQ25CLENBSW9CLENBZ0JULEFBS1EsQUFLUCxFQWRaLEFBb0JnQixDQTVDRSxNQTZCbEIsQ0FVcUIsTUFNSCxDQWhDQSxBQXFCbEIsRUFqQ2lCLFVBdUNqQixHQU1BLENBaENZLENBWm9CLFNBYW5CLFdBQ08sT0FiUixVQUNaLENBYW9CLGtCQUNBLGtCQUN5Qix3Q0FDN0MiLCJmaWxlIjoiL1VzZXJzL25vYW1hbGZmYXN5L0RvY3VtZW50cy9Qcm9ncmFtbWluZy9TY2hvb2wgUHJvamVjdHMvQXZvZGEgQmVJdnJpdC0yL2NvbXBvbmVudHMvUXVlc3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGtleWRvd24gZnJvbSBcInJlYWN0LWtleWRvd25cIjtcblxuaW1wb3J0IENvcnJlY3RNb2RhbCBmcm9tIFwiY29tcG9uZW50cy9Db3JyZWN0TW9kYWxcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiY29tcG9uZW50cy9JbnB1dFwiO1xuXG5pbXBvcnQgeyBRdWVzdGlvbkludGVyZmFjZSB9IGZyb20gXCJ1dGlscy90eXBlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBxdWVzdGlvbjogUXVlc3Rpb25JbnRlcmZhY2U7XG4gIHRvU2hvdzogYm9vbGVhbjtcbiAga2V5ZG93bj86IGFueTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBpc0NvcnJlY3Q6IGJvb2xlYW47XG4gIHNob3dDb3JyZWN0TW9kYWw6IGJvb2xlYW47XG59XG5cbkBrZXlkb3duXG5jbGFzcyBRdWVzdGlvbiBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNoZWNrQW5zd2VyID0gdGhpcy5jaGVja0Fuc3dlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYW5zd2VySW5wdXQ6IElucHV0O1xuXG4gIHN0YXRlID0ge1xuICAgIGlzT3BlbjogdGhpcy5wcm9wcy50b1Nob3csXG4gICAgaXNDb3JyZWN0OiBudWxsLFxuICAgIHNob3dDb3JyZWN0TW9kYWw6IGZhbHNlXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy50b1Nob3cgIT09IHRoaXMuc3RhdGUuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGlzT3BlbjogbmV4dFByb3BzLnRvU2hvd1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChuZXh0UHJvcHMua2V5ZG93bi5ldmVudCkge1xuICAgICAgaWYgKG5leHRQcm9wcy5rZXlkb3duLmV2ZW50LndoaWNoID09PSBcImVudGVyXCIpIHtcbiAgICAgICAgdGhpcy5jaGVja0Fuc3dlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQW5zd2VyKCkge1xuICAgIGNvbnN0IHsgY29ycmVjdEFuc3dlciB9ID0gdGhpcy5wcm9wcy5xdWVzdGlvbjtcbiAgICBjb25zdCB1c2VyQW5zd2VyID0gdGhpcy5hbnN3ZXJJbnB1dC5pbnB1dC52YWx1ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBpc0NvcnJlY3Q6IHVzZXJBbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXIsXG4gICAgICBpc09wZW46IGZhbHNlXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Q29ycmVjdE1vZGFsXG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICBpc0NvcnJlY3Q9e3RoaXMuc3RhdGUuaXNDb3JyZWN0fVxuICAgICAgICAgIHF1ZXN0aW9uPXt0aGlzLnByb3BzLnF1ZXN0aW9ufVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcXVlc3Rpb25zLW91dGVyICR7IXRoaXMuc3RhdGUuaXNPcGVuID8gXCJoaWRlXCIgOiBcIlwifWB9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmNoZWNrQW5zd2VyfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbnMtaW5uZXJcIj5cbiAgICAgICAgICAgIDxoMT7XqdeQ15zXlCDXnteh16TXqCB7dGhpcy5wcm9wcy5xdWVzdGlvbi5pZH08L2gxPlxuICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMucXVlc3Rpb24ucXVlc3Rpb259PC9wPlxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMucXVlc3Rpb24uc2VudGVuY2V9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLnF1ZXN0aW9uLmFuc3dlckxhYmVsfVxuICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgIHJlZj17aW5wdXQgPT4gKHRoaXMuYW5zd2VySW5wdXQgPSBpbnB1dCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhbGwtdG8tYWN0aW9uXCI+XG4gICAgICAgICAgICAgINec15fXpSDXotecINee16fXqSDXlNeQ16DXmNeoINeR15vXk9eZINec15HXk9eV16cg15DXqiDXlNeq16nXldeR15RcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucXVlc3Rpb25zLW91dGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnF1ZXN0aW9ucy1vdXRlci5oaWRlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnF1ZXN0aW9ucy1pbm5lciB7XG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDRyZW07XG4gICAgICAgICAgICAgIG1hcmdpbjogMTByZW0gYXV0bztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXVlc3Rpb25zLWlubmVyIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xdWVzdGlvbnMtaW5uZXIgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXVlc3Rpb25zLWlubmVyIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXVlc3Rpb25zLWlubmVyIC5hbnN3ZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMS41cmVtIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xdWVzdGlvbnMtaW5uZXIgcC5jYWxsLXRvLWFjdGlvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICBjb2xvcjogIzljOWM5YztcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Question.tsx */",
        __self: this
      })));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"])) || _class;

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})
//# sourceMappingURL=index.js.1c2d1ecf56a27eeb6073.hot-update.js.map