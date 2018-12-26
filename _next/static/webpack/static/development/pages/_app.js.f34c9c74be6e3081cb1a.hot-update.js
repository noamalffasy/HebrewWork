webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reduxStore/reducers/enemy.ts":
/*!**************************************!*\
  !*** ./reduxStore/reducers/enemy.ts ***!
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
  hp: 100,
  name: "הראש החושב",
  srcName: "thinking_head"
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HP_ENEMY"]:
      {
        var changeInHP = action.payload.changeInHP;
        return _objectSpread({}, state, {
          hp: state.hp + changeInHP
        });
      }

    case reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHANGE_ENEMY"]:
      {
        var newEnemy = action.payload.newEnemy;
        return _objectSpread({}, state, newEnemy);
      }

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.f34c9c74be6e3081cb1a.hot-update.js.map