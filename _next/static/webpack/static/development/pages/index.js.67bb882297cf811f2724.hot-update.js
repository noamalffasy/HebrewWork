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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_keydown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-keydown */ "./node_modules/react-keydown/es/index.js");
/* harmony import */ var reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reduxStore/actions */ "./reduxStore/actions/index.ts");
var _dec,
    _class,
    _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/CorrectModal.tsx";



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






var Question = (_dec = Object(react_keydown__WEBPACK_IMPORTED_MODULE_3__["default"])(react_keydown__WEBPACK_IMPORTED_MODULE_3__["ALL_KEYS"]), (_class =
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
      if (this.state.isOpen) {
        if (this.props.isCorrect) {
          this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__["updateEnemyHP"])(-(this.props.enemy.maxHP / (this.props.enemy.isBoss ? 3 : 2))));
        } else {
          this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__["updatePlayerHP"])(-10));
        }

        if (this.props.enemy.hp === 0) {
          this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__["changeEnemy"])({}));
        }

        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            isOpen: false
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        onKeyDown: this.dismissModal,
        className: "jsx-3299585826" + " " + "correct-modal-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3299585826" + " " + "correct-modal-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, this.props.isCorrect ? "צדקת!" : "טעית!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "\u05D1\u05DE\u05E9\u05E4\u05D8 ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, this.props.question.sentence)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3299585826" + " " + "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\u05D4", this.props.question.answerLabel, " \u05D4\u05D5\u05D0", " ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, this.props.question.correctAnswer)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3299585826" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DB\u05DC \u05DE\u05E7\u05E9 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3299585826",
        css: ".correct-modal-outer.jsx-3299585826{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.correct-modal-outer.hide.jsx-3299585826{display:none;}.correct-modal-inner.jsx-3299585826{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:10rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.correct-modal-inner.jsx-3299585826 h1.jsx-3299585826{font-size:2.5rem;}.correct-modal-inner.jsx-3299585826 p.jsx-3299585826{font-size:2.5rem;margin:0;}.correct-modal-inner.jsx-3299585826 p.jsx-3299585826 span.jsx-3299585826{font-size:2.5rem;font-weight:bold;}.correct-modal-inner.jsx-3299585826 p.big.jsx-3299585826{font-size:3rem;}.correct-modal-inner.jsx-3299585826 p.big.jsx-3299585826 span.jsx-3299585826{font-size:3rem;}.correct-modal-inner.jsx-3299585826 p.call-to-action.jsx-3299585826{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0NvcnJlY3RNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0ZvQixBQUcrQixBQVFMLEFBSUMsQUFZRyxBQUlBLEFBS0EsQUFLRixBQUlBLEFBSUUsYUFyQ25CLENBSW9CLENBMEJwQixBQUlBLEVBbEJBLEFBSVcsQUFLUSxBQWFILENBOUNFLFFBNkJsQixLQWtCa0IsQ0FsQ0EsRUFaRCxBQWlDakIsYUFjQSxDQWxDWSxDQVpvQixTQWFuQixXQUNPLE9BYlIsVUFDWixDQWFvQixrQkFDQSxrQkFDeUIsd0NBQzdDIiwiZmlsZSI6Ii9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0NvcnJlY3RNb2RhbC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGtleWRvd24sIHsgQUxMX0tFWVMgfSBmcm9tIFwicmVhY3Qta2V5ZG93blwiO1xuXG5pbXBvcnQgeyB1cGRhdGVQbGF5ZXJIUCwgdXBkYXRlRW5lbXlIUCwgY2hhbmdlRW5lbXkgfSBmcm9tIFwicmVkdXhTdG9yZS9hY3Rpb25zXCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uSW50ZXJmYWNlLCBPcHBvbmVudEludGVyZmFjZSB9IGZyb20gXCJ1dGlscy90eXBlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIGlzQ29ycmVjdDogYm9vbGVhbjtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uSW50ZXJmYWNlO1xuICBlbmVteTogT3Bwb25lbnRJbnRlcmZhY2U7XG4gIGRpc3BhdGNoOiBEaXNwYXRjaDtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNPcGVuOiBib29sZWFuO1xufVxuXG5jbGFzcyBRdWVzdGlvbiBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmRpc21pc3NNb2RhbCA9IHRoaXMuZGlzbWlzc01vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpc09wZW46IHRoaXMucHJvcHMuaXNPcGVuXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5pc09wZW4gIT09IHRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGlzT3BlbjogbmV4dFByb3BzLmlzT3BlblxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlkb3duKEFMTF9LRVlTKVxuICBkaXNtaXNzTW9kYWwoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pc0NvcnJlY3QpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgICB1cGRhdGVFbmVteUhQKFxuICAgICAgICAgICAgLSh0aGlzLnByb3BzLmVuZW15Lm1heEhQIC8gKHRoaXMucHJvcHMuZW5lbXkuaXNCb3NzID8gMyA6IDIpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlUGxheWVySFAoLTEwKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmVuZW15LmhwID09PSAwKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2hhbmdlRW5lbXkoe1xuICAgICAgICAgIFxuICAgICAgICB9KSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNvcnJlY3QtbW9kYWwtb3V0ZXIgJHshdGhpcy5zdGF0ZS5pc09wZW4gPyBcImhpZGVcIiA6IFwiXCJ9YH1cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLmRpc21pc3NNb2RhbH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3JyZWN0LW1vZGFsLWlubmVyXCI+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmlzQ29ycmVjdCA/IFwi16bXk9en16ohXCIgOiBcIteY16LXmdeqIVwifTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICDXkdee16nXpNeYIDxzcGFuPnt0aGlzLnByb3BzLnF1ZXN0aW9uLnNlbnRlbmNlfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmlnXCI+XG4gICAgICAgICAgICDXlHt0aGlzLnByb3BzLnF1ZXN0aW9uLmFuc3dlckxhYmVsfSDXlNeV15B7XCIgXCJ9XG4gICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5xdWVzdGlvbi5jb3JyZWN0QW5zd2VyfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FsbC10by1hY3Rpb25cIj7XnNeX16Ug16LXnCDXm9ecINee16fXqSDXkdeb15PXmSDXnNeU157XqdeZ15o8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtb3V0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtb3V0ZXIuaGlkZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMTByZW0gYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtaW5uZXIgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtaW5uZXIgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciBwIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciBwLmJpZyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtaW5uZXIgcC5iaWcgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtaW5uZXIgcC5jYWxsLXRvLWFjdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjOWM5YzljO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIGNvbnN0IHsgcGxheWVyLCBlbmVteSB9ID0gc3RhdGU7XG4gIHJldHVybiB7IHBsYXllciwgZW5lbXkgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFF1ZXN0aW9uKTtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/CorrectModal.tsx */",
        __self: this
      }));
    }
  }]);

  return Question;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), (_applyDecoratedDescriptor(_class.prototype, "dismissModal", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "dismissModal"), _class.prototype)), _class));

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
//# sourceMappingURL=index.js.67bb882297cf811f2724.hot-update.js.map