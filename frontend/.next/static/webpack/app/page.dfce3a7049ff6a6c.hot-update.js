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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ListControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ListControllers */ \"(app-pages-browser)/./src/app/components/ListControllers.js\");\n/* harmony import */ var _components_CountriesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CountriesList */ \"(app-pages-browser)/./src/app/components/CountriesList.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Loading */ \"(app-pages-browser)/./src/app/components/Loading.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [countries, setCountries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [maxPage, setMaxPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3002/countries/getAvailableCountries\").then((res)=>{\n            setCountries(res.data.countries);\n            const pagesNumber = Math.ceil(res.data.countries.length / 10);\n            setPage(1);\n            setMaxPage(pagesNumber);\n            setIsLoading(false);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-b from-blue-400 to-purple-600 flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white rounded-lg shadow-lg p-8 max-w-lg w-full min-h-screen my-5 overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold text-center text-gray-800 mb-6\",\n                    children: \"Country list\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CountriesList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    countries: countries,\n                    page: page\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this),\n                !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListControllers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    page: page,\n                    setPage: setPage,\n                    maxPage: maxPage\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\page.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\uriel\\\\OneDrive\\\\Escritorio\\\\DT Tech TEST\\\\frontend\\\\src\\\\app\\\\page.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"TVdsbPoUyo5tOAM4lG48uXr4a0I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ2dCO0FBQ2lCO0FBQ0o7QUFDWjtBQUU1QixTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFFdkNELDhDQUFPQSxDQUFDO1FBQ05ELDZDQUFLQSxDQUFDZSxHQUFHLENBQUNDLHVEQUErQyxFQUFFRyxJQUFJLENBQUMsQ0FBQ0M7WUFDL0RaLGFBQWFZLElBQUlDLElBQUksQ0FBQ2QsU0FBUztZQUUvQixNQUFNZSxjQUFjQyxLQUFLQyxJQUFJLENBQUNKLElBQUlDLElBQUksQ0FBQ2QsU0FBUyxDQUFDa0IsTUFBTSxHQUFHO1lBRTFEYixRQUFRO1lBQ1JFLFdBQVdRO1lBQ1haLGFBQWE7UUFDZjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFvRDs7Ozs7O2dCQUdqRWxCLDBCQUNDLDhEQUFDSiwyREFBT0E7Ozs7eUNBRVIsOERBQUNELGlFQUFhQTtvQkFBQ0csV0FBV0E7b0JBQVdJLE1BQU1BOzs7Ozs7Z0JBRTVDLENBQUNGLDJCQUNBLDhEQUFDTixtRUFBZUE7b0JBQUNRLE1BQU1BO29CQUFNQyxTQUFTQTtvQkFBU0MsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xFO0dBbkN3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3RDb250cm9sbGVycyBmcm9tIFwiLi9jb21wb25lbnRzL0xpc3RDb250cm9sbGVyc1wiO1xuaW1wb3J0IENvdW50cmllc0xpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9Db3VudHJpZXNMaXN0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NvdW50cmllcywgc2V0Q291bnRyaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW21heFBhZ2UsIHNldE1heFBhZ2VdID0gdXNlU3RhdGUoMSk7XG5cbiAgdXNlTWVtbygoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FWQUlMQUJMRV9DT1VOVFJJRVNfVVJMKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldENvdW50cmllcyhyZXMuZGF0YS5jb3VudHJpZXMpO1xuXG4gICAgICBjb25zdCBwYWdlc051bWJlciA9IE1hdGguY2VpbChyZXMuZGF0YS5jb3VudHJpZXMubGVuZ3RoIC8gMTApO1xuXG4gICAgICBzZXRQYWdlKDEpO1xuICAgICAgc2V0TWF4UGFnZShwYWdlc051bWJlcik7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1iIGZyb20tYmx1ZS00MDAgdG8tcHVycGxlLTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBwLTggbWF4LXctbGcgdy1mdWxsIG1pbi1oLXNjcmVlbiBteS01IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtZ3JheS04MDAgbWItNlwiPlxuICAgICAgICAgIENvdW50cnkgbGlzdFxuICAgICAgICA8L2gxPlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENvdW50cmllc0xpc3QgY291bnRyaWVzPXtjb3VudHJpZXN9IHBhZ2U9e3BhZ2V9IC8+XG4gICAgICAgICl9XG4gICAgICAgIHshaXNMb2FkaW5nICYmIChcbiAgICAgICAgICA8TGlzdENvbnRyb2xsZXJzIHBhZ2U9e3BhZ2V9IHNldFBhZ2U9e3NldFBhZ2V9IG1heFBhZ2U9e21heFBhZ2V9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIkxpc3RDb250cm9sbGVycyIsIkNvdW50cmllc0xpc3QiLCJMb2FkaW5nIiwiSG9tZSIsImNvdW50cmllcyIsInNldENvdW50cmllcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInBhZ2UiLCJzZXRQYWdlIiwibWF4UGFnZSIsInNldE1heFBhZ2UiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVZBSUxBQkxFX0NPVU5UUklFU19VUkwiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInBhZ2VzTnVtYmVyIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});