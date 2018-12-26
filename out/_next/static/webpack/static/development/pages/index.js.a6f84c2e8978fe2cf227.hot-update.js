webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Intro.tsx":
/*!******************************!*\
  !*** ./components/Intro.tsx ***!
  \******************************/
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
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Intro.tsx";


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






var Intro =
/*#__PURE__*/
function (_Component) {
  _inherits(Intro, _Component);

  function Intro(props) {
    var _this;

    _classCallCheck(this, Intro);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Intro).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: true
    });

    _this.dismissModal = _this.dismissModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Intro, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.introDiv.focus();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.keydown.event.key !== this.props.keydown.event.key) {
        this.dismissModal();
      }
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      if (this.state.isOpen) {
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            isOpen: false
          });
        });
        this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__["updateState"])("startFight"));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        onKeyDown: this.dismissModal,
        ref: function ref(div) {
          return _this2.introDiv = div;
        },
        className: "jsx-3781324421" + " " + "intro-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3781324421" + " " + "intro-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-3781324421",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3781324421",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "\u05D6\u05D4\u05D5 \u05DE\u05E9\u05D7\u05E7 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E7\u05D8\u05D9\u05D1\u05D9 \u05D1\u05D5 \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D4\u05D1\u05D9\u05E1 \u05D0\u05D5\u05D9\u05D1\u05D9\u05DD. \u05D0\u05EA \u05D4\u05D0\u05D5\u05D9\u05D1\u05D9\u05DD \u05D0\u05EA\u05DD \u05DE\u05D1\u05D9\u05E1\u05D9\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05E2\u05E0\u05D4 \u05E2\u05DC \u05E9\u05D0\u05DC\u05D5\u05EA \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3781324421",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "\u05D1\u05D4\u05E6\u05DC\u05D7\u05D4!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3781324421" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DB\u05DC \u05DE\u05E7\u05E9 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3781324421",
        css: ".intro-outer.jsx-3781324421{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.intro-outer.hide.jsx-3781324421{display:none;}.intro-inner.jsx-3781324421{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:4rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.intro-inner.jsx-3781324421 h1.jsx-3781324421{font-size:4rem;}.intro-inner.jsx-3781324421 p.jsx-3781324421{font-size:2rem;}.intro-inner.jsx-3781324421 span.jsx-3781324421{font-size:3rem;font-weight:bold;}.intro-inner.jsx-3781324421 p.call-to-action.jsx-3781324421{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0ludHJvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRW9CLEFBRytCLEFBUUwsQUFJQyxBQVlDLEFBSUEsQUFJQSxBQUtFLGFBNUJuQixDQUlvQixDQVlwQixBQUlBLEFBSW1CLEVBS0gsQ0FyQ0UsYUFzQ0EsQ0F6QkEsQUFvQmxCLEVBaENpQixhQXNDakIsQ0F6QlksQ0Fab0IsU0FhbkIsV0FDTyxPQWJSLFVBQ1osQ0FhbUIsaUJBQ0Msa0JBQ3lCLHdDQUM3QyIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9JbnRyby50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyB1cGRhdGVTdGF0ZSB9IGZyb20gXCJyZWR1eFN0b3JlL2FjdGlvbnNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdGU/OiBzdHJpbmc7XG4gIGtleWRvd246IHsgZXZlbnQ6IEtleWJvYXJkRXZlbnQgfTtcbiAgZGlzcGF0Y2g6IERpc3BhdGNoO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc09wZW46IGJvb2xlYW47XG59XG5cbmNsYXNzIEludHJvIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuZGlzbWlzc01vZGFsID0gdGhpcy5kaXNtaXNzTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGludHJvRGl2OiBIVE1MRGl2RWxlbWVudDtcblxuICBzdGF0ZSA9IHtcbiAgICBpc09wZW46IHRydWVcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmludHJvRGl2LmZvY3VzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmtleWRvd24uZXZlbnQua2V5ICE9PSB0aGlzLnByb3BzLmtleWRvd24uZXZlbnQua2V5KSB7XG4gICAgICB0aGlzLmRpc21pc3NNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGRpc21pc3NNb2RhbCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgfSkpO1xuXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0YXRlKFwic3RhcnRGaWdodFwiKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGludHJvLW91dGVyICR7IXRoaXMuc3RhdGUuaXNPcGVuID8gXCJoaWRlXCIgOiBcIlwifWB9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5kaXNtaXNzTW9kYWx9XG4gICAgICAgIHJlZj17ZGl2ID0+ICh0aGlzLmludHJvRGl2ID0gZGl2KX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyby1pbm5lclwiPlxuICAgICAgICAgIDxoMT7Xkdeo15XXm9eZ150g15TXkdeQ15nXnSE8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAg15bXlNeVINee16nXl9enINeQ15nXoNeY16jXp9eY15nXkdeZINeR15Ug16LXnNeZ15vXnSDXnNeU15HXmdehINeQ15XXmdeR15nXnS4g15DXqiDXlNeQ15XXmdeR15nXnSDXkNeq150g157XkdeZ16HXmdedXG4gICAgICAgICAgICDXkdeQ157Xptei15XXqiDXntei16DXlCDXotecINep15DXnNeV16og15HXoteR16jXmdeqLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8c3Bhbj7XkdeU16bXnNeX15QhPC9zcGFuPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FsbC10by1hY3Rpb25cIj7XnNeX16Ug16LXnCDXm9ecINee16fXqSDXkdeb15PXmSDXnNeU16rXl9eZ15w8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmludHJvLW91dGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbnRyby1vdXRlci5oaWRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmludHJvLWlubmVyIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogNHJlbSBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW50cm8taW5uZXIgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbnRyby1pbm5lciBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW50cm8taW5uZXIgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW50cm8taW5uZXIgcC5jYWxsLXRvLWFjdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjOWM5YzljO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7IHN0YXRlOiBzdGF0ZS5zdGF0ZSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW50cm8pO1xuIl19 */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Intro.tsx */",
        __self: this
      }));
    }
  }]);

  return Intro;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapStateToProps(state) {
  return {
    state: state.state
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Intro));

/***/ })

})
//# sourceMappingURL=index.js.a6f84c2e8978fe2cf227.hot-update.js.map