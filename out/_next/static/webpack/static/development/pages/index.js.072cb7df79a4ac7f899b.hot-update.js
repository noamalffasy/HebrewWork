webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Foreground.tsx":
/*!***********************************!*\
  !*** ./components/Foreground.tsx ***!
  \***********************************/
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
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Foreground.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Foreground =
/*#__PURE__*/
function (_Component) {
  _inherits(Foreground, _Component);

  function Foreground() {
    _classCallCheck(this, Foreground);

    return _possibleConstructorReturn(this, _getPrototypeOf(Foreground).apply(this, arguments));
  }

  _createClass(Foreground, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this = this;

      if (nextProps.state === "attack" || nextProps.state === "takeHit") {
        setTimeout(function () {
          _this.props.dispatch(Object(reduxStore_actions__WEBPACK_IMPORTED_MODULE_3__["updateState"])("showQuestion"));
        }, 1500);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var numGrassBlocks = Math.ceil(this.props.gameWidth / 70);
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1308625437", [numGrassBlocks]]]) + " " + "Foreground",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        src: "/static/img/character/body.png",
        alt: "\u05E9\u05D7\u05E7\u05DF",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1308625437", [numGrassBlocks]]]) + " " + "opponent player ".concat(this.props.state === "takeHit" ? "hit" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        src: "/static/img/".concat(this.props.currentEnemy.srcName, "/body.png"),
        alt: "\u05D0\u05D5\u05D9\u05D1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1308625437", [numGrassBlocks]]]) + " " + "opponent enemy ".concat(this.props.state === "attack" ? "hit" : ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1308625437", [numGrassBlocks]]]) + " " + "grass",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, _toConsumableArray(Array(numGrassBlocks)).map(function (_, i) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
          src: "/static/img/grass.png",
          alt: "\u05D0\u05D3\u05DE\u05D4",
          key: i,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1308625437", [numGrassBlocks]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1308625437",
        css: "@-webkit-keyframes hit-__jsx-style-dynamic-selector{0%{background-color:unset;background-blend-mode:normal;}50%{background-color:rgba(200,100,0,0.5);background-blend-mode:multiply;}100%{background-color:unset;background-blend-mode:normal;}}@keyframes hit-__jsx-style-dynamic-selector{0%{background-color:unset;background-blend-mode:normal;}50%{background-color:rgba(200,100,0,0.5);background-blend-mode:multiply;}100%{background-color:unset;background-blend-mode:normal;}}.Foreground.__jsx-style-dynamic-selector{position:absolute;width:100%;left:0;bottom:0;}.Foreground.__jsx-style-dynamic-selector img.opponent.__jsx-style-dynamic-selector{width:10rem;height:10rem;margin:0 1rem -0.2rem;}.Foreground.__jsx-style-dynamic-selector img.opponent.enemy.__jsx-style-dynamic-selector{margin:0 1rem -0.2rem;float:right;}.Foreground.__jsx-style-dynamic-selector img.opponent.hit.__jsx-style-dynamic-selector{-webkit-animation:1s hit-__jsx-style-dynamic-selector running;animation:1s hit-__jsx-style-dynamic-selector running;}.Foreground.__jsx-style-dynamic-selector .grass.__jsx-style-dynamic-selector{width:100%;}.Foreground.__jsx-style-dynamic-selector .grass.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:calc(100% / ".concat(numGrassBlocks, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0ZvcmVncm91bmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Eb0IsQUFJc0MsQUFJaUIsQUFLakIsQUFNUCxBQU9OLEFBTVUsQUFLRyxBQUlkLEFBSXFDLFdBSGxELENBZmUsTUFQRixJQWFDLENBNUJtQixBQVNBLEVBY1QsSUFQZixLQWFULEVBWlcsQ0Fid0IsUUFjbkMsRUFNQSxDQWlCQSxJQXhDRSxBQVNBLGdCQUxBLGdEQTRCRiIsImZpbGUiOiIvVXNlcnMvbm9hbWFsZmZhc3kvRG9jdW1lbnRzL1Byb2dyYW1taW5nL1NjaG9vbCBQcm9qZWN0cy9Bdm9kYSBCZUl2cml0LTIvY29tcG9uZW50cy9Gb3JlZ3JvdW5kLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IHsgU3RvcmVJbnRlcmZhY2UgfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyB1cGRhdGVTdGF0ZSB9IGZyb20gXCJyZWR1eFN0b3JlL2FjdGlvbnNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZ2FtZVdpZHRoOiBudW1iZXI7XG4gIGN1cnJlbnRFbmVteToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzcmNOYW1lOiBzdHJpbmc7XG4gIH07XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGRpc3BhdGNoOiBEaXNwYXRjaDtcbn1cblxuY2xhc3MgRm9yZWdyb3VuZCBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnN0YXRlID09PSBcImF0dGFja1wiIHx8IG5leHRQcm9wcy5zdGF0ZSA9PT0gXCJ0YWtlSGl0XCIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVN0YXRlKFwic2hvd1F1ZXN0aW9uXCIpKTtcbiAgICAgIH0sIDE1MDApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBudW1HcmFzc0Jsb2NrcyA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmdhbWVXaWR0aCAvIDcwKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZvcmVncm91bmRcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17YG9wcG9uZW50IHBsYXllciAke1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJ0YWtlSGl0XCIgPyBcImhpdFwiIDogXCJcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1nL2NoYXJhY3Rlci9ib2R5LnBuZ1wiXG4gICAgICAgICAgYWx0PVwi16nXl9en159cIlxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtgb3Bwb25lbnQgZW5lbXkgJHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RhdGUgPT09IFwiYXR0YWNrXCIgPyBcImhpdFwiIDogXCJcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAgIHNyYz17YC9zdGF0aWMvaW1nLyR7dGhpcy5wcm9wcy5jdXJyZW50RW5lbXkuc3JjTmFtZX0vYm9keS5wbmdgfVxuICAgICAgICAgIGFsdD1cIteQ15XXmdeRXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFzc1wiPlxuICAgICAgICAgIHtbLi4uQXJyYXkobnVtR3Jhc3NCbG9ja3MpXS5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2dyYXNzLnBuZ1wiIGFsdD1cIteQ15PXnteUXCIga2V5PXtpfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAa2V5ZnJhbWVzIGhpdCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAxMDAsIDAsIDAuNSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkZvcmVncm91bmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5Gb3JlZ3JvdW5kIGltZy5vcHBvbmVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gLTAuMnJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuRm9yZWdyb3VuZCBpbWcub3Bwb25lbnQuZW5lbXkge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gLTAuMnJlbTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuRm9yZWdyb3VuZCBpbWcub3Bwb25lbnQuaGl0IHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogMXMgaGl0IHJ1bm5pbmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkZvcmVncm91bmQgLmdyYXNzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5Gb3JlZ3JvdW5kIC5ncmFzcyBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvICR7bnVtR3Jhc3NCbG9ja3N9KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0b3JlOiBTdG9yZUludGVyZmFjZSkge1xuICByZXR1cm4geyBzdGF0ZTogc3RvcmUuc3RhdGUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEZvcmVncm91bmQpO1xuIl19 */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/Foreground.tsx */"),
        dynamic: [numGrassBlocks],
        __self: this
      }));
    }
  }]);

  return Foreground;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapStateToProps(store) {
  return {
    state: store.state
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Foreground));

/***/ })

})
//# sourceMappingURL=index.js.072cb7df79a4ac7f899b.hot-update.js.map