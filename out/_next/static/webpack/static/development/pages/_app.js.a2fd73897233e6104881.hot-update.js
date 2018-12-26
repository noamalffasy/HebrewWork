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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./reduxStore/reducers/player.ts");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy */ "./reduxStore/reducers/enemy.ts");



var initialStore = {
  player: _player__WEBPACK_IMPORTED_MODULE_1__["initialState"],
  enemy: _enemy__WEBPACK_IMPORTED_MODULE_2__["initialState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  player: _player__WEBPACK_IMPORTED_MODULE_1__["default"],
  enemy: _enemy__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ })

})
//# sourceMappingURL=_app.js.a2fd73897233e6104881.hot-update.js.map