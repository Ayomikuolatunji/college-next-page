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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Course; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_img_c1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/img/c1.png */ \"./public/img/c1.png\");\n/* harmony import */ var _public_img_c2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/c2.png */ \"./public/img/c2.png\");\n/* harmony import */ var _public_img_c3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/img/c3.png */ \"./public/img/c3.png\");\n/* harmony import */ var _public_img_cBg_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/img/cBg.png */ \"./public/img/cBg.png\");\n/* harmony import */ var _public_img_cs1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/img/cs1.png */ \"./public/img/cs1.png\");\n/* harmony import */ var _public_img_cs2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/img/cs2.png */ \"./public/img/cs2.png\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n   width: 70%;\\n   margin: 30px auto 40px auto;\\n   position: relative;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     margin: 30px;\\n     text-align: center;\\n     h1{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 700;\\n        font-size: 36px;\\n        line-height: 56px;\\n        /* identical to box height, or 156% */\\n        color: #1F1534;\\n        position: relative;\\n        mix-blend-mode: normal;\\n      \\n        :after{\\n            content:\\\"\\\";\\n            position: absolute;\\n            margin:120px auto 0 auto;\\n            bottom: 0;\\n            right: 0;\\n            left: 0;\\n            width: 56px;\\n            height: 2px;\\n            background: #1F1534;\\n            border-radius: 5px;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n      width: 350px;\\n      height: 412px;\\n      background: #FFFFFF;\\n      /* drop shadow */\\n      box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);\\n      border-radius: 20px; \\n\\n      h1{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 700;\\n        font-size: 21px;\\n        line-height: 32px;\\n        /* or 152% */\\n        color: #000000;\\n        mix-blend-mode: normal;\\n      }\\n      h3{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 300;\\n        font-size: 16px;\\n        line-height: 28px;\\n        /* identical to box height, or 175% */\\n        color: #7D7987;\\n        mix-blend-mode: normal;\\n        margin: 8px 0;\\n\\n      }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar CoursesStyle = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject());\n_c = CoursesStyle;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject1());\n_c1 = Title;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject2());\n_c2 = Item;\nfunction Course() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoursesStyle, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                className: \"title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Explore Courses\"\n                }, void 0, false, {\n                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                    lineNumber: 82,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                lineNumber: 81,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                    container: true,\n                    div: true,\n                    columns: 12,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                            item: true,\n                            md: 4,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"img-container relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                src: _public_img_c1_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                                alt: \"img-c1\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 31\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsPlayCircle, {\n                                                className: \"absolute top-1/2 text-4xl left-1/2 translate-x-1/2\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 31\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Introduction to General Physics PHY111\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \" By Emmanuel King..\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"start\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _public_img_cs1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                            alt: \"imaage-cs1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 30\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"play-course\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"Play course\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 31\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 27\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                lineNumber: 87,\n                                columnNumber: 22\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                            lineNumber: 86,\n                            columnNumber: 18\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                            item: true,\n                            md: 4,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"img-container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _public_img_c2_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                            alt: \"img-c1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 113,\n                                            columnNumber: 31\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Introduction to General Physics PHY111\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \" By Emmanuel King..\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"start\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _public_img_cs2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                            alt: \"imaage-cs1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 121,\n                                            columnNumber: 30\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 27\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                lineNumber: 111,\n                                columnNumber: 22\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                            lineNumber: 110,\n                            columnNumber: 18\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n                            item: true,\n                            md: 4,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"img-container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _public_img_c3_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            alt: \"img-c1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 31\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Introduction to General Physics PHY111\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 136,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \" By Emmanuel King..\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 27\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"start\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: _public_img_cs2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                            alt: \"imaage-cs1\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                            lineNumber: 139,\n                                            columnNumber: 30\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 27\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                                lineNumber: 129,\n                                columnNumber: 22\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                            lineNumber: 128,\n                            columnNumber: 18\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-background absolute top-0 right-0 -z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: _public_img_cBg_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                    alt: \"bg\"\n                }, void 0, false, {\n                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                    lineNumber: 149,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n                lineNumber: 148,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ayomiku/Desktop/college-next-page/components/courses/Course.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this));\n};\n_c3 = Course;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"CoursesStyle\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"Item\");\n$RefreshReg$(_c3, \"Course\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UmdCLEdBQUcsRUFBQyxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBT3RDZCxDQUFHO2dCQUFDSSxTQUFTLEVBQUMsQ0FBNEM7c0dBQ3hEZixtREFBSztvQkFDSndCLEdBQUcsRUFBRWpCLDJEQUFHO29CQUNSa0IsR0FBRyxFQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCLENBQUM7TUE5RXVCWCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY291cnNlcy9Db3Vyc2UuanM/MzJhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEdyaWQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnNQbGF5Q2lyY2xlfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBjMSBmcm9tIFwiLi4vLi4vcHVibGljL2ltZy9jMS5wbmdcIlxuaW1wb3J0IGMyIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1nL2MyLnBuZ1wiXG5pbXBvcnQgYzMgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWcvYzMucG5nXCJcbmltcG9ydCBjQmcgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWcvY0JnLnBuZ1wiXG5pbXBvcnQgY3MxIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1nL2NzMS5wbmdcIlxuaW1wb3J0IGNzMiBmcm9tIFwiLi4vLi4vcHVibGljL2ltZy9jczIucG5nXCJcblxuXG5jb25zdCBDb3Vyc2VzU3R5bGU9c3R5bGVkLmRpdmBcbiAgIHdpZHRoOiA3MCU7XG4gICBtYXJnaW46IDMwcHggYXV0byA0MHB4IGF1dG87XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gXG5jb25zdCBUaXRsZT1zdHlsZWQuZGl2YFxuICAgICBtYXJnaW46IDMwcHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgaDF7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE1NiUgKi9cbiAgICAgICAgY29sb3I6ICMxRjE1MzQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgIFxuICAgICAgICA6YWZ0ZXJ7XG4gICAgICAgICAgICBjb250ZW50OlwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW46MTIwcHggYXV0byAwIGF1dG87XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFGMTUzNDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbmBcbmNvbnN0IEl0ZW09c3R5bGVkLmRpdmBcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgIGhlaWdodDogNDEycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgLyogZHJvcCBzaGFkb3cgKi9cbiAgICAgIGJveC1zaGFkb3c6IDEwcHggNDBweCA1MHB4IHJnYmEoMjI5LCAyMzMsIDI0NiwgMC40KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxuXG4gICAgICBoMXtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAvKiBvciAxNTIlICovXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgICAgfVxuICAgICAgaDN7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE3NSUgKi9cbiAgICAgICAgY29sb3I6ICM3RDc5ODc7XG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG5cbiAgICAgIH1cbmBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q291cnNlc1N0eWxlPlxuICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGgxPkV4cGxvcmUgQ291cnNlczwvaDE+XG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIDxCb3ggc3R5bGU9e3ttYXJnaW5Ub3A6XCIyMHB4XCJ9fT5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXYgY29sdW1ucz17MTJ9PlxuICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1wiaW1nLWMxXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJzUGxheUNpcmNsZSBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0xLzIgdGV4dC00eGwgbGVmdC0xLzIgdHJhbnNsYXRlLXgtMS8yJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SW50cm9kdWN0aW9uIHRvIEdlbmVyYWwgUGh5c2ljcyBQSFkxMTE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+IEJ5IEVtbWFudWVsIEtpbmcuLjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjczF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hYWdlLWNzMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5LWNvdXJzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5QbGF5IGNvdXJzZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1wiaW1nLWMxXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkludHJvZHVjdGlvbiB0byBHZW5lcmFsIFBoeXNpY3MgUEhZMTExPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiBCeSBFbW1hbnVlbCBLaW5nLi48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y3MyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWFnZS1jczFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs0fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjM31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1wiaW1nLWMxXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkludHJvZHVjdGlvbiB0byBHZW5lcmFsIFBoeXNpY3MgUEhZMTExPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiBCeSBFbW1hbnVlbCBLaW5nLi48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y3MyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWFnZS1jczFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1iYWNrZ3JvdW5kIGFic29sdXRlIHRvcC0wIHJpZ2h0LTAgLXotMTBcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17Y0JnfVxuICAgICAgICAgICAgYWx0PVwiYmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvQ291cnNlc1N0eWxlPlxuICApXG59XG4iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIkltYWdlIiwiUmVhY3QiLCJCc1BsYXlDaXJjbGUiLCJzdHlsZWQiLCJjMSIsImMyIiwiYzMiLCJjQmciLCJjczEiLCJjczIiLCJDb3Vyc2VzU3R5bGUiLCJkaXYiLCJUaXRsZSIsIkl0ZW0iLCJDb3Vyc2UiLCJjbGFzc05hbWUiLCJoMSIsInN0eWxlIiwibWFyZ2luVG9wIiwiY29udGFpbmVyIiwiY29sdW1ucyIsIml0ZW0iLCJtZCIsInhzIiwic3JjIiwiYWx0IiwiaDMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/courses/Course.js\n");

/***/ })

});