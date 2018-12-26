webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reduxStore/reducers/index.ts":
/*!**************************************!*\
  !*** ./reduxStore/reducers/index.ts ***!
  \**************************************/
/*! exports provided: initialStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialStore", function() { return initialStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var reduxStore_reducers_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reduxStore/reducers/player */ "./reduxStore/reducers/player.ts");
/* harmony import */ var reduxStore_reducers_enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reduxStore/reducers/enemy */ "./reduxStore/reducers/enemy.ts");
/* harmony import */ var reduxStore_reducers_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reduxStore/reducers/state */ "./reduxStore/reducers/state.ts");




var initialStore = {
  player: reduxStore_reducers_player__WEBPACK_IMPORTED_MODULE_1__["initialState"],
  enemy: reduxStore_reducers_enemy__WEBPACK_IMPORTED_MODULE_2__["initialState"],
  state: reduxStore_reducers_state__WEBPACK_IMPORTED_MODULE_3__["initialState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  player: reduxStore_reducers_player__WEBPACK_IMPORTED_MODULE_1__["default"],
  enemy: reduxStore_reducers_enemy__WEBPACK_IMPORTED_MODULE_2__["default"],
  state: reduxStore_reducers_state__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./reduxStore/reducers/state.ts":
/*!**************************************!*\
  !*** ./reduxStore/reducers/state.ts ***!
  \**************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduxStore/actionTypes */ "./reduxStore/actionTypes/index.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  state: "intro"
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STATE"]:
      {
        var newState = action.payload.newState;
        return _objectSpread({}, state, {
          state: newState
        });
      }

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.4ae533cf7e334f4a0b20.hot-update.js.map