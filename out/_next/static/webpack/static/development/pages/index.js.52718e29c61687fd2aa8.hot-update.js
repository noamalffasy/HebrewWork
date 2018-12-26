webpackHotUpdate("static/development/pages/index.js",{

/***/ "./reduxStore/actions/enemy.ts":
/*!*************************************!*\
  !*** ./reduxStore/actions/enemy.ts ***!
  \*************************************/
/*! exports provided: updateEnemyHP, nextEnemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEnemyHP", function() { return updateEnemyHP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextEnemy", function() { return nextEnemy; });
/* harmony import */ var reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduxStore/actionTypes */ "./reduxStore/actionTypes/index.ts");

var updateEnemyHP = function updateEnemyHP(changeInHP) {
  return {
    type: reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HP_ENEMY"],
    payload: {
      changeInHP: changeInHP
    }
  };
};
var nextEnemy = function nextEnemy() {
  return {
    type: reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_ENEMY"]
  };
};

/***/ }),

/***/ "./reduxStore/actions/index.ts":
/*!*************************************!*\
  !*** ./reduxStore/actions/index.ts ***!
  \*************************************/
/*! exports provided: updatePlayerHP, updateEnemyHP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./reduxStore/actions/player.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatePlayerHP", function() { return _player__WEBPACK_IMPORTED_MODULE_0__["updatePlayerHP"]; });

/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ "./reduxStore/actions/enemy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateEnemyHP", function() { return _enemy__WEBPACK_IMPORTED_MODULE_1__["updateEnemyHP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextEnemy", function() { return _enemy__WEBPACK_IMPORTED_MODULE_1__["nextEnemy"]; });




/***/ })

})
//# sourceMappingURL=index.js.52718e29c61687fd2aa8.hot-update.js.map