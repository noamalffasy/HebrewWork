webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reduxStore/reducers/player.ts":
/*!***************************************!*\
  !*** ./reduxStore/reducers/player.ts ***!
  \***************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduxStore/actionTypes */ "./reduxStore/actionTypes/index.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  hp: 100,
  name: "במבה",
  srcName: "character"
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HP_PLAYER"]:
      {
        var changeInHP = action.payload.changeInHP;
        return _objectSpread({}, state, {
          hp: state.hp + changeInHP
        });
      }

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.b704a64be802912f8dc4.hot-update.js.map