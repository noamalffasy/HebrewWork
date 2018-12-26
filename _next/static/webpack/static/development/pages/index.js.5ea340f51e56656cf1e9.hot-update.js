webpackHotUpdate("static/development/pages/index.js",{

/***/ "./reduxStore/actions/index.ts":
/*!*************************************!*\
  !*** ./reduxStore/actions/index.ts ***!
  \*************************************/
/*! exports provided: updatePlayerHP, updateEnemyHP, nextEnemy, updateState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./reduxStore/actions/player.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatePlayerHP", function() { return _player__WEBPACK_IMPORTED_MODULE_0__["updatePlayerHP"]; });

/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ "./reduxStore/actions/enemy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateEnemyHP", function() { return _enemy__WEBPACK_IMPORTED_MODULE_1__["updateEnemyHP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextEnemy", function() { return _enemy__WEBPACK_IMPORTED_MODULE_1__["nextEnemy"]; });

/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./reduxStore/actions/state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateState", function() { return _state__WEBPACK_IMPORTED_MODULE_2__["updateState"]; });





/***/ }),

/***/ "./reduxStore/actions/state.ts":
/*!*************************************!*\
  !*** ./reduxStore/actions/state.ts ***!
  \*************************************/
/*! exports provided: updateState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateState", function() { return updateState; });
/* harmony import */ var reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduxStore/actionTypes */ "./reduxStore/actionTypes/index.ts");

var updateState = function updateState(newState) {
  return {
    type: reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STATE"],
    payload: {
      newState: newState
    }
  };
};

/***/ })

})
//# sourceMappingURL=index.js.5ea340f51e56656cf1e9.hot-update.js.map