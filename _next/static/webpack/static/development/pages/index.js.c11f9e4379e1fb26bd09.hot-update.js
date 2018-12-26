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
/* harmony import */ var react_keydown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-keydown */ "./node_modules/react-keydown/es/index.js");
/* harmony import */ var reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reduxStore/actions */ "./reduxStore/actions/index.ts");
var _dec,
    _class,
    _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Intro.tsx";



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






var Intro = (_dec = Object(react_keydown__WEBPACK_IMPORTED_MODULE_3__["default"])(react_keydown__WEBPACK_IMPORTED_MODULE_3__["ALL_KEYS"]), (_class =
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
    key: "dismissModal",
    value: function dismissModal() {
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          isOpen: false
        });
      });
      this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_4__["updateState"])("start"));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        onKeyDown: this.dismissModal,
        className: "jsx-3781324421" + " " + "intro-outer ".concat(!this.state.isOpen ? "hide" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-3781324421" + " " + "intro-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-3781324421",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3781324421",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u05D6\u05D4\u05D5 \u05DE\u05E9\u05D7\u05E7 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E7\u05D8\u05D9\u05D1\u05D9 \u05D1\u05D5 \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D4\u05D1\u05D9\u05E1 \u05D0\u05D5\u05D9\u05D1\u05D9\u05DD. \u05D0\u05EA \u05D4\u05D0\u05D5\u05D9\u05D1\u05D9\u05DD \u05D0\u05EA\u05DD \u05DE\u05D1\u05D9\u05E1\u05D9\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05E2\u05E0\u05D4 \u05E2\u05DC \u05E9\u05D0\u05DC\u05D5\u05EA \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA."), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "jsx-3781324421",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\u05D1\u05D4\u05E6\u05DC\u05D7\u05D4!"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        className: "jsx-3781324421" + " " + "call-to-action",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DB\u05DC \u05DE\u05E7\u05E9 \u05D1\u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3781324421",
        css: ".intro-outer.jsx-3781324421{position:absolute;min-height:100%;min-width:100%;background:rgba(0,0,0,0.4);z-index:2;}.intro-outer.hide.jsx-3781324421{display:none;}.intro-inner.jsx-3781324421{direction:rtl;text-align:center;background:#fff;width:90%;height:70%;padding:2rem 4rem;margin:4rem auto;border-radius:2px;box-shadow:0 0 6px 3px rgba(0,0,0,0.15);}.intro-inner.jsx-3781324421 h1.jsx-3781324421{font-size:4rem;}.intro-inner.jsx-3781324421 p.jsx-3781324421{font-size:2rem;}.intro-inner.jsx-3781324421 span.jsx-3781324421{font-size:3rem;font-weight:bold;}.intro-inner.jsx-3781324421 p.call-to-action.jsx-3781324421{font-size:1.5rem;color:#9c9c9c;margin:1rem 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0ludHJvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RG9CLEFBRytCLEFBUUwsQUFJQyxBQVlDLEFBSUEsQUFJQSxBQUtFLGFBNUJuQixDQUlvQixDQVlwQixBQUlBLEFBSW1CLEVBS0gsQ0FyQ0UsYUFzQ0EsQ0F6QkEsQUFvQmxCLEVBaENpQixhQXNDakIsQ0F6QlksQ0Fab0IsU0FhbkIsV0FDTyxPQWJSLFVBQ1osQ0FhbUIsaUJBQ0Msa0JBQ3lCLHdDQUM3QyIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9JbnRyby50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGtleWRvd24sIHsgQUxMX0tFWVMgfSBmcm9tIFwicmVhY3Qta2V5ZG93blwiO1xuXG5pbXBvcnQgeyB1cGRhdGVTdGF0ZSB9IGZyb20gXCJyZWR1eFN0b3JlL2FjdGlvbnNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdGU/OiBzdHJpbmc7XG4gIGRpc3BhdGNoOiBEaXNwYXRjaDtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNPcGVuOiBib29sZWFuO1xufVxuXG5jbGFzcyBJbnRybyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmRpc21pc3NNb2RhbCA9IHRoaXMuZGlzbWlzc01vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpc09wZW46IHRydWVcbiAgfTtcblxuICBAa2V5ZG93bihBTExfS0VZUylcbiAgZGlzbWlzc01vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICBpc09wZW46IGZhbHNlXG4gICAgfSkpO1xuXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTdGF0ZShcInN0YXJ0XCIpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BpbnRyby1vdXRlciAkeyF0aGlzLnN0YXRlLmlzT3BlbiA/IFwiaGlkZVwiIDogXCJcIn1gfVxuICAgICAgICBvbktleURvd249e3RoaXMuZGlzbWlzc01vZGFsfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvLWlubmVyXCI+XG4gICAgICAgICAgPGgxPteR16jXldeb15nXnSDXlNeR15DXmdedITwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICDXlteU15Ug157XqdeX16cg15DXmdeg15jXqNen15jXmdeR15kg15HXlSDXotec15nXm9edINec15TXkdeZ16Eg15DXldeZ15HXmdedLiDXkNeqINeU15DXldeZ15HXmdedINeQ16rXnSDXnteR15nXodeZ151cbiAgICAgICAgICAgINeR15DXntem16LXldeqINee16LXoNeUINei15wg16nXkNec15XXqiDXkdei15HXqNeZ16ouXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxzcGFuPteR15TXptec15fXlCE8L3NwYW4+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYWxsLXRvLWFjdGlvblwiPtec15fXpSDXotecINeb15wg157Xp9epINeR15vXk9eZINec15TXqteX15nXnDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW50cm8tb3V0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmludHJvLW91dGVyLmhpZGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW50cm8taW5uZXIge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbSA0cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiA0cmVtIGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbnRyby1pbm5lciBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmludHJvLWlubmVyIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbnRyby1pbm5lciBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbnRyby1pbm5lciBwLmNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM5YzljOWM7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHsgc3RhdGU6IHN0YXRlLnN0YXRlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbnRybyk7XG4iXX0= */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Intro.tsx */",
        __self: this
      }));
    }
  }]);

  return Intro;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), (_applyDecoratedDescriptor(_class.prototype, "dismissModal", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "dismissModal"), _class.prototype)), _class));

function mapStateToProps(state) {
  return {
    state: state.state
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Intro));

/***/ })

})
//# sourceMappingURL=index.js.c11f9e4379e1fb26bd09.hot-update.js.map