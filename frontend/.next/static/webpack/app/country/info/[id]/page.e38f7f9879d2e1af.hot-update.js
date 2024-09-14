"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/country/info/[id]/page",{

/***/ "(app-pages-browser)/./src/app/components/CountryInfo.js":
/*!*******************************************!*\
  !*** ./src/app/components/CountryInfo.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _CountryPopulationChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountryPopulationChart */ \"(app-pages-browser)/./src/app/components/CountryPopulationChart.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\n\nconst CountryInfo = (param)=>{\n    let { countryInfo } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row justify-center items-center mb-6 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold text-center text-gray-800 mb-4\",\n                        children: countryInfo.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountryInfo.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: countryInfo.flagUrl,\n                        priority: true,\n                        width: \"150\",\n                        height: \"150\",\n                        alt: \"Country flag image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountryInfo.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountryInfo.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold text-gray-700 mb-3\",\n                children: \"Border countries:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountryInfo.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-disc list-inside space-y-2 mb-4\",\n                children: countryInfo.borders.map((borderCountry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"text-gray-600\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/country/info/\".concat(borderCountry.countryCode),\n                            className: \"text-blue-600\",\n                            children: borderCountry.commonName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountryInfo.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountryInfo.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountryInfo.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold text-gray-700 mb-2\",\n                        children: \"Population\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountryInfo.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CountryPopulationChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            populationData: countryInfo.populationCounts\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountryInfo.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountryInfo.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\components\\\\CountryInfo.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = CountryInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryInfo);\nvar _c;\n$RefreshReg$(_c, \"CountryInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db3VudHJ5SW5mby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkI7QUFDaUM7QUFDL0I7QUFFL0IsTUFBTUcsY0FBYztRQUFDLEVBQUVDLFdBQVcsRUFBRTtJQUNsQyxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQ1hGLFlBQVlJLElBQUk7Ozs7OztrQ0FFbkIsOERBQUNOLGtEQUFLQTt3QkFDSk8sS0FBS0wsWUFBWU0sT0FBTzt3QkFDeEJDLFFBQVE7d0JBQ1JDLE9BQU07d0JBQ05DLFFBQU87d0JBQ1BDLEtBQUk7Ozs7Ozs7Ozs7OzswQkFJUiw4REFBQ0M7Z0JBQUdULFdBQVU7MEJBQTRDOzs7Ozs7MEJBRzFELDhEQUFDVTtnQkFBR1YsV0FBVTswQkFDWEYsWUFBWWEsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsZUFBZUMsc0JBQ3ZDLDhEQUFDQzt3QkFBZWYsV0FBVTtrQ0FDeEIsNEVBQUNOLGlEQUFJQTs0QkFDSHNCLE1BQU0saUJBQTJDLE9BQTFCSCxjQUFjSSxXQUFXOzRCQUNoRGpCLFdBQVU7c0NBRVRhLGNBQWNLLFVBQVU7Ozs7Ozt1QkFMcEJKOzs7Ozs7Ozs7OzBCQVdiLDhEQUFDZjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNtQjt3QkFBR25CLFdBQVU7a0NBQTJDOzs7Ozs7a0NBQ3pELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0wsK0RBQXNCQTs0QkFDckJ5QixnQkFBZ0J0QixZQUFZdUIsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhEO0tBMUNNeEI7QUE0Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NvdW50cnlJbmZvLmpzPzk3YWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ291bnRyeVBvcHVsYXRpb25DaGFydCBmcm9tIFwiLi9Db3VudHJ5UG9wdWxhdGlvbkNoYXJ0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgQ291bnRyeUluZm8gPSAoeyBjb3VudHJ5SW5mbyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWItNiBnYXAtNlwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTgwMCBtYi00XCI+XHJcbiAgICAgICAgICB7Y291bnRyeUluZm8ubmFtZX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtjb3VudHJ5SW5mby5mbGFnVXJsfVxyXG4gICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgIHdpZHRoPVwiMTUwXCJcclxuICAgICAgICAgIGhlaWdodD1cIjE1MFwiXHJcbiAgICAgICAgICBhbHQ9XCJDb3VudHJ5IGZsYWcgaW1hZ2VcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtYi0zXCI+XHJcbiAgICAgICAgQm9yZGVyIGNvdW50cmllczpcclxuICAgICAgPC9oMj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBzcGFjZS15LTIgbWItNFwiPlxyXG4gICAgICAgIHtjb3VudHJ5SW5mby5ib3JkZXJzLm1hcCgoYm9yZGVyQ291bnRyeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj17YC9jb3VudHJ5L2luZm8vJHtib3JkZXJDb3VudHJ5LmNvdW50cnlDb2RlfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Ym9yZGVyQ291bnRyeS5jb21tb25OYW1lfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIG1iLTJcIj5Qb3B1bGF0aW9uPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPENvdW50cnlQb3B1bGF0aW9uQ2hhcnRcclxuICAgICAgICAgICAgcG9wdWxhdGlvbkRhdGE9e2NvdW50cnlJbmZvLnBvcHVsYXRpb25Db3VudHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5SW5mbztcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJDb3VudHJ5UG9wdWxhdGlvbkNoYXJ0IiwiSW1hZ2UiLCJDb3VudHJ5SW5mbyIsImNvdW50cnlJbmZvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJuYW1lIiwic3JjIiwiZmxhZ1VybCIsInByaW9yaXR5Iiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMiIsInVsIiwiYm9yZGVycyIsIm1hcCIsImJvcmRlckNvdW50cnkiLCJpbmRleCIsImxpIiwiaHJlZiIsImNvdW50cnlDb2RlIiwiY29tbW9uTmFtZSIsImgzIiwicG9wdWxhdGlvbkRhdGEiLCJwb3B1bGF0aW9uQ291bnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CountryInfo.js\n"));

/***/ })

});