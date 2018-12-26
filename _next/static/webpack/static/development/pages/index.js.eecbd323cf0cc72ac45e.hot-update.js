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
/* harmony import */ var reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reduxStore/actions */ "./reduxStore/actions/index.ts");
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






var CorrectModal =
/*#__PURE__*/
function (_Component) {
  _inherits(CorrectModal, _Component);

  function CorrectModal(props) {
    var _this;

    _classCallCheck(this, CorrectModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CorrectModal).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: _this.props.isOpen
    });

    _this.dismissModal = _this.dismissModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CorrectModal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.state === "showQuestion" && nextProps.isOpen !== this.state.isOpen) {
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            isOpen: nextProps.isOpen
          });
        });

        if (nextProps.isOpen) {
          this.correctModalDiv.focus();
        }
      } else if (this.state.isOpen && nextProps.keydown.event !== this.props.keydown.event) {
        this.dismissModal();
      }
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      console.log(this.state.isOpen);

      if (this.state.isOpen) {
        var _this$props = this.props,
            _isCorrect = _this$props.isCorrect,
            _enemy = _this$props.enemy,
            _dispatch = _this$props.dispatch;
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            isOpen: false
          });
        }, function () {
          if (_isCorrect) {
            var newHP = -Math.floor(_enemy.maxHP / (_enemy.isBoss ? 3 : 2));

            if (_enemy.hp + newHP <= 0) {
              _dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__["nextEnemy"])());
            }

            _dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__["updateState"])("attack"));

            _dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__["updateEnemyHP"])(newHP));
          } else {
            _dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__["updatePlayerHP"])(-10));

            _dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__["updateState"])("getHit"));
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        onKeyDown: this.dismissModal,
        ref: function ref(div) {
          return _this2.correctModalDiv = div;
        },
        className: "jsx-3299585826" + " " + "correct-modal-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3299585826" + " " + "correct-modal-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, this.props.isCorrect ? "צדקת!" : "טעית!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "\u05D1\u05DE\u05E9\u05E4\u05D8 ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, this.props.question.sentence)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3299585826" + " " + "big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "\u05D4", this.props.question.answerLabel, " \u05D4\u05D5\u05D0", " ", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3299585826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, this.props.question.correctAnswer)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3299585826" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DB\u05DC \u05DE\u05E7\u05E9 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3299585826",
        css: ".correct-modal-outer.jsx-3299585826{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.correct-modal-outer.hide.jsx-3299585826{display:none;}.correct-modal-inner.jsx-3299585826{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:10rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.correct-modal-inner.jsx-3299585826 h1.jsx-3299585826{font-size:2.5rem;}.correct-modal-inner.jsx-3299585826 p.jsx-3299585826{font-size:2.5rem;margin:0;}.correct-modal-inner.jsx-3299585826 p.jsx-3299585826 span.jsx-3299585826{font-size:2.5rem;font-weight:bold;}.correct-modal-inner.jsx-3299585826 p.big.jsx-3299585826{font-size:3rem;}.correct-modal-inner.jsx-3299585826 p.big.jsx-3299585826 span.jsx-3299585826{font-size:3rem;}.correct-modal-inner.jsx-3299585826 p.call-to-action.jsx-3299585826{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0NvcnJlY3RNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0dvQixBQUcrQixBQVFMLEFBSUMsQUFZRyxBQUlBLEFBS0EsQUFLRixBQUlBLEFBSUUsYUFyQ25CLENBSW9CLENBMEJwQixBQUlBLEVBbEJBLEFBSVcsQUFLUSxBQWFILENBOUNFLFFBNkJsQixLQWtCa0IsQ0FsQ0EsRUFaRCxBQWlDakIsYUFjQSxDQWxDWSxDQVpvQixTQWFuQixXQUNPLE9BYlIsVUFDWixDQWFvQixrQkFDQSxrQkFDeUIsd0NBQzdDIiwiZmlsZSI6Ii9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0NvcnJlY3RNb2RhbC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQge1xuICB1cGRhdGVQbGF5ZXJIUCxcbiAgdXBkYXRlRW5lbXlIUCxcbiAgbmV4dEVuZW15LFxuICB1cGRhdGVTdGF0ZVxufSBmcm9tIFwicmVkdXhTdG9yZS9hY3Rpb25zXCI7XG5cbmltcG9ydCB7IFF1ZXN0aW9uSW50ZXJmYWNlLCBPcHBvbmVudEludGVyZmFjZSB9IGZyb20gXCJ1dGlscy90eXBlc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIGlzQ29ycmVjdDogYm9vbGVhbjtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uSW50ZXJmYWNlO1xuICBlbmVteTogT3Bwb25lbnRJbnRlcmZhY2U7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGtleWRvd246IHsgZXZlbnQ6IEtleWJvYXJkRXZlbnQgfTtcbiAgZGlzcGF0Y2g6IERpc3BhdGNoO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc09wZW46IGJvb2xlYW47XG59XG5cbmNsYXNzIENvcnJlY3RNb2RhbCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmRpc21pc3NNb2RhbCA9IHRoaXMuZGlzbWlzc01vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb3JyZWN0TW9kYWxEaXY6IEhUTUxEaXZFbGVtZW50O1xuXG4gIHN0YXRlID0ge1xuICAgIGlzT3BlbjogdGhpcy5wcm9wcy5pc09wZW5cbiAgfTtcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICBuZXh0UHJvcHMuc3RhdGUgPT09IFwic2hvd1F1ZXN0aW9uXCIgJiZcbiAgICAgIG5leHRQcm9wcy5pc09wZW4gIT09IHRoaXMuc3RhdGUuaXNPcGVuXG4gICAgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGlzT3BlbjogbmV4dFByb3BzLmlzT3BlblxuICAgICAgfSkpO1xuXG4gICAgICBpZiAobmV4dFByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLmNvcnJlY3RNb2RhbERpdi5mb2N1cygpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLnN0YXRlLmlzT3BlbiAmJlxuICAgICAgbmV4dFByb3BzLmtleWRvd24uZXZlbnQgIT09IHRoaXMucHJvcHMua2V5ZG93bi5ldmVudFxuICAgICkge1xuICAgICAgdGhpcy5kaXNtaXNzTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBkaXNtaXNzTW9kYWwoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pc09wZW4pO1xuICAgIGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgY29uc3QgeyBpc0NvcnJlY3QsIGVuZW15LCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgcHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgfSksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAoaXNDb3JyZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdIUCA9IC1NYXRoLmZsb29yKGVuZW15Lm1heEhQIC8gKGVuZW15LmlzQm9zcyA/IDMgOiAyKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChlbmVteS5ocCArIG5ld0hQIDw9IDApIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2gobmV4dEVuZW15KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVTdGF0ZShcImF0dGFja1wiKSk7XG4gICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVFbmVteUhQKG5ld0hQKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVBsYXllckhQKC0xMCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVTdGF0ZShcImdldEhpdFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Bjb3JyZWN0LW1vZGFsLW91dGVyICR7IXRoaXMuc3RhdGUuaXNPcGVuID8gXCJoaWRlXCIgOiBcIlwifWB9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5kaXNtaXNzTW9kYWx9XG4gICAgICAgIHJlZj17ZGl2ID0+ICh0aGlzLmNvcnJlY3RNb2RhbERpdiA9IGRpdil9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ycmVjdC1tb2RhbC1pbm5lclwiPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5pc0NvcnJlY3QgPyBcItem15PXp9eqIVwiIDogXCLXmNei15nXqiFcIn08L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAg15HXntep16TXmCA8c3Bhbj57dGhpcy5wcm9wcy5xdWVzdGlvbi5zZW50ZW5jZX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJpZ1wiPlxuICAgICAgICAgICAg15R7dGhpcy5wcm9wcy5xdWVzdGlvbi5hbnN3ZXJMYWJlbH0g15TXldeQe1wiIFwifVxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMucXVlc3Rpb24uY29ycmVjdEFuc3dlcn08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhbGwtdG8tYWN0aW9uXCI+15zXl9elINei15wg15vXnCDXnten16kg15HXm9eT15kg15zXlNee16nXmdeaPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLW91dGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLW91dGVyLmhpZGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29ycmVjdC1tb2RhbC1pbm5lciB7XG4gICAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDRyZW07XG4gICAgICAgICAgICBtYXJnaW46IDEwcmVtIGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtaW5uZXIgcCBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcnJlY3QtbW9kYWwtaW5uZXIgcC5iaWcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIHAuYmlnIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb3JyZWN0LW1vZGFsLWlubmVyIHAuY2FsbC10by1hY3Rpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzljOWM5YztcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICBjb25zdCB7IHBsYXllciwgZW5lbXksIHN0YXRlOiBnYW1lU3RhdGUgfSA9IHN0YXRlO1xuICByZXR1cm4geyBwbGF5ZXIsIGVuZW15LCBzdGF0ZTogZ2FtZVN0YXRlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb3JyZWN0TW9kYWwpO1xuIl19 */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/CorrectModal.tsx */",
        __self: this
      }));
    }
  }]);

  return CorrectModal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapStateToProps(state) {
  var player = state.player,
      enemy = state.enemy,
      gameState = state.state;
  return {
    player: player,
    enemy: enemy,
    state: gameState
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CorrectModal));

/***/ })

})
//# sourceMappingURL=index.js.eecbd323cf0cc72ac45e.hot-update.js.map