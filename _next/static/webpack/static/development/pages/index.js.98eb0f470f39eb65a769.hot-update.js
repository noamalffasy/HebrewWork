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
    value: function dismissModal(e) {
      var _this$props = this.props,
          isCorrect = _this$props.isCorrect,
          enemy = _this$props.enemy,
          dispatch = _this$props.dispatch;
      console.log("Dismissing CorrectModal");
      console.log(e);

      if (this.state.isOpen) {
        if (isCorrect) {
          dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__["updateEnemyHP"])(-(enemy.maxHP / (enemy.isBoss ? 3 : 2))));
        } else {
          dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__["updatePlayerHP"])(-10));
        }

        if (enemy.hp === 0) {
          dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__["nextEnemy"])());
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
        className: "jsx-3299585826" + " " + "correct-modal-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3299585826" + " " + "correct-modal-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.props.isCorrect ? "צדקת!" : "טעית!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "\u05D1\u05DE\u05E9\u05E4\u05D8 ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, this.props.question.sentence)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3299585826" + " " + "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "\u05D4", this.props.question.answerLabel, " \u05D4\u05D5\u05D0", " ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, this.props.question.correctAnswer)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3299585826" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DB\u05DC \u05DE\u05E7\u05E9 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3299585826",
        css: ".correct-modal-outer.jsx-3299585826{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.correct-modal-outer.hide.jsx-3299585826{display:none;}.correct-modal-inner.jsx-3299585826{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:10rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.correct-modal-inner.jsx-3299585826 h1.jsx-3299585826{font-size:2.5rem;}.correct-modal-inner.jsx-3299585826 p.jsx-3299585826{font-size:2.5rem;margin:0;}.correct-modal-inner.jsx-3299585826 p.jsx-3299585826 span.jsx-3299585826{font-size:2.5rem;font-weight:bold;}.correct-modal-inner.jsx-3299585826 p.big.jsx-3299585826{font-size:3rem;}.correct-modal-inner.jsx-3299585826 p.big.jsx-3299585826 span.jsx-3299585826{font-size:3rem;}.correct-modal-inner.jsx-3299585826 p.call-to-action.jsx-3299585826{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0NvcnJlY3RNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZvQixBQUcrQixBQVFMLEFBSUMsQUFZRyxBQUlBLEFBS0EsQUFLRixBQUlBLEFBSUUsYUFyQ25CLENBSW9CLENBMEJwQixBQUlBLEVBbEJBLEFBSVcsQUFLUSxBQWFILENBOUNFLFFBNkJsQixLQWtCa0IsQ0FsQ0EsRUFaRCxBQWlDakIsYUFjQSxDQWxDWSxDQVpvQixTQWFuQixXQUNPLE9BYlIsVUFDWixDQWFvQixrQkFDQSxrQkFDeUIsd0NBQzdDIiwiZmlsZSI6Ii9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0NvcnJlY3RNb2RhbC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGtleWRvd24sIHsgQUxMX0tFWVMgfSBmcm9tIFwicmVhY3Qta2V5ZG93blwiO1xuXG5pbXBvcnQgeyB1cGRhdGVQbGF5ZXJIUCwgdXBkYXRlRW5lbXlIUCwgbmV4dEVuZW15IH0gZnJvbSBcInJlZHV4U3RvcmUvYWN0aW9uc1wiO1xuXG5pbXBvcnQgeyBRdWVzdGlvbkludGVyZmFjZSwgT3Bwb25lbnRJbnRlcmZhY2UgfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBpc0NvcnJlY3Q6IGJvb2xlYW47XG4gIHF1ZXN0aW9uOiBRdWVzdGlvbkludGVyZmFjZTtcbiAgZW5lbXk6IE9wcG9uZW50SW50ZXJmYWNlO1xuICBkaXNwYXRjaDogRGlzcGF0Y2g7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbn1cblxuY2xhc3MgUXVlc3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5kaXNtaXNzTW9kYWwgPSB0aGlzLmRpc21pc3NNb2RhbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNPcGVuOiB0aGlzLnByb3BzLmlzT3BlblxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuaXNPcGVuICE9PSB0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBpc09wZW46IG5leHRQcm9wcy5pc09wZW5cbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZG93bihBTExfS0VZUylcbiAgZGlzbWlzc01vZGFsKGUpIHtcbiAgICBjb25zdCB7IGlzQ29ycmVjdCwgZW5lbXksIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKFwiRGlzbWlzc2luZyBDb3JyZWN0TW9kYWxcIik7XG4gICAgY29uc29sZS5sb2coZSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIGlmIChpc0NvcnJlY3QpIHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlRW5lbXlIUCgtKGVuZW15Lm1heEhQIC8gKGVuZW15LmlzQm9zcyA/IDMgOiAyKSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVBsYXllckhQKC0xMCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5lbXkuaHAgPT09IDApIHtcbiAgICAgICAgZGlzcGF0Y2gobmV4dEVuZW15KCkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgY29ycmVjdC1tb2RhbC1vdXRlciAkeyF0aGlzLnN0YXRlLmlzT3BlbiA/IFwiaGlkZVwiIDogXCJcIn1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcnJlY3QtbW9kYWwtaW5uZXJcIj5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuaXNDb3JyZWN0ID8gXCLXpteT16fXqiFcIiA6IFwi15jXoteZ16ohXCJ9PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgINeR157Xqdek15ggPHNwYW4+e3RoaXMucHJvcHMucXVlc3Rpb24uc2VudGVuY2V9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJiaWdcIj5cbiAgICAgICAgICAgINeUe3RoaXMucHJvcHMucXVlc3Rpb24uYW5zd2VyTGFiZWx9INeU15XXkHtcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLnF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXJ9PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYWxsLXRvLWFjdGlvblwiPtec15fXpSDXotecINeb15wg157Xp9epINeR15vXk9eZINec15TXntep15nXmjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1vdXRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1vdXRlci5oaWRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtaW5uZXIge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbSA0cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHJlbSBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIHAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIHAuYmlnIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciBwLmJpZyBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciBwLmNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM5YzljOWM7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgY29uc3QgeyBwbGF5ZXIsIGVuZW15IH0gPSBzdGF0ZTtcbiAgcmV0dXJuIHsgcGxheWVyLCBlbmVteSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUXVlc3Rpb24pO1xuIl19 */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/CorrectModal.tsx */",
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
//# sourceMappingURL=index.js.98eb0f470f39eb65a769.hot-update.js.map