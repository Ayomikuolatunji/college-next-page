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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Testimonial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_img_t1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/t1.png */ \"./public/img/t1.png\");\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nfunction _templateObject() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n    width: 80%;\\n    height: 425px;\\n    margin:30px  auto;\\n    background: linear-gradient(208.18deg, #FB3846 9.05%, #B84A51 76.74%);\\n    border-radius: 24px;\\n\\n    @media (max-width:640px){\\n        width: 94%;\\n    }\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject1() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n    padding: 20px 0;\\n    text-align: center;\\n\\n    h1{\\n        font-family: 'Lato';\\n        font-style: normal;\\n        font-weight: 700;\\n        font-size: 36px;\\n        line-height: 48px;\\n        /* identical to box height, or 133% */\\n        color: #FFFFFF;\\n        mix-blend-mode: normal;\\n        margin-top: 40px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject2() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data1;\n    };\n    return data1;\n}\nfunction _templateObject3() {\n    var data1 = _taggedTemplateLiteral([\n        \"\\n\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data1;\n    };\n    return data1;\n}\nvar TesTimonialstyle = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = TesTimonialstyle;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = Title;\nvar Left = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2());\n_c2 = Left;\nvar Right = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject3());\n_c3 = Right;\nvar SliderStyle = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].d;\nvar data = [\n    {\n        name: \"Abraham Rashford\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.\",\n        img: _public_img_t1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"Chika Nonso\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.\",\n        img: _public_img_t1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"Adams Bayo\",\n        school: \"Fupre\",\n        testimony: \"“Wow I love this app and I Love the fact that i can watch videos at my own conviencie without breaking the bank with data.\",\n        img: _public_img_t1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nvar Testimonial = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Testimonial, Component1);\n    var _super = _createSuper(Testimonial);\n    function Testimonial(props) {\n        _classCallCheck(this, Testimonial);\n        var _this;\n        _this = _super.call(this, props);\n        _this.next = _this.next.bind(_assertThisInitialized(_this));\n        _this.previous = _this.previous.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(Testimonial, [\n        {\n            key: \"next\",\n            value: function next() {\n                this.slider.slickNext();\n            }\n        },\n        {\n            key: \"previous\",\n            value: function previous() {\n                this.slider.slickPrev();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var _obj;\n                var settings = (_obj = {\n                    dots: true,\n                    infinite: true,\n                    speed: 500,\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    autoplay: true\n                }, _defineProperty(_obj, \"speed\", 2000), _defineProperty(_obj, \"autoplaySpeed\", 2000), _obj);\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TesTimonialstyle, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"See what people are saying about College\"\n                            }, void 0, false, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderStyle, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread({\n                                ref: function(c) {\n                                    return _this.slider = c;\n                                }\n                            }, settings, {\n                                children: data === null || data === void 0 ? void 0 : data.map(function(each) {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                            container: true,\n                                            columns: 12,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                                    md: 12,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Left, {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"img\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                                src: _public_img_t1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                                alt: \"testimonial img\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                                lineNumber: 101,\n                                                                columnNumber: 49\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                            lineNumber: 100,\n                                                            columnNumber: 45\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 37\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                                    md: 12,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Right, {}, void 0, false, {\n                                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 37\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 28\n                                    }, _this));\n                                })\n                            }), void 0, false, {\n                                fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                textAlign: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button\",\n                                    onClick: this.previous,\n                                    children: \"Previous\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button\",\n                                    onClick: this.next,\n                                    children: \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                            lineNumber: 118,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ayomiku/Desktop/college-next-page/components/testimonial/Testimonial.js\",\n                    lineNumber: 89,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ]);\n    return Testimonial;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"TesTimonialstyle\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"Left\");\n$RefreshReg$(_c3, \"Right\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNYO0FBQ1U7QUFDUjtBQUNNO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUVOLENBV2xDOzs7Ozs7Ozs7UUFDdUIsQ0FldkI7Ozs7Ozs7OztRQUNzQixDQUV0Qjs7Ozs7Ozs7O1FBRXVCLENBRXZCOzs7Ozs7O0FBbENBLEdBQUssQ0FBQ1EsZ0JBQWdCLEdBQUNGLDZEQUFVO0tBQTNCRSxnQkFBZ0I7QUFZdEIsR0FBSyxDQUFDRSxLQUFLLEdBQUNKLDZEQUFVO01BQWhCSSxLQUFLO0FBZ0JYLEdBQUssQ0FBQ0MsSUFBSSxHQUFDTCw2REFBVTtNQUFmSyxJQUFJO0FBSVYsR0FBSyxDQUFDQyxLQUFLLEdBQUNOLDZEQUFVO01BQWhCTSxLQUFLO0FBSVgsR0FBSyxDQUFDQyxXQUFXLEdBQUNQLDJEQUFRO0FBQzFCLEdBQUssQ0FBQ1MsSUFBSSxHQUFDLENBQUM7SUFDUixDQUFDO1FBQ0dDLElBQUksRUFBQyxDQUFrQjtRQUN2QkMsTUFBTSxFQUFDLENBQU87UUFDZEMsU0FBUyxFQUFDLENBQTRIO1FBQ3BJQyxHQUFDLEVBQUNaLDBEQUFFO0lBQ1YsQ0FBQztJQUNELENBQUM7UUFDR1MsSUFBSSxFQUFDLENBQWE7UUFDbEJDLE1BQU0sRUFBQyxDQUFPO1FBQ2RDLFNBQVMsRUFBQyxDQUE0SDtRQUNwSUMsR0FBQyxFQUFDWiwwREFBRTtJQUNWLENBQUM7SUFDQSxDQUFDO1FBQ0VTLElBQUksRUFBQyxDQUFZO1FBQ2pCQyxNQUFNLEVBQUMsQ0FBTztRQUNkQyxTQUFTLEVBQUMsQ0FBNEg7UUFDdElDLEdBQUcsRUFBQ1osMERBQUU7SUFDVixDQUFDO0FBQ0wsQ0FBQztJQUNvQmEsV0FBVyxpQkFBakIsUUFBUTs7OzthQUFGQSxXQUFXLENBQ2xCQyxLQUFLOzs7a0NBQ1RBLEtBQUs7Y0FDTkMsSUFBSSxTQUFRQSxJQUFJLENBQUNDLElBQUk7Y0FDckJDLFFBQVEsU0FBUUEsUUFBUSxDQUFDRCxJQUFJOzs7OztZQUVwQ0QsR0FBSSxFQUFKQSxDQUFJO21CQUFKQSxRQUFRLENBQVJBLElBQUksR0FBRyxDQUFDO2dCQUNOLElBQUksQ0FBQ0csTUFBTSxDQUFDQyxTQUFTO1lBQ3ZCLENBQUM7OztZQUNERixHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsSUFBSSxDQUFDQyxNQUFNLENBQUNFLFNBQVM7WUFDdkIsQ0FBQzs7O1lBQ0RDLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUcsQ0FBQzs7b0JBQ1MsSUFTaEI7Z0JBVEQsR0FBSyxDQUFDQyxRQUFRLElBQUcsSUFTaEI7b0JBUkNDLElBQUksRUFBRSxJQUFJO29CQUNWQyxRQUFRLEVBQUUsSUFBSTtvQkFDZEMsS0FBSyxFQUFFLEdBQUc7b0JBQ1ZDLFlBQVksRUFBRSxDQUFDO29CQUNmQyxjQUFjLEVBQUUsQ0FBQztvQkFDakJDLFFBQVEsRUFBRSxJQUFJO21DQU5DLElBU2hCLEVBRkNILENBQUssUUFBRSxJQUFJLG1CQVBJLElBU2hCLEVBRENJLENBQWEsZ0JBQUUsSUFBSSxHQVJKLElBU2hCO2dCQUNELE1BQU0sNkVBQ0g1QixnQkFBZ0I7O29HQUNaRSxLQUFLO2tIQUNDMkIsQ0FBRTswQ0FBQyxDQUF3Qzs7Ozs7Ozs7Ozs7b0dBRWpEeEIsV0FBVztrSEFDTFIsbURBQU07Z0NBQUNpQyxHQUFHLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQztvQ0FBSSxNQUFNZCxPQUFBQSxNQUFNLEdBQUdjLENBQUM7OytCQUFPVixRQUFROzBDQUNoRGQsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBUyxHQUFUQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBSSxDQUFFeUIsR0FBRyxDQUFDQyxRQUMzQixDQUQyQkEsSUFBSSxFQUFFLENBQUM7b0NBQ2QsTUFBTSw2RUFBRXpDLDhDQUFHOzhIQUNOQywrQ0FBSTs0Q0FBQ3lDLFNBQVM7NENBQUNDLE9BQU8sRUFBRSxFQUFFOzs0SEFDbEIxQywrQ0FBSTtvREFBQzJDLEVBQUUsRUFBRSxFQUFFOzBJQUNQakMsSUFBSTs4SUFDSUYsQ0FBRzs0REFBQ29DLFNBQVMsRUFBQyxDQUFLO2tKQUNmM0MsbURBQUs7Z0VBQ040QyxHQUFHLEVBQUV2QywwREFBRTtnRUFDUHdDLEdBQUcsRUFBQyxDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRIQUtwQzlDLCtDQUFJO29EQUFDMkMsRUFBRSxFQUFFLEVBQUU7MElBQ1BoQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBTTFCLENBQUM7Ozs7Ozs7Ozs7O29HQUdSSCxDQUFHOzRCQUFDdUMsS0FBSyxFQUFFLENBQUM7Z0NBQUNDLFNBQVMsRUFBRSxDQUFROzRCQUFDLENBQUM7OzRHQUNoQ0MsQ0FBTTtvQ0FBQ0wsU0FBUyxFQUFDLENBQVE7b0NBQUNNLE9BQU8sRUFBRSxJQUFJLENBQUMzQixRQUFROzhDQUFFLENBRW5EOzs7Ozs7NEdBQ0MwQixDQUFNO29DQUFDTCxTQUFTLEVBQUMsQ0FBUTtvQ0FBQ00sT0FBTyxFQUFFLElBQUksQ0FBQzdCLElBQUk7OENBQUUsQ0FFL0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlSLENBQUM7Ozs7RUEvRHNDbEIsNENBQVM7QUFBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZXN0aW1vbmlhbC9UZXN0aW1vbmlhbC5qcz9hZWJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgdDEgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWcvdDEucG5nXCJcblxuY29uc3QgVGVzVGltb25pYWxzdHlsZT1zdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA0MjVweDtcbiAgICBtYXJnaW46MzBweCAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjA4LjE4ZGVnLCAjRkIzODQ2IDkuMDUlLCAjQjg0QTUxIDc2Ljc0JSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjY0MHB4KXtcbiAgICAgICAgd2lkdGg6IDk0JTtcbiAgICB9XG5cbmBcbmNvbnN0IFRpdGxlPXN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGgxe1xuICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMzMlICovXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbmBcbmNvbnN0IExlZnQ9c3R5bGVkLmRpdmBcblxuYFxuXG5jb25zdCBSaWdodD1zdHlsZWQuZGl2YFxuXG5gXG5cbmNvbnN0IFNsaWRlclN0eWxlPXN0eWxlZC5kXG5jb25zdCBkYXRhPVtcbiAgICB7XG4gICAgICAgIG5hbWU6XCJBYnJhaGFtIFJhc2hmb3JkXCIsXG4gICAgICAgIHNjaG9vbDpcIkZ1cHJlXCIsXG4gICAgICAgIHRlc3RpbW9ueTpcIuKAnFdvdyBJIGxvdmUgdGhpcyBhcHAgYW5kIEkgTG92ZSB0aGUgZmFjdCB0aGF0IGkgY2FuIHdhdGNoIHZpZGVvcyBhdCBteSBvd24gY29udmllbmNpZSB3aXRob3V0IGJyZWFraW5nIHRoZSBiYW5rIHdpdGggZGF0YS5cIixcbiAgICAgICAgaW1nOnQxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6XCJDaGlrYSBOb25zb1wiLFxuICAgICAgICBzY2hvb2w6XCJGdXByZVwiLFxuICAgICAgICB0ZXN0aW1vbnk6XCLigJxXb3cgSSBsb3ZlIHRoaXMgYXBwIGFuZCBJIExvdmUgdGhlIGZhY3QgdGhhdCBpIGNhbiB3YXRjaCB2aWRlb3MgYXQgbXkgb3duIGNvbnZpZW5jaWUgd2l0aG91dCBicmVha2luZyB0aGUgYmFuayB3aXRoIGRhdGEuXCIsXG4gICAgICAgIGltZzp0MVxuICAgIH0sXG4gICAgIHtcbiAgICAgICAgbmFtZTpcIkFkYW1zIEJheW9cIixcbiAgICAgICAgc2Nob29sOlwiRnVwcmVcIixcbiAgICAgICAgdGVzdGltb255Olwi4oCcV293IEkgbG92ZSB0aGlzIGFwcCBhbmQgSSBMb3ZlIHRoZSBmYWN0IHRoYXQgaSBjYW4gd2F0Y2ggdmlkZW9zIGF0IG15IG93biBjb252aWVuY2llIHdpdGhvdXQgYnJlYWtpbmcgdGhlIGJhbmsgd2l0aCBkYXRhLlwiLFxuICAgICAgICBpbWc6dDFcbiAgICB9XG5dXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0aW1vbmlhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLnByZXZpb3VzLmJpbmQodGhpcyk7XG4gIH1cbiAgbmV4dCgpIHtcbiAgICB0aGlzLnNsaWRlci5zbGlja05leHQoKTtcbiAgfVxuICBwcmV2aW91cygpIHtcbiAgICB0aGlzLnNsaWRlci5zbGlja1ByZXYoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIHNwZWVkOiAyMDAwLFxuICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8VGVzVGltb25pYWxzdHlsZT5cbiAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgICAgPGgxPlNlZSB3aGF0IHBlb3BsZSBhcmUgc2F5aW5nIGFib3V0IENvbGxlZ2U8L2gxPlxuICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgPFNsaWRlclN0eWxlPlxuICAgICAgICAgICAgICAgIDxTbGlkZXIgcmVmPXtjID0+ICh0aGlzLnNsaWRlciA9IGMpfSB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgIHtkYXRhPy5tYXAoZWFjaD0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjb2x1bW5zPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInRlc3RpbW9uaWFsIGltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SaWdodD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgICA8L1NsaWRlclN0eWxlPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucHJldmlvdXN9PlxuICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMubmV4dH0+XG4gICAgICAgICAgICBOZXh0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9UZXNUaW1vbmlhbHN0eWxlPlxuICAgICk7XG4gIH1cbn0iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIkltYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJTbGlkZXIiLCJzdHlsZWQiLCJ0MSIsIlRlc1RpbW9uaWFsc3R5bGUiLCJkaXYiLCJUaXRsZSIsIkxlZnQiLCJSaWdodCIsIlNsaWRlclN0eWxlIiwiZCIsImRhdGEiLCJuYW1lIiwic2Nob29sIiwidGVzdGltb255IiwiaW1nIiwiVGVzdGltb25pYWwiLCJwcm9wcyIsIm5leHQiLCJiaW5kIiwicHJldmlvdXMiLCJzbGlkZXIiLCJzbGlja05leHQiLCJzbGlja1ByZXYiLCJyZW5kZXIiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJoMSIsInJlZiIsImMiLCJtYXAiLCJlYWNoIiwiY29udGFpbmVyIiwiY29sdW1ucyIsIm1kIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/testimonial/Testimonial.js\n");

/***/ })

});