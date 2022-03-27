/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/tutor/Tutor.js":
/*!***********************************!*\
  !*** ./components/tutor/Tutor.js ***!
  \***********************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Default */ \"./layout/Default.js\");\n/* harmony import */ var _components_services_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/services/Services */ \"./components/services/Services.js\");\n/* harmony import */ var _components_hero_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero/Hero */ \"./components/hero/Hero.js\");\n/* harmony import */ var _layout_BoxFloating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/BoxFloating */ \"./layout/BoxFloating.js\");\n/* harmony import */ var _components_process_Process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/process/Process */ \"./components/process/Process.js\");\n/* harmony import */ var _components_dowload_Downlaod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/dowload/Downlaod */ \"./components/dowload/Downlaod.js\");\n/* harmony import */ var _components_Learn_Learn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Learn/Learn */ \"./components/Learn/Learn.js\");\n/* harmony import */ var _components_tutor_Tutor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tutor/Tutor */ \"./components/tutor/Tutor.js\");\n/* harmony import */ var _components_tutor_Tutor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_tutor_Tutor__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"College\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Default__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_Hero__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_services_Services__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Learn_Learn__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_process_Process__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dowload_Downlaod__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_tutor_Tutor__WEBPACK_IMPORTED_MODULE_9___default()), {}, void 0, false, {\n                            fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_BoxFloating__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ayomiku/college-next-page/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDaUI7QUFDUztBQUNaO0FBQ0s7QUFDSTtBQUNFO0FBQ1I7QUFDQTtBQUM5QixRQUFRLENBQUNTLElBQUksR0FBRyxDQUFDO0lBQzlCLE1BQU0sNkVBQ0hDLENBQUc7O3dGQUNEVixrREFBSTs7Z0dBQ0ZXLENBQUs7a0NBQUMsQ0FBTzs7Ozs7O2dHQUNiQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYTt3QkFBQ0MsT0FBTyxFQUFDLENBQThCOzs7Ozs7Z0dBQzlEQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7Ozt3RkFFbENDLENBQUk7c0dBQ0hqQix1REFBYTs7b0dBQ1hFLDZEQUFJOzs7OztvR0FDSkQscUVBQVE7Ozs7O29HQUNSSywrREFBSzs7Ozs7b0dBQ0xGLG1FQUFPOzs7OztvR0FDUEMsb0VBQVE7Ozs7O29HQUNSRSxnRUFBSzs7Ozs7b0dBR0xKLDJEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCLENBQUM7S0F2QnVCSyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEZWZhdWx0SGVhZGVyIGZyb20gJy4uL2xheW91dC9EZWZhdWx0JztcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICcuLi9jb21wb25lbnRzL3NlcnZpY2VzL1NlcnZpY2VzJztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVyby9IZXJvJztcbmltcG9ydCBCb3hGbG9hdGluZyBmcm9tICcuLi9sYXlvdXQvQm94RmxvYXRpbmcnO1xuaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9jZXNzL1Byb2Nlc3MnO1xuaW1wb3J0IERvd25sYW9kIGZyb20gJy4uL2NvbXBvbmVudHMvZG93bG9hZC9Eb3dubGFvZCc7XG5pbXBvcnQgTGVhcm4gZnJvbSAnLi4vY29tcG9uZW50cy9MZWFybi9MZWFybic7XG5pbXBvcnQgVHV0b3IgZnJvbSAnLi4vY29tcG9uZW50cy90dXRvci9UdXRvcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvbGxlZ2U8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgICAgIDxib2R5PlxuICAgICAgICAgIDxEZWZhdWx0SGVhZGVyPlxuICAgICAgICAgICAgPEhlcm8vPlxuICAgICAgICAgICAgPFNlcnZpY2VzLz5cbiAgICAgICAgICAgIDxMZWFybi8+XG4gICAgICAgICAgICA8UHJvY2Vzcy8+XG4gICAgICAgICAgICA8RG93bmxhb2QvPlxuICAgICAgICAgICAgPFR1dG9yLz5cblxuICAgICAgICAgICAgICAgey8qIGZsb2F0aW5nIGNvbnRhaW5lcnMgKi99XG4gICAgICAgICAgICA8Qm94RmxvYXRpbmcvPlxuICAgICAgICAgIDwvRGVmYXVsdEhlYWRlcj5cbiAgICAgICAgIDwvYm9keT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJEZWZhdWx0SGVhZGVyIiwiU2VydmljZXMiLCJIZXJvIiwiQm94RmxvYXRpbmciLCJQcm9jZXNzIiwiRG93bmxhb2QiLCJMZWFybiIsIlR1dG9yIiwiSG9tZSIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});