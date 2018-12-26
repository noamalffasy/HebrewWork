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
    type: reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__["NEXT_ENEMY"]
  };
};

/***/ })

})
//# sourceMappingURL=index.js.44898c4ce2afc465ecfc.hot-update.js.map