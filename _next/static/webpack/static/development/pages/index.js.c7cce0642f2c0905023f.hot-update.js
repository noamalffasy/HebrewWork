webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HUD.tsx":
/*!****************************!*\
  !*** ./components/HUD.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_OpponentHUD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/OpponentHUD */ "./components/OpponentHUD.tsx");
var _jsxFileName = "/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/HUD.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var HUD =
/*#__PURE__*/
function (_Component) {
  _inherits(HUD, _Component);

  function HUD() {
    _classCallCheck(this, HUD);

    return _possibleConstructorReturn(this, _getPrototypeOf(HUD).apply(this, arguments));
  }

  _createClass(HUD, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "jsx-2724630607" + " " + "HUD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_OpponentHUD__WEBPACK_IMPORTED_MODULE_2__["default"], {
        opponent: {
          hp: this.props.playerHP,
          maxHP: 100,
          name: "במבה",
          srcName: "character"
        },
        isPlayer: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", {
        className: "jsx-2724630607" + " " + "stage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, this.props.currentEnemy.id + 1, " \u05E9\u05DC\u05D1"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](components_OpponentHUD__WEBPACK_IMPORTED_MODULE_2__["default"], {
        opponent: this.props.currentEnemy,
        isPlayer: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2724630607",
        css: ".HUD.jsx-2724630607{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1rem 2rem;color:#fff;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;}.HUD.jsx-2724630607 .stage.jsx-2724630607{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0hVRC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJvQixBQUc0QixBQVFLLGtCQUN0Qix3REFSc0Isa0JBQ1IsV0FDb0IsbUhBQ1oseUZBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9ub2FtYWxmZmFzeS9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvU2Nob29sIFByb2plY3RzL0F2b2RhIEJlSXZyaXQtMi9jb21wb25lbnRzL0hVRC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgT3Bwb25lbnRIVUQgZnJvbSBcImNvbXBvbmVudHMvT3Bwb25lbnRIVURcIjtcblxuaW1wb3J0IHsgT3Bwb25lbnRJbnRlcmZhY2UgfSBmcm9tIFwidXRpbHMvdHlwZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGxheWVySFA6IG51bWJlcjtcbiAgY3VycmVudEVuZW15OiBPcHBvbmVudEludGVyZmFjZTtcbn1cblxuY2xhc3MgSFVEIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIVURcIj5cbiAgICAgICAgPE9wcG9uZW50SFVEXG4gICAgICAgICAgb3Bwb25lbnQ9e3tcbiAgICAgICAgICAgIGhwOiB0aGlzLnByb3BzLnBsYXllckhQLFxuICAgICAgICAgICAgbWF4SFA6IDEwMCxcbiAgICAgICAgICAgIG5hbWU6IFwi15HXnteR15RcIixcbiAgICAgICAgICAgIHNyY05hbWU6IFwiY2hhcmFjdGVyXCJcbiAgICAgICAgICB9fVxuICAgICAgICAgIGlzUGxheWVyPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic3RhZ2VcIj57dGhpcy5wcm9wcy5jdXJyZW50RW5lbXkuaWQgKyAxfSDXqdec15E8L2gxPlxuICAgICAgICA8T3Bwb25lbnRIVUQgb3Bwb25lbnQ9e3RoaXMucHJvcHMuY3VycmVudEVuZW15fSBpc1BsYXllcj17ZmFsc2V9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5IVUQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICAgICAgICAgIGNvbG9yICNmZmY7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgIC5IVUQgLnN0YWdlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIVUQ7XG4iXX0= */\n/*@ sourceURL=/Users/noamalffasy/Documents/Programming/School Projects/Avoda BeIvrit-2/components/HUD.tsx */",
        __self: this
      }));
    }
  }]);

  return HUD;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HUD);

/***/ })

})
//# sourceMappingURL=index.js.c7cce0642f2c0905023f.hot-update.js.map