"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/courses/Course.js":
/*!**************************************!*\
  !*** ./components/courses/Course.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Course; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_img_c1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/c1.png */ \"./public/img/c1.png\");\n/* harmony import */ var _public_img_c2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/c2.png */ \"./public/img/c2.png\");\n/* harmony import */ var _public_img_c3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/c3.png */ \"./public/img/c3.png\");\n/* harmony import */ var _public_img_cBg_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/cBg.png */ \"./public/img/cBg.png\");\n/* harmony import */ var _public_img_cs1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/cs1.png */ \"./public/img/cs1.png\");\n/* harmony import */ var _public_img_cs2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/img/cs2.png */ \"./public/img/cs2.png\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n   width: 70%;\\n   margin: 30px auto 40px auto;\\n   position: relative;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     margin: 30px;\\n     text-align: center;\\n     h1{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 700;\\n        font-size: 36px;\\n        line-height: 56px;\\n        /* identical to box height, or 156% */\\n        color: #1F1534;\\n        position: relative;\\n        mix-blend-mode: normal;\\n      \\n        :after{\\n            content:\\\"\\\";\\n            position: absolute;\\n            margin:120px auto 0 auto;\\n            bottom: 0;\\n            right: 0;\\n            left: 0;\\n            width: 56px;\\n            height: 2px;\\n            background: #1F1534;\\n            border-radius: 5px;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      width: 350px;\\n      height: 412px;\\n      background: #FFFFFF;\\n      /* drop shadow */\\n      box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);\\n      border-radius: 20px; \\n\\n      h1{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 700;\\n        font-size: 21px;\\n        line-height: 32px;\\n        /* or 152% */\\n        color: #000000;\\n        mix-blend-mode: normal;\\n      }\\n      h3{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 300;\\n        font-size: 16px;\\n        line-height: 28px;\\n        /* identical to box height, or 175% */\\n        color: #7D7987;\\n        mix-blend-mode: normal;\\n        margin: 8px 0;\\n\\n      }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar CoursesStyle = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject());\n_c = CoursesStyle;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject1());\n_c1 = Title;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject2());\n_c2 = Item;\nfunction Course() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoursesStyle, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                className: \"title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Explore Courses\"\n                }, void 0, false, {\n                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                    lineNumber: 82,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                lineNumber: 81,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                    container: true,\n                    div: true,\n                    columns: 12,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                            item: true,\n                            md: 4,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"img-container relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                src: _public_img_c1_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                                alt: \"img-c1\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 31\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsPlayCircle, {\n                                                className: \"abolute \"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 31\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Introduction to General Physics PHY111\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \" By Emmanuel King..\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"start\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _public_img_cs1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                            alt: \"imaage-cs1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 30\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"play-course\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"Play course\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 31\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 27\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                lineNumber: 87,\n                                columnNumber: 22\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                            lineNumber: 86,\n                            columnNumber: 18\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                            item: true,\n                            md: 4,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"img-container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _public_img_c2_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                            alt: \"img-c1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 113,\n                                            columnNumber: 31\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Introduction to General Physics PHY111\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \" By Emmanuel King..\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"start\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _public_img_cs2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                            alt: \"imaage-cs1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 121,\n                                            columnNumber: 30\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 27\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                lineNumber: 111,\n                                columnNumber: 22\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                            lineNumber: 110,\n                            columnNumber: 18\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                            item: true,\n                            md: 4,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"img-container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _public_img_c3_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            alt: \"img-c1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 31\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Introduction to General Physics PHY111\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 136,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \" By Emmanuel King..\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"start\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _public_img_cs2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                            alt: \"imaage-cs1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 139,\n                                            columnNumber: 30\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 27\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                lineNumber: 129,\n                                columnNumber: 22\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                            lineNumber: 128,\n                            columnNumber: 18\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-background absolute top-0 right-0 -z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: _public_img_cBg_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                    alt: \"bg\"\n                }, void 0, false, {\n                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                    lineNumber: 149,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                lineNumber: 148,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this));\n};\n_c3 = Course;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"CoursesStyle\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"Item\");\n$RefreshReg$(_c3, \"Course\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvdXJzZXMvQ291cnNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1g7QUFDTDtBQUNrQjtBQUNMO0FBQ0U7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O1FBR1osQ0FJOUI7Ozs7Ozs7OztRQUN1QixDQTJCdkI7Ozs7Ozs7OztRQUNzQixDQThCdEI7Ozs7Ozs7QUEvREEsR0FBSyxDQUFDWSxZQUFZLEdBQUNQLDZEQUFVO0tBQXZCTyxZQUFZO0FBS2xCLEdBQUssQ0FBQ0UsS0FBSyxHQUFDVCw2REFBVTtNQUFoQlMsS0FBSztBQTRCWCxHQUFLLENBQUNDLElBQUksR0FBQ1YsNkRBQVU7TUFBZlUsSUFBSTtBQStCSyxRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2hDLE1BQU0sNkVBQ0hKLFlBQVk7O3dGQUNURSxLQUFLO2dCQUFDRyxTQUFTLEVBQUMsQ0FBTztzR0FDbEJDLENBQUU7OEJBQUMsQ0FBZTs7Ozs7Ozs7Ozs7d0ZBRXRCbEIsK0NBQUc7Z0JBQUNtQixLQUFLLEVBQUUsQ0FBQ0M7b0JBQUFBLFNBQVMsRUFBQyxDQUFNO2dCQUFBLENBQUM7c0dBQ3pCbkIsZ0RBQUk7b0JBQUNvQixTQUFTO29CQUFDUixHQUFHO29CQUFDUyxPQUFPLEVBQUUsRUFBRTs7b0dBQ3pCckIsZ0RBQUk7NEJBQUNzQixJQUFJOzRCQUFDQyxFQUFFLEVBQUUsQ0FBQzs0QkFBRUMsRUFBRSxFQUFFLEVBQUU7a0hBQ25CVixJQUFJOztnSEFDQ0YsQ0FBRzt3Q0FBQ0ksU0FBUyxFQUFDLENBQXdCOzt3SEFDbENmLG1EQUFLO2dEQUNMd0IsR0FBRyxFQUFFcEIsMERBQUU7Z0RBQ1BxQixHQUFHLEVBQUUsQ0FBUTs7Ozs7O3dIQUVidkIseURBQVk7Z0RBQUNhLFNBQVMsRUFBQyxDQUFVOzs7Ozs7Ozs7Ozs7Z0hBRXJDQyxDQUFFO2tEQUFDLENBQXNDOzs7Ozs7Z0hBQ3pDVSxDQUFFO2tEQUFDLENBQW1COzs7Ozs7Z0hBQ3RCZixDQUFHO3dDQUFDSSxTQUFTLEVBQUMsQ0FBTzs4SEFDbEJmLG1EQUFLOzRDQUNKd0IsR0FBRyxFQUFFaEIsMkRBQUc7NENBQ1JpQixHQUFHLEVBQUMsQ0FBWTs7Ozs7Ozs7Ozs7Z0hBS3BCZCxDQUFHO3dDQUFDSSxTQUFTLEVBQUMsQ0FBYTs4SEFDdkJZLENBQU07c0RBQUMsQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvR0FJL0I1QixnREFBSTs0QkFBQ3NCLElBQUk7NEJBQUNDLEVBQUUsRUFBRSxDQUFDOzRCQUFFQyxFQUFFLEVBQUUsRUFBRTtrSEFDbkJWLElBQUk7O2dIQUNDRixDQUFHO3dDQUFDSSxTQUFTLEVBQUMsQ0FBZTs4SEFDekJmLG1EQUFLOzRDQUNMd0IsR0FBRyxFQUFFbkIsMERBQUU7NENBQ1BvQixHQUFHLEVBQUUsQ0FBUTs7Ozs7Ozs7Ozs7Z0hBR2pCVCxDQUFFO2tEQUFDLENBQXNDOzs7Ozs7Z0hBQ3pDVSxDQUFFO2tEQUFDLENBQW1COzs7Ozs7Z0hBQ3RCZixDQUFHO3dDQUFDSSxTQUFTLEVBQUMsQ0FBTzs4SEFDbEJmLG1EQUFLOzRDQUNKd0IsR0FBRyxFQUFFZiwyREFBRzs0Q0FDUmdCLEdBQUcsRUFBQyxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29HQUs3QjFCLGdEQUFJOzRCQUFDc0IsSUFBSTs0QkFBQ0MsRUFBRSxFQUFFLENBQUM7NEJBQUVDLEVBQUUsRUFBRSxFQUFFO2tIQUNuQlYsSUFBSTs7Z0hBQ0NGLENBQUc7d0NBQUNJLFNBQVMsRUFBQyxDQUFlOzhIQUN6QmYsbURBQUs7NENBQ0x3QixHQUFHLEVBQUVsQiwwREFBRTs0Q0FDUG1CLEdBQUcsRUFBRSxDQUFROzs7Ozs7Ozs7OztnSEFHakJULENBQUU7a0RBQUMsQ0FBc0M7Ozs7OztnSEFDekNVLENBQUU7a0RBQUMsQ0FBbUI7Ozs7OztnSEFDdEJmLENBQUc7d0NBQUNJLFNBQVMsRUFBQyxDQUFPOzhIQUNsQmYsbURBQUs7NENBQ0p3QixHQUFHLEVBQUVmLDJEQUFHOzRDQUNSZ0IsR0FBRyxFQUFDLENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFPdENkLENBQUc7Z0JBQUNJLFNBQVMsRUFBQyxDQUE0QztzR0FDeERmLG1EQUFLO29CQUNKd0IsR0FBRyxFQUFFakIsMkRBQUc7b0JBQ1JrQixHQUFHLEVBQUMsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEIsQ0FBQztNQTlFdUJYLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3Vyc2VzL0NvdXJzZS5qcz8zMmE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCc1BsYXlDaXJjbGV9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGMxIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1nL2MxLnBuZ1wiXG5pbXBvcnQgYzIgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWcvYzIucG5nXCJcbmltcG9ydCBjMyBmcm9tIFwiLi4vLi4vcHVibGljL2ltZy9jMy5wbmdcIlxuaW1wb3J0IGNCZyBmcm9tIFwiLi4vLi4vcHVibGljL2ltZy9jQmcucG5nXCJcbmltcG9ydCBjczEgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWcvY3MxLnBuZ1wiXG5pbXBvcnQgY3MyIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1nL2NzMi5wbmdcIlxuXG5cbmNvbnN0IENvdXJzZXNTdHlsZT1zdHlsZWQuZGl2YFxuICAgd2lkdGg6IDcwJTtcbiAgIG1hcmdpbjogMzBweCBhdXRvIDQwcHggYXV0bztcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmBcbmNvbnN0IFRpdGxlPXN0eWxlZC5kaXZgXG4gICAgIG1hcmdpbjogMzBweDtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBoMXtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTU2JSAqL1xuICAgICAgICBjb2xvcjogIzFGMTUzNDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgICAgXG4gICAgICAgIDphZnRlcntcbiAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbjoxMjBweCBhdXRvIDAgYXV0bztcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUYxNTM0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgfVxuYFxuY29uc3QgSXRlbT1zdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgaGVpZ2h0OiA0MTJweDtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAvKiBkcm9wIHNoYWRvdyAqL1xuICAgICAgYm94LXNoYWRvdzogMTBweCA0MHB4IDUwcHggcmdiYSgyMjksIDIzMywgMjQ2LCAwLjQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDsgXG5cbiAgICAgIGgxe1xuICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIC8qIG9yIDE1MiUgKi9cbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICB9XG4gICAgICBoM3tcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTc1JSAqL1xuICAgICAgICBjb2xvcjogIzdENzk4NztcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcblxuICAgICAgfVxuYFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlKCkge1xuICByZXR1cm4gKFxuICAgIDxDb3Vyc2VzU3R5bGU+XG4gICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICA8aDE+RXhwbG9yZSBDb3Vyc2VzPC9oMT5cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgPEJveCBzdHlsZT17e21hcmdpblRvcDpcIjIwcHhcIn19PlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpdiBjb2x1bW5zPXsxMn0+XG4gICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezR9IHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICA8SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2MxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17XCJpbWctYzFcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnNQbGF5Q2lyY2xlIGNsYXNzTmFtZT0nYWJvbHV0ZSAnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5JbnRyb2R1Y3Rpb24gdG8gR2VuZXJhbCBQaHlzaWNzIFBIWTExMTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4gQnkgRW1tYW51ZWwgS2luZy4uPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NzMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFhZ2UtY3MxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXktY291cnNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlBsYXkgY291cnNlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezR9IHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICA8SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2MyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17XCJpbWctYzFcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SW50cm9kdWN0aW9uIHRvIEdlbmVyYWwgUGh5c2ljcyBQSFkxMTE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+IEJ5IEVtbWFudWVsIEtpbmcuLjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjczJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hYWdlLWNzMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezR9IHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICA8SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2MzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17XCJpbWctYzFcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SW50cm9kdWN0aW9uIHRvIEdlbmVyYWwgUGh5c2ljcyBQSFkxMTE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+IEJ5IEVtbWFudWVsIEtpbmcuLjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjczJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hYWdlLWNzMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJhY2tncm91bmQgYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCAtei0xMFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtjQmd9XG4gICAgICAgICAgICBhbHQ9XCJiZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9Db3Vyc2VzU3R5bGU+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJHcmlkIiwiSW1hZ2UiLCJSZWFjdCIsIkJzUGxheUNpcmNsZSIsInN0eWxlZCIsImMxIiwiYzIiLCJjMyIsImNCZyIsImNzMSIsImNzMiIsIkNvdXJzZXNTdHlsZSIsImRpdiIsIlRpdGxlIiwiSXRlbSIsIkNvdXJzZSIsImNsYXNzTmFtZSIsImgxIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJjb250YWluZXIiLCJjb2x1bW5zIiwiaXRlbSIsIm1kIiwieHMiLCJzcmMiLCJhbHQiLCJoMyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/courses/Course.js\n");

/***/ })

});