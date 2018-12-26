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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectInput", function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (e) e.persist();

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
        css: ".Input.jsx-485707951{position:relative;width:100%;margin-bottom:2rem;cursor:text;}.Input.jsx-485707951 label.jsx-485707951{display:block;position:absolute;color:rgba(0,0,0,0.4);white-space:nowrap;right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top;z-index:5;}.Input.focus.jsx-485707951 label.jsx-485707951{-webkit-transform:translateY(-75%) scale(0.75);-ms-transform:translateY(-75%) scale(0.75);transform:translateY(-75%) scale(0.75);}.Input.jsx-485707951 label.focus.jsx-485707951{color:#3e618f;}.Input.jsx-485707951 span.jsx-485707951{border-bottom:1px solid rgba(0,0,0,0.4);padding-bottom:2px;}.Input.jsx-485707951 span.jsx-485707951::after{content:\"\";display:block;margin:-0.1rem 0 0;border-bottom:2px solid #3e618f;width:100%;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s;transition:all 0.3s;}.Input.jsx-485707951 span.focus.jsx-485707951::after{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951{border:0;position:relative;width:100%;text-align:right;outline:0;background:none;box-shadow:none;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951:-webkit-autofill{background:none !important;color:#131313 !important;-webkit-text-fill-color:#131313;box-shadow:0 0 0px 1000px white inset;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951:-moz-autofill{background:none !important;color:#131313 !important;-webkit-text-fill-color:#131313;box-shadow:0 0 0px 1000px white inset;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951:-o-autofill{background:none !important;color:#131313 !important;-webkit-text-fill-color:#131313;box-shadow:0 0 0px 1000px white inset;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951:-khtml-autofill{background:none !important;color:#131313 !important;-webkit-text-fill-color:#131313;box-shadow:0 0 0px 1000px white inset;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951,.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951::-webkit-input-placeholder{color:#131313;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951,.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951::-moz-placeholder{color:#131313;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951,.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951:-ms-input-placeholder{color:#131313;}.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951,.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951::placeholder{color:#131313;}@media screen and (-webkit-min-device-pixel-ratio:0){.Input.jsx-485707951 span.jsx-485707951 input.jsx-485707951{padding:0;}}@media (min-width:768px), @media (min-width:768px) and (-webkit-min-device-pixel-ratio:1){.Input.half.jsx-485707951:last-of-type{margin-right:0;width:50%;}.Input.half.jsx-485707951{width:calc(50% - 1rem);float:left;margin-right:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Rm9CLEFBRytCLEFBT0osQUFheUIsQUFJekIsQUFJNkIsQUFLaEMsQUFVUyxBQUlYLEFBVWtCLEFBT0EsQUFPQSxBQU9BLEFBUWIsQUFLRixBQU1LLEFBSVEsU0FyRFAsQ0E0Q2xCLENBMURjLEdBMUJJLEFBaUJwQixBQThEQSxDQVdjLEdBakdELEtBcUdFLEVBbkVNLEFBZ0VuQixFQWxEVyxBQVNjLEFBT0EsQUFPQSxBQU9BLEVBN0VOLEdBT00sRUE4RkwsSUFyREgsRUFyQkUsSUFPYSxJQWpDcEIsSUF3RG9CLEFBT0EsQUFPQSxBQU9BLEFBd0JoQyxFQTlGbUIsQ0F5Q1QsSUFyQlosQ0ExQkEsS0FnRGtCLE9BUmxCLENBakNVLEdBMEJHLEtBekJNLEFBeUNELEdBT3NCLEFBT0EsQUFPQSxBQU9BLEdBM0NsQixVQWdCdEIseUJBT0EsQUFPQSxBQU9BLEFBT0EsT0E3REEsOEJBa0JzQixPQTFCTCxlQUNLLDBCQTBCdEIsc0JBekI2Qiw2RkFDakIsVUFDWiIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9JbnB1dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBsYWJlbDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIGF1dG9mb2N1czogYm9vbGVhbjtcbn1cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgaXNFbXB0eSA9ICgpID0+IHtcbiAgICBpZiAoXG4gICAgICAodGhpcy5pbnB1dCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgKHRoaXMuaW5wdXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHNlbGVjdElucHV0ID0gKGUgPSBudWxsKSA9PiB7XG4gICAgaWYgKGUpIGUucGVyc2lzdCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIGZvY3VzOiB0cnVlLFxuICAgICAgYWN0aXZlOiB0cnVlXG4gICAgfSkpO1xuICB9O1xuXG4gIGRlc2VsZWN0SW5wdXQgPSBlID0+IHtcbiAgICBlLnBlcnNpc3QoKTtcblxuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZm9jdXM6IHRydWUsXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBmb2N1czogZmFsc2UsXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBudWxsO1xuICBzdGF0ZSA9IHsgZm9jdXM6IGZhbHNlLCBhY3RpdmU6IGZhbHNlLCBjbGFzczogXCJcIiB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNcbiAgICAgICAgICAgID8gXCJJbnB1dCBmb2N1c1wiICsgdGhpcy5zdGF0ZS5jbGFzc1xuICAgICAgICAgICAgOiBcIklucHV0XCIgKyB0aGlzLnN0YXRlLmNsYXNzXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmFjdGl2ZSA/IFwiZm9jdXNcIiA6IFwiXCJ9XG4gICAgICAgICAgaHRtbEZvcj17dGhpcy5wcm9wcy50eXBlfVxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXQ7XG4gICAgICAgICAgICAoaW5wdXQgYXMgSFRNTElucHV0RWxlbWVudCkuZm9jdXMoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuc2VsZWN0SW5wdXR9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmRlc2VsZWN0SW5wdXR9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlID8gXCJmb2N1c1wiIDogXCJcIn1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLnNlbGVjdElucHV0fVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5kZXNlbGVjdElucHV0fVxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD17dGhpcy5wcm9wcy50eXBlfVxuICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy50eXBlfVxuICAgICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlfVxuICAgICAgICAgICAgYXV0b0ZvY3VzPXt0aGlzLnByb3BzLmF1dG9mb2N1c31cbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuc2VsZWN0SW5wdXR9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcmVmPXtpbnB1dCA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLklucHV0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuSW5wdXQgbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLklucHV0LmZvY3VzIGxhYmVsIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzUlKSBzY2FsZSgwLjc1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuSW5wdXQgbGFiZWwuZm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICMzZTYxOGY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLklucHV0IHNwYW4ge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLklucHV0IHNwYW46OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogLTAuMXJlbSAwIDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzNlNjE4ZjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuSW5wdXQgc3Bhbi5mb2N1czo6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLklucHV0IHNwYW4gaW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuSW5wdXQgc3BhbiBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAjMTMxMzEzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIzEzMTMxMztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4IHdoaXRlIGluc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5JbnB1dCBzcGFuIGlucHV0Oi1tb3otYXV0b2ZpbGwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICMxMzEzMTMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjMTMxMzEzO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggd2hpdGUgaW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLklucHV0IHNwYW4gaW5wdXQ6LW8tYXV0b2ZpbGwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICMxMzEzMTMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjMTMxMzEzO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggd2hpdGUgaW5zZXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLklucHV0IHNwYW4gaW5wdXQ6LWtodG1sLWF1dG9maWxsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAjMTMxMzEzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIzEzMTMxMztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4IHdoaXRlIGluc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5JbnB1dCBzcGFuIGlucHV0LFxuICAgICAgICAgIC5JbnB1dCBzcGFuIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzEzMTMxMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSB7XG4gICAgICAgICAgICAuSW5wdXQgc3BhbiBpbnB1dCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCksXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XG4gICAgICAgICAgICAuSW5wdXQuaGFsZjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuSW5wdXQuaGFsZiB7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDFyZW0pO1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Input.tsx */",
        __self: this
      }));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=index.js.9271c5bfe73be332b964.hot-update.js.map