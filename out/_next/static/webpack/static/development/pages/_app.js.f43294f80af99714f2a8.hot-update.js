webpackHotUpdate("static/development/pages/_app.js",{

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

var initialState = "intro";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case reduxStore_actionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STATE"]:
      {
        var newState = action.payload.newState;
        return newState;
      }

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.f43294f80af99714f2a8.hot-update.js.map