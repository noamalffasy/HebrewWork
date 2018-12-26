webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Input.tsx":
/*!******************************!*\
  !*** ./components/Input.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Input.tsx";


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




var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isEmpty", function () {
      if (_this.input.value === "" || _this.input.value === undefined) {
        return true;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectInput", function (e) {
      e.persist();

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          focus: true,
          active: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "deselectInput", function (e) {
      e.persist();

      if (!_this.isEmpty()) {
        _this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            focus: true,
            active: false
          });
        });
      } else {
        _this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            focus: false,
            active: false
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "input", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focus: false,
      active: false,
      class: ""
    });

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-485707951" + " " + ((this.state.focus ? "Input focus" + this.state.class : "Input" + this.state.class) || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
        htmlFor: this.props.type,
        onClick: function onClick(e) {
          e.preventDefault();
          var input = _this2.input;
          input.focus();
        },
        onFocus: this.selectInput,
        onBlur: this.deselectInput,
        className: "jsx-485707951" + " " + ((this.state.active ? "focus" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, this.props.label), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        onFocus: this.selectInput,
        onBlur: this.deselectInput,
        className: "jsx-485707951" + " " + ((this.state.active ? "focus" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
        id: this.props.type,
        name: this.props.type,
        type: this.props.type,
        autoFocus: this.props.autofocus,
        onFocus: this.selectInput,
        required: true,
        ref: function ref(input) {
          _this2.input = input;
        },
        className: "jsx-485707951",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "485707951",
        css: ".Input.jsx-485707951{position:relative;width:100%;margin-bottom:2rem;cursor:text;}.Input.jsx-485707951 label.jsx-485707951{display:block;position:absolute;color:rgba(0,0,0,0.4);white-space:nowrap;right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top;z-index:5;}.Input.focus.jsx-485707951 label.jsx-485707951{-webkit-transform:translateY(-75%) scale(0.75);-ms-transform:translateY(-75%) scale(0.75);transform:translateY(-75%) scale(0.75);}.Input.jsx-485707951 label.focus.jsx-485707951{color:#3e618f;}.Input.jsx-485707951 span.jsx-485707951{border-bottom:1px solid rgba(0,0,0,0.4);padding-bottom:2px;}.Input.jsx-485707951 span.jsx-485707951::after{content:\"\";display:block;margin:-0.1rem 0 0;border-bottom:2px solid #3e618f;width:100%;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s;transition:all 0.3s;}.Input.jsx-485707951 span.focus.jsx-485707951::after{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951{border:0;position:relative;width:100%;text-align:right;outline:0;background:none;box-shadow:none;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951:-webkit-autofill{background:none !important;color:#131313 !important;-webkit-text-fill-color:#131313;box-shadow:0 0 0px 1000px white inset;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951:-moz-autofill{background:none !important;color:#131313 !important;-webkit-text-fill-color:#131313;box-shadow:0 0 0px 1000px white inset;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951:-o-autofill{background:none !important;color:#131313 !important;-webkit-text-fill-color:#131313;box-shadow:0 0 0px 1000px white inset;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951:-khtml-autofill{background:none !important;color:#131313 !important;-webkit-text-fill-color:#131313;box-shadow:0 0 0px 1000px white inset;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951,.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951::-webkit-input-placeholder{color:#131313;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951,.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951::-moz-placeholder{color:#131313;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951,.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951:-ms-input-placeholder{color:#131313;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951,.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951::placeholder{color:#131313;}@media screen and (-webkit-min-device-pixel-ratio:0){.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951{padding:0;}}@media (min-width:768px), @media (min-width:768px) and (-webkit-min-device-pixel-ratio:1){.Input.half.jsx-485707951:last-of-type{margin-right:0;width:50%;}.Input.half.jsx-485707951{width:calc(50% - 1rem);float:left;margin-right:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Rm9CLEFBRytCLEFBT0osQUFheUIsQUFJekIsQUFJNkIsQUFLaEMsQUFVUyxBQUlYLEFBVWtCLEFBT0EsQUFPQSxBQU9BLEFBUWIsQUFLRixBQU1LLEFBSVEsU0FyRFAsQ0E0Q2xCLENBMURjLEdBMUJJLEFBaUJwQixBQThEQSxDQVdjLEdBakdELEtBcUdFLEVBbkVNLEFBZ0VuQixFQWxEVyxBQVNjLEFBT0EsQUFPQSxBQU9BLEVBN0VOLEdBT00sRUE4RkwsSUFyREgsRUFyQkUsSUFPYSxJQWpDcEIsSUF3RG9CLEFBT0EsQUFPQSxBQU9BLEFBd0JoQyxFQTlGbUIsQ0F5Q1QsSUFyQlosQ0ExQkEsS0FnRGtCLE9BUmxCLENBakNVLEdBMEJHLEtBekJNLEFBeUNELEdBT3NCLEFBT0EsQUFPQSxBQU9BLEdBM0NsQixVQWdCdEIseUJBT0EsQUFPQSxBQU9BLEFBT0EsT0E3REEsOEJBa0JzQixPQTFCTCxlQUNLLDBCQTBCdEIsc0JBekI2Qiw2RkFDakIsVUFDWiIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9JbnB1dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBsYWJlbDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIGF1dG9mb2N1czogYm9vbGVhbjtcbn1cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgaXNFbXB0eSA9ICgpID0+IHtcbiAgICBpZiAoXG4gICAgICAodGhpcy5pbnB1dCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgKHRoaXMuaW5wdXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHNlbGVjdElucHV0ID0gZSA9PiB7XG4gICAgZS5wZXJzaXN0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgZm9jdXM6IHRydWUsXG4gICAgICBhY3RpdmU6IHRydWVcbiAgICB9KSk7XG4gIH07XG5cbiAgZGVzZWxlY3RJbnB1dCA9IGUgPT4ge1xuICAgIGUucGVyc2lzdCgpO1xuXG4gICAgaWYgKCF0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBmb2N1czogdHJ1ZSxcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IG51bGw7XG4gIHN0YXRlID0geyBmb2N1czogZmFsc2UsIGFjdGl2ZTogZmFsc2UsIGNsYXNzOiBcIlwiIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c1xuICAgICAgICAgICAgPyBcIklucHV0IGZvY3VzXCIgKyB0aGlzLnN0YXRlLmNsYXNzXG4gICAgICAgICAgICA6IFwiSW5wdXRcIiArIHRoaXMuc3RhdGUuY2xhc3NcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlID8gXCJmb2N1c1wiIDogXCJcIn1cbiAgICAgICAgICBodG1sRm9yPXt0aGlzLnByb3BzLnR5cGV9XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dDtcbiAgICAgICAgICAgIChpbnB1dCBhcyBIVE1MSW5wdXRFbGVtZW50KS5mb2N1cygpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5zZWxlY3RJbnB1dH1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuZGVzZWxlY3RJbnB1dH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hY3RpdmUgPyBcImZvY3VzXCIgOiBcIlwifVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuc2VsZWN0SW5wdXR9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmRlc2VsZWN0SW5wdXR9XG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLnR5cGV9XG4gICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnR5cGV9XG4gICAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGV9XG4gICAgICAgICAgICBhdXRvRm9jdXM9e3RoaXMucHJvcHMuYXV0b2ZvY3VzfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5zZWxlY3RJbnB1dH1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICByZWY9e2lucHV0ID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuSW5wdXQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5JbnB1dCBsYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xuICAgICAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuSW5wdXQuZm9jdXMgbGFiZWwge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NSUpIHNjYWxlKDAuNzUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5JbnB1dCBsYWJlbC5mb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogIzNlNjE4ZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuSW5wdXQgc3BhbiB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuSW5wdXQgc3Bhbjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAtMC4xcmVtIDAgMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjM2U2MThmO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5JbnB1dCBzcGFuLmZvY3VzOjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuSW5wdXQgc3BhbiBpbnB1dCB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5JbnB1dCBzcGFuIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICMxMzEzMTMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjMTMxMzEzO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggd2hpdGUgaW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLklucHV0IHNwYW4gaW5wdXQ6LW1vei1hdXRvZmlsbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogIzEzMTMxMyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICMxMzEzMTM7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCB3aGl0ZSBpbnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuSW5wdXQgc3BhbiBpbnB1dDotby1hdXRvZmlsbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogIzEzMTMxMyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICMxMzEzMTM7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCB3aGl0ZSBpbnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuSW5wdXQgc3BhbiBpbnB1dDota2h0bWwtYXV0b2ZpbGwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICMxMzEzMTMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjMTMxMzEzO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggd2hpdGUgaW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLklucHV0IHNwYW4gaW5wdXQsXG4gICAgICAgICAgLklucHV0IHNwYW4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMTMxMzEzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIHtcbiAgICAgICAgICAgIC5JbnB1dCBzcGFuIGlucHV0IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSxcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIHtcbiAgICAgICAgICAgIC5JbnB1dC5oYWxmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5JbnB1dC5oYWxmIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMXJlbSk7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Input.tsx */",
        __self: this
      }));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=index.js.8965017b3c463bbe6d37.hot-update.js.map