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

/***/ "./components/testimonial/Testimonial.js":
/*!***********************************************!*\
  !*** ./components/testimonial/Testimonial.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Testimonial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nfunction _templateObject() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n    width: 70%;\\n    height: auto;\\n    margin:30px  auto;\\n    background: linear-gradient(208.18deg, #FB3846 9.05%, #B84A51 76.74%);\\n    border-radius: 24px;\\n\\n    @media (max-width:640px){\\n        width: 94%;\\n        margin-top: 100px;\\n    }\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject1() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n    padding: 20px 0;\\n    text-align: center;\\n\\n    h1{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 700;\\n        font-size: 36px;\\n        line-height: 48px;\\n        /* identical to box height, or 133% */\\n        color: #FFFFFF;\\n        mix-blend-mode: normal;\\n        margin-top: 40px;\\n\\n        @media (max-width:640px){\\n            font-size: 28px;\\n        }\\n    }\\n\\n    @media (max-width:640px){\\n      padding-left:3px;\\n      padding-right: 3px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject2() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n   display: flex;\\n   align-items: center;\\n\\n   h1{\\n    font-family: 'Lato';\\n    font-style: normal;\\n    font-weight: 700;\\n    font-size: 30px;\\n    line-height: 48px;\\n    /* identical to box height, or 218% */\\n    color: #FFFFFF;\\n    mix-blend-mode: normal;\\n    }\\n    h3{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 400;\\n        font-size: 25px;\\n        line-height: 48px;\\n        /* identical to box height, or 267% */\\n        color: rgba(255, 255, 255, 0.85);\\n        mix-blend-mode: normal;\\n    }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject3() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n   margin-top: 30px;\\n   h1{\\n    font-family: 'Lato';\\n    font-style: normal;\\n    font-weight: 400;\\n    font-size: 29px;\\n    line-height: 30px;\\n    /* or 158% */\\n    color: rgba(255, 255, 255, 0.9);\\n    mix-blend-mode: normal;\\n\\n    @media (max-width:640px){\\n        font-size: 19px;\\n    }\\n   }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject4() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n  width: 80%;\\n  padding: 30px 0 60px 0;\\n  margin:30px auto;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data1;\n    };\n    return data1;\n}\nvar TesTimonialstyle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = TesTimonialstyle;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c1 = Title;\nvar Left = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = Left;\nvar Right = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c3 = Right;\nvar SliderStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n_c4 = SliderStyle;\nvar data = [\n    {\n        name: \"Abraham Rashford\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.\",\n        img: \"img/t1.png\"\n    },\n    {\n        name: \"Chika Nonso\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.I did well in all my pore\",\n        img: \"img/t1.png\"\n    },\n    {\n        name: \"Adams Bayo\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.College app is amazing\",\n        img: \"img/t1.png\"\n    }\n];\nvar Testimonial = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Testimonial, Component1);\n    var _super = _createSuper(Testimonial);\n    function Testimonial(props) {\n        _classCallCheck(this, Testimonial);\n        return _super.call(this, props);\n    }\n    _createClass(Testimonial, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var _obj;\n                var settings = (_obj = {\n                    dots: true,\n                    infinite: true,\n                    speed: 500,\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    autoplay: true\n                }, _defineProperty(_obj, \"speed\", 2000), _defineProperty(_obj, \"autoplaySpeed\", 2000), _defineProperty(_obj, \"fade\", true), _obj);\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TesTimonialstyle, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"See what people are saying about College\"\n                            }, void 0, false, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                lineNumber: 135,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderStyle, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({\n                                ref: function(c) {\n                                    return _this.slider = c;\n                                }\n                            }, settings, {\n                                children: data === null || data === void 0 ? void 0 : data.map(function(each, i) {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                                            container: true,\n                                            columns: 12,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                                                    md: 6,\n                                                    xs: 12,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Left, {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"img\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                    src: each.img,\n                                                                    alt: \"testimonial img\",\n                                                                    className: \"rounded-full border-4 border-white\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                    lineNumber: 145,\n                                                                    columnNumber: 49\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                lineNumber: 144,\n                                                                columnNumber: 45\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"title ml-4\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                                        children: each.name\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                        lineNumber: 152,\n                                                                        columnNumber: 49\n                                                                    }, _this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                        children: each.school\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                        lineNumber: 153,\n                                                                        columnNumber: 49\n                                                                    }, _this)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                lineNumber: 151,\n                                                                columnNumber: 45\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                        lineNumber: 143,\n                                                        columnNumber: 37\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                    lineNumber: 142,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                                                    md: 6,\n                                                    xs: 12,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Right, {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                            children: each.testimony\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                            lineNumber: 159,\n                                                            columnNumber: 41\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                        lineNumber: 158,\n                                                        columnNumber: 37\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                    lineNumber: 157,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                            lineNumber: 141,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, i, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                        lineNumber: 140,\n                                        columnNumber: 28\n                                    }, _this));\n                                })\n                            }), void 0, false, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                lineNumber: 138,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                    lineNumber: 133,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ]);\n    return Testimonial;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"TesTimonialstyle\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"Left\");\n$RefreshReg$(_c3, \"Right\");\n$RefreshReg$(_c4, \"SliderStyle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNEO0FBQ1I7QUFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR0osQ0FZbEM7Ozs7Ozs7OztRQUN1QixDQXdCdkI7Ozs7Ozs7OztRQUNzQixDQXdCdEI7Ozs7Ozs7OztRQUV1QixDQWdCdkI7Ozs7Ozs7OztRQUU2QixDQUk3Qjs7Ozs7OztBQXRGQSxHQUFLLENBQUNNLGdCQUFnQixHQUFDRCw2REFBVTtLQUEzQkMsZ0JBQWdCO0FBYXRCLEdBQUssQ0FBQ0UsS0FBSyxHQUFDSCw2REFBVTtNQUFoQkcsS0FBSztBQXlCWCxHQUFLLENBQUNDLElBQUksR0FBQ0osNkRBQVU7TUFBZkksSUFBSTtBQTBCVixHQUFLLENBQUNDLEtBQUssR0FBQ0wsNkRBQVU7TUFBaEJLLEtBQUs7QUFrQlgsR0FBSyxDQUFDQyxXQUFXLEdBQUNOLDZEQUFVO01BQXRCTSxXQUFXO0FBS2pCLEdBQUssQ0FBQ0MsSUFBSSxHQUFDLENBQUM7SUFDUixDQUFDO1FBQ0dDLElBQUksRUFBQyxDQUFrQjtRQUN2QkMsTUFBTSxFQUFDLENBQU87UUFDZEMsU0FBUyxFQUFDLENBQTRIO1FBQ3BJQyxHQUFDLEVBQUMsQ0FBWTtJQUNwQixDQUFDO0lBQ0QsQ0FBQztRQUNHSCxJQUFJLEVBQUMsQ0FBYTtRQUNsQkMsTUFBTSxFQUFDLENBQU87UUFDZEMsU0FBUyxFQUFDLENBQXFKO1FBQzdKQyxHQUFDLEVBQUMsQ0FBWTtJQUNwQixDQUFDO0lBQ0EsQ0FBQztRQUNFSCxJQUFJLEVBQUMsQ0FBWTtRQUNqQkMsTUFBTSxFQUFDLENBQU87UUFDZEMsU0FBUyxFQUFDLENBQWtKO1FBQzVKQyxHQUFHLEVBQUMsQ0FBWTtJQUNwQixDQUFDO0FBQ0wsQ0FBQztJQUNvQkMsV0FBVyxpQkFBakIsUUFBUTs7OzthQUFGQSxXQUFXLENBQ2xCQyxLQUFLOztpQ0FDVEEsS0FBSzs7OztZQUdiQyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7O29CQUNTLElBV2hCO2dCQVhELEdBQUssQ0FBQ0MsUUFBUSxJQUFHLElBV2hCO29CQVZDQyxJQUFJLEVBQUUsSUFBSTtvQkFDVkMsUUFBUSxFQUFFLElBQUk7b0JBQ2RDLEtBQUssRUFBRSxHQUFHO29CQUNWQyxZQUFZLEVBQUUsQ0FBQztvQkFDZkMsY0FBYyxFQUFFLENBQUM7b0JBQ2pCQyxRQUFRLEVBQUUsSUFBSTttQ0FOQyxJQVdoQixFQUpDSCxDQUFLLFFBQUUsSUFBSSxtQkFQSSxJQVdoQixFQUhDSSxDQUFhLGdCQUFFLElBQUksbUJBUkosSUFXaEIsRUFGQ0MsQ0FBSSxPQUFDLElBQUksR0FUTSxJQVdoQjtnQkFDRCxNQUFNLDZFQUNIdEIsZ0JBQWdCOztvR0FDWkUsS0FBSztrSEFDQ3FCLENBQUU7MENBQUMsQ0FBd0M7Ozs7Ozs7Ozs7O29HQUVqRGxCLFdBQVc7a0hBQ0xQLG1EQUFNO2dDQUFDMEIsR0FBRyxFQUFFQyxRQUFRLENBQVJBLENBQUM7b0NBQUksTUFBTUMsT0FBQUEsTUFBTSxHQUFHRCxDQUFDOzsrQkFBT1gsUUFBUTswQ0FDaERSLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLElBQUksQ0FBRXFCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBQ0MsQ0FBQyxFQUFHLENBQUM7b0NBQ2xCLE1BQU0sNkVBQUVuQyw4Q0FBRzs4SEFDTkMsK0NBQUk7NENBQUNtQyxTQUFTOzRDQUFDQyxPQUFPLEVBQUUsRUFBRTs7NEhBQ2xCcEMsK0NBQUk7b0RBQUNxQyxFQUFFLEVBQUUsQ0FBQztvREFBRUMsRUFBRSxFQUFFLEVBQUU7MElBQ2Q5QixJQUFJOzt3SUFDSUYsQ0FBRztnRUFBQ2lDLFNBQVMsRUFBQyxDQUFLO3NKQUNmeEIsQ0FBRztvRUFDSnlCLEdBQUcsRUFBRVAsSUFBSSxDQUFDbEIsR0FBRztvRUFDYjBCLEdBQUcsRUFBQyxDQUFpQjtvRUFDcEJGLFNBQVMsRUFBQyxDQUFvQzs7Ozs7Ozs7Ozs7d0lBR2xEakMsQ0FBRztnRUFBQ2lDLFNBQVMsRUFBQyxDQUFZOztnSkFDdEJYLENBQUU7a0ZBQUVLLElBQUksQ0FBQ3JCLElBQUk7Ozs7OztnSkFDYjhCLENBQUU7a0ZBQUVULElBQUksQ0FBQ3BCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRIQUkvQmIsK0NBQUk7b0RBQUNxQyxFQUFFLEVBQUUsQ0FBQztvREFBRUMsRUFBRSxFQUFFLEVBQUU7MElBQ2Q3QixLQUFLOzhJQUNEbUIsQ0FBRTtzRUFDRUssSUFBSSxDQUFDbkIsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FwQnRCb0IsQ0FBQzs7Ozs7Z0NBMEJ0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztZQUtmLENBQUM7Ozs7RUF6RHNDaEMsNENBQVM7QUFBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZXN0aW1vbmlhbC9UZXN0aW1vbmlhbC5qcz9hZWJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5cbmNvbnN0IFRlc1RpbW9uaWFsc3R5bGU9c3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46MzBweCAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjA4LjE4ZGVnLCAjRkIzODQ2IDkuMDUlLCAjQjg0QTUxIDc2Ljc0JSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjY0MHB4KXtcbiAgICAgICAgd2lkdGg6IDk0JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgfVxuXG5gXG5jb25zdCBUaXRsZT1zdHlsZWQuZGl2YFxuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBoMXtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTMzJSAqL1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo2NDBweCl7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDo2NDBweCl7XG4gICAgICBwYWRkaW5nLWxlZnQ6M3B4O1xuICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIH1cbmBcbmNvbnN0IExlZnQ9c3R5bGVkLmRpdmBcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICBoMXtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMjE4JSAqL1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgfVxuICAgIGgze1xuICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAyNjclICovXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgICAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgIH1cbmBcblxuY29uc3QgUmlnaHQ9c3R5bGVkLmRpdmBcbiAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICBoMXtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMjlweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAvKiBvciAxNTglICovXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NjQwcHgpe1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgfVxuICAgfVxuYFxuXG5jb25zdCBTbGlkZXJTdHlsZT1zdHlsZWQuZGl2YFxuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAzMHB4IDAgNjBweCAwO1xuICBtYXJnaW46MzBweCBhdXRvO1xuYFxuY29uc3QgZGF0YT1bXG4gICAge1xuICAgICAgICBuYW1lOlwiQWJyYWhhbSBSYXNoZm9yZFwiLFxuICAgICAgICBzY2hvb2w6XCJGdXByZVwiLFxuICAgICAgICB0ZXN0aW1vbnk6XCLigJxXb3cgSSBsb3ZlIHRoaXMgYXBwIGFuZCBJIExvdmUgdGhlIGZhY3QgdGhhdCBpIGNhbiB3YXRjaCB2aWRlb3MgYXQgbXkgb3duIGNvbnZpZW5jaWUgd2l0aG91dCBicmVha2luZyB0aGUgYmFuayB3aXRoIGRhdGEuXCIsXG4gICAgICAgIGltZzpcImltZy90MS5wbmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOlwiQ2hpa2EgTm9uc29cIixcbiAgICAgICAgc2Nob29sOlwiRnVwcmVcIixcbiAgICAgICAgdGVzdGltb255Olwi4oCcV293IEkgbG92ZSB0aGlzIGFwcCBhbmQgSSBMb3ZlIHRoZSBmYWN0IHRoYXQgaSBjYW4gd2F0Y2ggdmlkZW9zIGF0IG15IG93biBjb252aWVuY2llIHdpdGhvdXQgYnJlYWtpbmcgdGhlIGJhbmsgd2l0aCBkYXRhLkkgZGlkIHdlbGwgaW4gYWxsIG15IHBvcmVcIixcbiAgICAgICAgaW1nOlwiaW1nL3QxLnBuZ1wiXG4gICAgfSxcbiAgICAge1xuICAgICAgICBuYW1lOlwiQWRhbXMgQmF5b1wiLFxuICAgICAgICBzY2hvb2w6XCJGdXByZVwiLFxuICAgICAgICB0ZXN0aW1vbnk6XCLigJxXb3cgSSBsb3ZlIHRoaXMgYXBwIGFuZCBJIExvdmUgdGhlIGZhY3QgdGhhdCBpIGNhbiB3YXRjaCB2aWRlb3MgYXQgbXkgb3duIGNvbnZpZW5jaWUgd2l0aG91dCBicmVha2luZyB0aGUgYmFuayB3aXRoIGRhdGEuQ29sbGVnZSBhcHAgaXMgYW1hemluZ1wiLFxuICAgICAgICBpbWc6XCJpbWcvdDEucG5nXCJcbiAgICB9XG5dXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0aW1vbmlhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBzcGVlZDogMjAwMCxcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICBmYWRlOnRydWUsXG4gICAgICBcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8VGVzVGltb25pYWxzdHlsZT5cbiAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgICAgPGgxPlNlZSB3aGF0IHBlb3BsZSBhcmUgc2F5aW5nIGFib3V0IENvbGxlZ2U8L2gxPlxuICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgPFNsaWRlclN0eWxlPlxuICAgICAgICAgICAgICAgIDxTbGlkZXIgcmVmPXtjID0+ICh0aGlzLnNsaWRlciA9IGMpfSB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgIHtkYXRhPy5tYXAoKGVhY2gsaSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxCb3gga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjb2x1bW5zPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIG1kPXs2fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VhY2guaW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwidGVzdGltb25pYWwgaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIG1sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57ZWFjaC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2VhY2guc2Nob29sfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MZWZ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIG1kPXs2fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VhY2gudGVzdGltb255fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICAgIDwvU2xpZGVyU3R5bGU+XG4gICAgICA8L1Rlc1RpbW9uaWFsc3R5bGU+XG4gICAgKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJCb3giLCJHcmlkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJTbGlkZXIiLCJzdHlsZWQiLCJUZXNUaW1vbmlhbHN0eWxlIiwiZGl2IiwiVGl0bGUiLCJMZWZ0IiwiUmlnaHQiLCJTbGlkZXJTdHlsZSIsImRhdGEiLCJuYW1lIiwic2Nob29sIiwidGVzdGltb255IiwiaW1nIiwiVGVzdGltb25pYWwiLCJwcm9wcyIsInJlbmRlciIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImZhZGUiLCJoMSIsInJlZiIsImMiLCJzbGlkZXIiLCJtYXAiLCJlYWNoIiwiaSIsImNvbnRhaW5lciIsImNvbHVtbnMiLCJtZCIsInhzIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/testimonial/Testimonial.js\n");

/***/ })

});