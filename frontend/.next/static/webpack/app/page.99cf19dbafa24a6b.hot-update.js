"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/CountriesList.js":
/*!*********************************************!*\
  !*** ./src/app/components/CountriesList.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\n//Renders a list of countries with a limit of ten per page\nconst CountriesList = (param)=>{\n    let { countries, page } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"space-y-4\",\n            children: countries.slice(page * 10 - 10, page * 10).map((country, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-md text-white text-center font-semibold transform transition duration-300 hover:scale-105\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/country/info/\".concat(country.countryCode),\n                        className: \"inline-block w-full p-4\",\n                        children: country.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountriesList.js\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountriesList.js\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountriesList.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = CountriesList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountriesList);\nvar _c;\n$RefreshReg$(_c, \"CountriesList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db3VudHJpZXNMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBNkI7QUFFN0IsMERBQTBEO0FBQzFELE1BQU1DLGdCQUFnQjtRQUFDLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFO0lBQ3hDLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFHQyxXQUFVO3NCQUNYSCxVQUFVSSxLQUFLLENBQUNILE9BQU8sS0FBSyxJQUFJQSxPQUFPLElBQUlJLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDeEQsOERBQUNDO29CQUVDTCxXQUFVOzhCQUVWLDRFQUFDTCxpREFBSUE7d0JBQ0hXLE1BQU0saUJBQXFDLE9BQXBCSCxRQUFRSSxXQUFXO3dCQUMxQ1AsV0FBVTtrQ0FFVEcsUUFBUUssSUFBSTs7Ozs7O21CQVBWSjs7Ozs7Ozs7Ozs7QUFjakI7S0FwQk1SO0FBc0JOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db3VudHJpZXNMaXN0LmpzPzQ3NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuLy9SZW5kZXJzIGEgbGlzdCBvZiBjb3VudHJpZXMgd2l0aCBhIGxpbWl0IG9mIHRlbiBwZXIgcGFnZVxyXG5jb25zdCBDb3VudHJpZXNMaXN0ID0gKHsgY291bnRyaWVzLCBwYWdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIHtjb3VudHJpZXMuc2xpY2UocGFnZSAqIDEwIC0gMTAsIHBhZ2UgKiAxMCkubWFwKChjb3VudHJ5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1waW5rLTUwMCB0by15ZWxsb3ctNTAwIHJvdW5kZWQtbGcgc2hhZG93LW1kIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtgL2NvdW50cnkvaW5mby8ke2NvdW50cnkuY291bnRyeUNvZGV9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIHAtNFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y291bnRyeS5uYW1lfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRyaWVzTGlzdDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJDb3VudHJpZXNMaXN0IiwiY291bnRyaWVzIiwicGFnZSIsInVsIiwiY2xhc3NOYW1lIiwic2xpY2UiLCJtYXAiLCJjb3VudHJ5IiwiaW5kZXgiLCJsaSIsImhyZWYiLCJjb3VudHJ5Q29kZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CountriesList.js\n"));

/***/ })

});