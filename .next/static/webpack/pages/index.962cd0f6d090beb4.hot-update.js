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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Testimonial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nfunction _templateObject() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n    width: 70%;\\n    height: 425px;\\n    margin:30px  auto;\\n    background: linear-gradient(208.18deg, #FB3846 9.05%, #B84A51 76.74%);\\n    border-radius: 24px;\\n\\n    @media (max-width:640px){\\n        width: 94%;\\n    }\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject1() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n    padding: 20px 0;\\n    text-align: center;\\n\\n    h1{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 700;\\n        font-size: 36px;\\n        line-height: 48px;\\n        /* identical to box height, or 133% */\\n        color: #FFFFFF;\\n        mix-blend-mode: normal;\\n        margin-top: 40px;\\n\\n        @media (max-width:640px){\\n            font-size: 28px;\\n        }\\n    }\\n\\n    @media (max-width:640px){\\n      padding-left: ;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject2() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n   display: flex;\\n   align-items: center;\\n\\n   h1{\\n    font-family: 'Lato';\\n    font-style: normal;\\n    font-weight: 700;\\n    font-size: 30px;\\n    line-height: 48px;\\n    /* identical to box height, or 218% */\\n    color: #FFFFFF;\\n    mix-blend-mode: normal;\\n    }\\n    h3{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 400;\\n        font-size: 25px;\\n        line-height: 48px;\\n        /* identical to box height, or 267% */\\n        color: rgba(255, 255, 255, 0.85);\\n        mix-blend-mode: normal;\\n    }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject3() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject4() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n  width: 80%;\\n  margin:30px auto;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data1;\n    };\n    return data1;\n}\nvar TesTimonialstyle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = TesTimonialstyle;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c1 = Title;\nvar Left = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = Left;\nvar Right = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c3 = Right;\nvar SliderStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n_c4 = SliderStyle;\nvar data = [\n    {\n        name: \"Abraham Rashford\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.\",\n        img: \"img/t1.png\"\n    },\n    {\n        name: \"Chika Nonso\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.\",\n        img: \"img/t1.png\"\n    },\n    {\n        name: \"Adams Bayo\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.\",\n        img: \"img/t1.png\"\n    }\n];\nvar Testimonial = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Testimonial, Component1);\n    var _super = _createSuper(Testimonial);\n    function Testimonial(props) {\n        _classCallCheck(this, Testimonial);\n        var _this;\n        _this = _super.call(this, props);\n        _this.next = _this.next.bind(_assertThisInitialized(_this));\n        _this.previous = _this.previous.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(Testimonial, [\n        {\n            key: \"next\",\n            value: function next() {\n                this.slider.slickNext();\n            }\n        },\n        {\n            key: \"previous\",\n            value: function previous() {\n                this.slider.slickPrev();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var _obj;\n                var settings = (_obj = {\n                    dots: true,\n                    infinite: true,\n                    speed: 500,\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    autoplay: true\n                }, _defineProperty(_obj, \"speed\", 2000), _defineProperty(_obj, \"autoplaySpeed\", 2000), _obj);\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TesTimonialstyle, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"See what people are saying about College\"\n                            }, void 0, false, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                lineNumber: 123,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderStyle, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({\n                                ref: function(c) {\n                                    return _this.slider = c;\n                                }\n                            }, settings, {\n                                children: data === null || data === void 0 ? void 0 : data.map(function(each) {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                                            container: true,\n                                            columns: 12,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                                                    md: 12,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Left, {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"img\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                    src: each.img,\n                                                                    alt: \"testimonial img\",\n                                                                    className: \"rounded-full border-4 border-white\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                    lineNumber: 133,\n                                                                    columnNumber: 49\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                lineNumber: 132,\n                                                                columnNumber: 45\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"title ml-4\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                                        children: each.name\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                        lineNumber: 140,\n                                                                        columnNumber: 49\n                                                                    }, _this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                        children: each.school\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                        lineNumber: 141,\n                                                                        columnNumber: 49\n                                                                    }, _this)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                lineNumber: 139,\n                                                                columnNumber: 45\n                                                            }, _this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                        lineNumber: 131,\n                                                        columnNumber: 37\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                    lineNumber: 130,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                                                    md: 12,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Right, {}, void 0, false, {\n                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                        lineNumber: 146,\n                                                        columnNumber: 37\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                    lineNumber: 145,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                            lineNumber: 129,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 28\n                                    }, _this));\n                                })\n                            }), void 0, false, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                lineNumber: 126,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                textAlign: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button\",\n                                    onClick: this.previous,\n                                    children: \"Previous\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                    lineNumber: 156,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button\",\n                                    onClick: this.next,\n                                    children: \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                    lineNumber: 159,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                            lineNumber: 155,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                    lineNumber: 121,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ]);\n    return Testimonial;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"TesTimonialstyle\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"Left\");\n$RefreshReg$(_c3, \"Right\");\n$RefreshReg$(_c4, \"SliderStyle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNEO0FBQ1I7QUFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR0osQ0FXbEM7Ozs7Ozs7OztRQUN1QixDQXVCdkI7Ozs7Ozs7OztRQUNzQixDQXdCdEI7Ozs7Ozs7OztRQUV1QixDQUV2Qjs7Ozs7Ozs7O1FBRTZCLENBRzdCOzs7Ozs7O0FBckVBLEdBQUssQ0FBQ00sZ0JBQWdCLEdBQUNELDZEQUFVO0tBQTNCQyxnQkFBZ0I7QUFZdEIsR0FBSyxDQUFDRSxLQUFLLEdBQUNILDZEQUFVO01BQWhCRyxLQUFLO0FBd0JYLEdBQUssQ0FBQ0MsSUFBSSxHQUFDSiw2REFBVTtNQUFmSSxJQUFJO0FBMEJWLEdBQUssQ0FBQ0MsS0FBSyxHQUFDTCw2REFBVTtNQUFoQkssS0FBSztBQUlYLEdBQUssQ0FBQ0MsV0FBVyxHQUFDTiw2REFBVTtNQUF0Qk0sV0FBVztBQUlqQixHQUFLLENBQUNDLElBQUksR0FBQyxDQUFDO0lBQ1IsQ0FBQztRQUNHQyxJQUFJLEVBQUMsQ0FBa0I7UUFDdkJDLE1BQU0sRUFBQyxDQUFPO1FBQ2RDLFNBQVMsRUFBQyxDQUE0SDtRQUNwSUMsR0FBQyxFQUFDLENBQVk7SUFDcEIsQ0FBQztJQUNELENBQUM7UUFDR0gsSUFBSSxFQUFDLENBQWE7UUFDbEJDLE1BQU0sRUFBQyxDQUFPO1FBQ2RDLFNBQVMsRUFBQyxDQUE0SDtRQUNwSUMsR0FBQyxFQUFDLENBQVk7SUFDcEIsQ0FBQztJQUNBLENBQUM7UUFDRUgsSUFBSSxFQUFDLENBQVk7UUFDakJDLE1BQU0sRUFBQyxDQUFPO1FBQ2RDLFNBQVMsRUFBQyxDQUE0SDtRQUN0SUMsR0FB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X05fRS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWwvVGVzdGltb25pYWwuanM/YWViYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEdyaWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuXG5jb25zdCBUZXNUaW1vbmlhbHN0eWxlPXN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDQyNXB4O1xuICAgIG1hcmdpbjozMHB4ICBhdXRvO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMDguMThkZWcsICNGQjM4NDYgOS4wNSUsICNCODRBNTEgNzYuNzQlKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NjQwcHgpe1xuICAgICAgICB3aWR0aDogOTQlO1xuICAgIH1cblxuYFxuY29uc3QgVGl0bGU9c3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaDF7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEzMyUgKi9cbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NjQwcHgpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NjQwcHgpe1xuICAgICAgcGFkZGluZy1sZWZ0OiA7XG4gICAgfVxuYFxuY29uc3QgTGVmdD1zdHlsZWQuZGl2YFxuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgIGgxe1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAyMTglICovXG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICB9XG4gICAgaDN7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDI2NyUgKi9cbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgfVxuYFxuXG5jb25zdCBSaWdodD1zdHlsZWQuZGl2YFxuXG5gXG5cbmNvbnN0IFNsaWRlclN0eWxlPXN0eWxlZC5kaXZgXG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjozMHB4IGF1dG87XG5gXG5jb25zdCBkYXRhPVtcbiAgICB7XG4gICAgICAgIG5hbWU6XCJBYnJhaGFtIFJhc2hmb3JkXCIsXG4gICAgICAgIHNjaG9vbDpcIkZ1cHJlXCIsXG4gICAgICAgIHRlc3RpbW9ueTpcIuKAnFdvdyBJIGxvdmUgdGhpcyBhcHAgYW5kIEkgTG92ZSB0aGUgZmFjdCB0aGF0IGkgY2FuIHdhdGNoIHZpZGVvcyBhdCBteSBvd24gY29udmllbmNpZSB3aXRob3V0IGJyZWFraW5nIHRoZSBiYW5rIHdpdGggZGF0YS5cIixcbiAgICAgICAgaW1nOlwiaW1nL3QxLnBuZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6XCJDaGlrYSBOb25zb1wiLFxuICAgICAgICBzY2hvb2w6XCJGdXByZVwiLFxuICAgICAgICB0ZXN0aW1vbnk6XCLigJxXb3cgSSBsb3ZlIHRoaXMgYXBwIGFuZCBJIExvdmUgdGhlIGZhY3QgdGhhdCBpIGNhbiB3YXRjaCB2aWRlb3MgYXQgbXkgb3duIGNvbnZpZW5jaWUgd2l0aG91dCBicmVha2luZyB0aGUgYmFuayB3aXRoIGRhdGEuXCIsXG4gICAgICAgIGltZzpcImltZy90MS5wbmdcIlxuICAgIH0sXG4gICAgIHtcbiAgICAgICAgbmFtZTpcIkFkYW1zIEJheW9cIixcbiAgICAgICAgc2Nob29sOlwiRnVwcmVcIixcbiAgICAgICAgdGVzdGltb255Olwi4oCcV293IEkgbG92ZSB0aGlzIGFwcCBhbmQgSSBMb3ZlIHRoZSBmYWN0IHRoYXQgaSBjYW4gd2F0Y2ggdmlkZW9zIGF0IG15IG93biBjb252aWVuY2llIHdpdGhvdXQgYnJlYWtpbmcgdGhlIGJhbmsgd2l0aCBkYXRhLlwiLFxuICAgICAgICBpbWc6XCJpbWcvdDEucG5nXCJcbiAgICB9XG5dXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0aW1vbmlhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLnByZXZpb3VzLmJpbmQodGhpcyk7XG4gIH1cbiAgbmV4dCgpIHtcbiAgICB0aGlzLnNsaWRlci5zbGlja05leHQoKTtcbiAgfVxuICBwcmV2aW91cygpIHtcbiAgICB0aGlzLnNsaWRlci5zbGlja1ByZXYoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIHNwZWVkOiAyMDAwLFxuICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8VGVzVGltb25pYWxzdHlsZT5cbiAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgICAgPGgxPlNlZSB3aGF0IHBlb3BsZSBhcmUgc2F5aW5nIGFib3V0IENvbGxlZ2U8L2gxPlxuICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgPFNsaWRlclN0eWxlPlxuICAgICAgICAgICAgICAgIDxTbGlkZXIgcmVmPXtjID0+ICh0aGlzLnNsaWRlciA9IGMpfSB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgIHtkYXRhPy5tYXAoZWFjaD0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjb2x1bW5zPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWFjaC5pbWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ0ZXN0aW1vbmlhbCBpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgbWwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntlYWNoLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57ZWFjaC5zY2hvb2x9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAgPC9TbGlkZXJTdHlsZT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnByZXZpb3VzfT5cbiAgICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm5leHR9PlxuICAgICAgICAgICAgTmV4dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGVzVGltb25pYWxzdHlsZT5cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIkJveCIsIkdyaWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlNsaWRlciIsInN0eWxlZCIsIlRlc1RpbW9uaWFsc3R5bGUiLCJkaXYiLCJUaXRsZSIsIkxlZnQiLCJSaWdodCIsIlNsaWRlclN0eWxlIiwiZGF0YSIsIm5hbWUiLCJzY2hvb2wiLCJ0ZXN0aW1vbnkiLCJpbWciLCJUZXN0aW1vbmlhbCIsInByb3BzIiwibmV4dCIsImJpbmQiLCJwcmV2aW91cyIsInNsaWRlciIsInNsaWNrTmV4dCIsInNsaWNrUHJldiIsInJlbmRlciIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImgxIiwicmVmIiwiYyIsIm1hcCIsImVhY2giLCJjb250YWluZXIiLCJjb2x1bW5zIiwibWQiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJoMyIsInN0eWxlIiwidGV4dEFsaWduIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/testimonial/Testimonial.js\n");

/***/ })

});