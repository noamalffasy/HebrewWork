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
var updateEnemyHP = function updateEnemyHP(changeInHP) {
  return {
    type: UPDATE_HP_ENEMY,
    payload: {
      changeInHP: changeInHP
    }
  };
};
var changeEnemy = function changeEnemy(newEnemy) {
  return {
    type: CHANGE_ENEMY,
    payload: {
      newEnemy: newEnemy
    }
  };
};

/***/ })

})
//# sourceMappingURL=index.js.86d6d4ac530086e1e7b6.hot-update.js.map