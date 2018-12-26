webpackHotUpdate("static/development/pages/index.js",{

/***/ "./reduxStore/actions/enemy.ts":
/*!*************************************!*\
  !*** ./reduxStore/actions/enemy.ts ***!
  \*************************************/
/*! exports provided: updateEnemyHP, changeEnemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEnemyHP", function() { return updateEnemyHP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeEnemy", function() { return changeEnemy; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./reduxStore/actionTypes/index.ts");

var updateEnemyHP = function updateEnemyHP(changeInHP) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HP_ENEMY"],
    payload: {
      changeInHP: changeInHP
    }
  };
};
var changeEnemy = function changeEnemy(newEnemy) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_ENEMY"],
    payload: {
      newEnemy: newEnemy
    }
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeEnemy", function() { return _enemy__WEBPACK_IMPORTED_MODULE_1__["changeEnemy"]; });




/***/ })

})
//# sourceMappingURL=index.js.0a18b3baa018c6bb618c.hot-update.js.map