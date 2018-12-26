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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_keydown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-keydown */ "./node_modules/react-keydown/es/index.js");
/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Input */ "./components/Input.tsx");
/* harmony import */ var reduxStore_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reduxStore/actions */ "./reduxStore/actions/index.ts");
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
        this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_5__["updateEnemyHP"])(-10));
      } else {
        this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_5__["updatePlayerHP"])(-10));
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

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        onKeyDown: this.checkAnswer,
        className: "jsx-1443227852" + " " + "questions-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1443227852" + " " + "questions-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-1443227852",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "\u05E9\u05D0\u05DC\u05D4 \u05DE\u05E1\u05E4\u05E8 ", this.props.question.id), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-1443227852",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, this.props.question.question), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-1443227852",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, this.props.question.sentence), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-1443227852" + " " + "answer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
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
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-1443227852" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DE\u05E7\u05E9 \u05D4\u05D0\u05E0\u05D8\u05E8 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05E9\u05D5\u05D1\u05D4")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1443227852",
        css: ".questions-outer.jsx-1443227852{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.questions-outer.hide.jsx-1443227852{display:none;}.questions-inner.jsx-1443227852{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:10rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.questions-inner.jsx-1443227852 h1.jsx-1443227852{font-size:2.5rem;}.questions-inner.jsx-1443227852 p.jsx-1443227852{font-size:3rem;margin:0;}.questions-inner.jsx-1443227852 span.jsx-1443227852{font-size:4rem;font-weight:bold;}.questions-inner.jsx-1443227852 .answer.jsx-1443227852{font-size:2rem;width:50%;margin:1.5rem auto;}.questions-inner.jsx-1443227852 p.call-to-action.jsx-1443227852{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL1F1ZXN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRm9CLEFBRytCLEFBUUwsQUFJQyxBQVlHLEFBSUYsQUFLQSxBQUtBLEFBTUUsYUFuQ25CLENBSW9CLENBZ0JULEFBS1EsQUFLUCxFQWRaLEFBb0JnQixDQTVDRSxNQTZCbEIsQ0FVcUIsTUFNSCxDQWhDQSxBQXFCbEIsRUFqQ2lCLFVBdUNqQixHQU1BLENBaENZLENBWm9CLFNBYW5CLFdBQ08sT0FiUixVQUNaLENBYW9CLGtCQUNBLGtCQUN5Qix3Q0FDN0MiLCJmaWxlIjoiL1VzZXJzL25vYW1hbGZmYXN5L0RvY3VtZW50cy9Qcm9ncmFtbWluZy9TY2hvb2wgUHJvamVjdHMvQXZvZGEgQmVJdnJpdC0yL2NvbXBvbmVudHMvUXVlc3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBrZXlkb3duIGZyb20gXCJyZWFjdC1rZXlkb3duXCI7XG5cbmltcG9ydCBJbnB1dCBmcm9tIFwiY29tcG9uZW50cy9JbnB1dFwiO1xuaW1wb3J0IHsgdXBkYXRlUGxheWVySFAsIHVwZGF0ZUVuZW15SFAgfSBmcm9tIFwicmVkdXhTdG9yZS9hY3Rpb25zXCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uSW50ZXJmYWNlIH0gZnJvbSBcInV0aWxzL3R5cGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHF1ZXN0aW9uOiBRdWVzdGlvbkludGVyZmFjZTtcbiAgZGlzcGF0Y2g6IERpc3BhdGNoO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc09wZW46IGJvb2xlYW47XG4gIGlzQ29ycmVjdDogYm9vbGVhbjtcbn1cblxuY2xhc3MgUXVlc3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jaGVja0Fuc3dlciA9IHRoaXMuY2hlY2tBbnN3ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRpc21pc3NNb2RhbCA9IHRoaXMuZGlzbWlzc01vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBhbnN3ZXJJbnB1dDogSW5wdXQ7XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNPcGVuOiB0cnVlLFxuICAgIGlzQ29ycmVjdDogbnVsbFxuICB9O1xuXG4gIEBrZXlkb3duKFwiZW50ZXJcIilcbiAgY2hlY2tBbnN3ZXIoKSB7XG4gICAgY29uc3QgeyBjb3JyZWN0QW5zd2VyIH0gPSB0aGlzLnByb3BzLnF1ZXN0aW9uO1xuICAgIGNvbnN0IHVzZXJBbnN3ZXIgPSB0aGlzLmFuc3dlcklucHV0LmlucHV0LnZhbHVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIGlzQ29ycmVjdDogdXNlckFuc3dlciA9PT0gY29ycmVjdEFuc3dlclxuICAgIH0pKTtcblxuICAgIGlmICh1c2VyQW5zd2VyID09PSBjb3JyZWN0QW5zd2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUVuZW15SFAoLTEwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlUGxheWVySFAoLTEwKSk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNtaXNzTW9kYWwoKVxuICB9XG5cbiAgZGlzbWlzc01vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBpc09wZW46IGZhbHNlXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHF1ZXN0aW9ucy1vdXRlciAkeyF0aGlzLnN0YXRlLmlzT3BlbiA/IFwiaGlkZVwiIDogXCJcIn1gfVxuICAgICAgICBvbktleURvd249e3RoaXMuY2hlY2tBbnN3ZXJ9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb25zLWlubmVyXCI+XG4gICAgICAgICAgPGgxPtep15DXnNeUINee16HXpNeoIHt0aGlzLnByb3BzLnF1ZXN0aW9uLmlkfTwvaDE+XG4gICAgICAgICAgPHA+e3RoaXMucHJvcHMucXVlc3Rpb24ucXVlc3Rpb259PC9wPlxuICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLnF1ZXN0aW9uLnNlbnRlbmNlfTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlclwiPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMucXVlc3Rpb24uYW5zd2VyTGFiZWx9XG4gICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICByZWY9e2lucHV0ID0+ICh0aGlzLmFuc3dlcklucHV0ID0gaW5wdXQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYWxsLXRvLWFjdGlvblwiPlxuICAgICAgICAgICAg15zXl9elINei15wg157Xp9epINeU15DXoNeY16gg15HXm9eT15kg15zXkdeT15XXpyDXkNeqINeU16rXqdeV15HXlFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucXVlc3Rpb25zLW91dGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5xdWVzdGlvbnMtb3V0ZXIuaGlkZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5xdWVzdGlvbnMtaW5uZXIge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbSA0cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHJlbSBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucXVlc3Rpb25zLWlubmVyIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5xdWVzdGlvbnMtaW5uZXIgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnF1ZXN0aW9ucy1pbm5lciBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5xdWVzdGlvbnMtaW5uZXIgLmFuc3dlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW0gYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucXVlc3Rpb25zLWlubmVyIHAuY2FsbC10by1hY3Rpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzljOWM5YztcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICBjb25zdCB7IHBsYXllciwgZW5lbXkgfSA9IHN0YXRlO1xuICByZXR1cm4geyBwbGF5ZXIsIGVuZW15IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShRdWVzdGlvbik7XG4iXX0= */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Question.tsx */",
        __self: this
      }));
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
//# sourceMappingURL=index.js.43cad223252fda4ebf3e.hot-update.js.map