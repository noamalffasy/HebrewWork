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



var initialStore = {
  player: reduxStore_reducers_player__WEBPACK_IMPORTED_MODULE_1__["initialState"],
  enemy: reduxStore_reducers_enemy__WEBPACK_IMPORTED_MODULE_2__["initialState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  player: reduxStore_reducers_player__WEBPACK_IMPORTED_MODULE_1__["default"],
  enemy: reduxStore_reducers_enemy__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ })

})
//# sourceMappingURL=_app.js.fb33bfa9a5e8e0df16ee.hot-update.js.map