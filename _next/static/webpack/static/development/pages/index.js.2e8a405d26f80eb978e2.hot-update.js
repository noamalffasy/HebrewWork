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
/* harmony import */ var reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduxStore/actionTypes */ "./reduxStore/actionTypes/index.ts");

var updateEnemyHP = function updateEnemyHP(changeInHP) {
  return {
    type: reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HP_ENEMY"],
    payload: {
      changeInHP: changeInHP
    }
  };
};
var changeEnemy = function changeEnemy(newEnemy) {
  return {
    type: reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_ENEMY"],
    payload: {
      newEnemy: newEnemy
    }
  };
};

/***/ })

})
//# sourceMappingURL=index.js.2e8a405d26f80eb978e2.hot-update.js.map